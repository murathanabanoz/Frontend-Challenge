import "./App.css";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
