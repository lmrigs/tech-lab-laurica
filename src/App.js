import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

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
    </>
  );
}

export default App;
