import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="content">
        <Navbar />
        <Hero />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="about-us">
        <About />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
