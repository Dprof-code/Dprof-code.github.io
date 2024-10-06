import { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TechStacks from "./components/TechStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Counters from "./components/Counters";
import ParticlesBackground from "./components/ParticlesBackground";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <header>
            <NavBar />
          </header>
          <ParticlesBackground />
          <main>
            <Home />
            <AboutMe />
            <Counters />
            <Portfolio />
            <Services />
            <TechStacks />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
