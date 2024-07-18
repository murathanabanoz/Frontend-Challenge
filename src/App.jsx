import { useEffect } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast("Welcome to my website", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
