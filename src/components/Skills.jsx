function Skills() {

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "C++",
    "Java",
    "Git",
    "HTML",
    "CSS"
  ];

  return (

    <section className="skills-section">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div className="skill-card" key={skill}>

            {skill}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;