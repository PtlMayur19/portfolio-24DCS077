import { useState, useEffect } from "react";

// The actual GitHub username from the repository URL: https://github.com/PtlMayur19/portfolio-24DCS077
// You can replace this value if you want to display repositories from another user.
const GITHUB_USERNAME = "PtlMayur19";

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Rust: "#dea584",
  };
  return colors[language] || "#888888";
};

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch repositories (Status ${response.status}: ${response.statusText})`
        );
      }
      const data = await response.json();
      // Filter out forks if desired, or keep all. Let's keep all but sort or clean them.
      setRepos(data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching repositories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Dynamic showcase of my GitHub repositories</p>
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search repositories by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && (
        <div className="state-container">
          <div className="spinner"></div>
          <p>Loading projects from GitHub...</p>
        </div>
      )}

      {!loading && error && (
        <div className="state-container">
          <p className="error-message">{error}</p>
          <button onClick={fetchRepos} className="retry-button">
            Retry Connection
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {filteredRepos.length === 0 ? (
            <div className="state-container">
              <p className="no-results">
                {repos.length === 0
                  ? "No repositories found for this user."
                  : `No repositories matching "${searchTerm}" found.`}
              </p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredRepos.map((repo) => (
                <div key={repo.id} className="project-card">
                  <div className="project-card-top">
                    <h3 className="project-title">{repo.name}</h3>
                    <p className="project-desc">
                      {repo.description ||
                        "No description provided for this repository. Visit GitHub to learn more."}
                    </p>
                  </div>
                  <div className="project-card-bottom">
                    <div className="project-meta">
                      {repo.language && (
                        <span className="project-lang">
                          <span
                            className="lang-dot"
                            style={{
                              backgroundColor: getLanguageColor(repo.language),
                            }}
                          ></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="project-stars" title="Stars">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Code ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;