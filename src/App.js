import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="content" id="content">
        <Navbar />
        <Hero />
      </div>
      <div className="services" id="services">
        <Services />
      </div>
      <div className="about-us" id="about">
        <About />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
