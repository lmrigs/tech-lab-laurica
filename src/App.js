import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="content" name="content">
        <Navbar />
        <Hero />
        <hr className="gradient-line"></hr>
      </div>
      <div className="services" name="services">
        <Services />
      </div>
      <div className="about-us" name="about">
        <About />
      </div>
      <div className="contact" name="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
