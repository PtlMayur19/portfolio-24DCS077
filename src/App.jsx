import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
  ];

  return (
    <div>
      <Header name="Mayur Patel" />

      <About />

      <Skills skillList={skills} />

      <Footer email="19.maayur@gmail.com" />
    </div>
  );
}

export default App;