import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Education from "./components/Education";
import SkillBars from "./components/SkillBars";
function App() {
  return (
    <>
       <Navbar />

  <Hero />

  <About />
  <Education />
  <Skills />
  <Cursor />
  <Projects />
  
  <Experience />
 <SkillBars/>
  <Certificates />

  <Contact />

  <Footer />
    </>
  );
}

export default App;