import "../Styles/Hero.scss";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import Loader from "../Images/Loading Carga.gif";

export function HeroText() {
  return (
    <div className="hero">
      <h1 className="hero-text-header">
        Empower your <br />
        business with <br />a website.
      </h1>
      <p className="hero-text-content">
        Reach your audience, boost your sales. Your business deserves to be seen
        online. Join the digital revolution. Take your business online with us.
      </p>
    </div>
  );
}

export function Animation() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  useEffect(() => {
    const canvasElement = document.querySelector(".spline canvas");
    if (canvasElement) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.attributeName === "style" ||
            mutation.attributeName === "display" ||
            mutation.attributeName === "width" ||
            mutation.attributeName === "height"
          ) {
            const { display, width, height } = mutation.target.style;
            const isCanvasLoaded =
              display === "block" && width === "100%" && height === "100%";

            if (isCanvasLoaded) {
              setCanvasLoaded(true);
              observer.disconnect();
            }
          }
        });
      });
      observer.observe(canvasElement, { attributes: true });
    }
  }, []);

  return (
    <div className="loading-animation">
      <div className={`loading-overlay ${canvasLoaded ? "hidden" : ""}`}>
        <img src={Loader} alt="My Image" />
      </div>

      {/* Your Spline component */}
      <Spline
        className="spline"
        scene="https://prod.spline.design/eZG7X-ABMmstzH9n/scene.splinecode"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="container">
      <HeroText />
      <Animation />
    </div>
  );
}
