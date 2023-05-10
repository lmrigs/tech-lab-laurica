import "../Styles/Hero.scss";
import Button from "./Button.js";
import Spline from "@splinetool/react-spline";

export function HeroText() {
  return (
    <div className="hero">
      <h1 className="hero-text-header">
        Empower your business with a website.
      </h1>
      <p className="hero-text-content">
        Reach your audience, boost your sales. Your business deserves to be seen
        online. Join the digital revolution. Take your business online with us.
      </p>
      <Button className="get-started" text="Get Started" />
    </div>
  );
}

export function Animation() {
  return (
    <Spline scene="https://prod.spline.design/eZG7X-ABMmstzH9n/scene.splinecode" />
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
