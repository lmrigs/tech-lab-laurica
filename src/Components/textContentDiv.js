import "../Styles/textContentDiv.scss";
import Button from "./button.js";

export default function HeroContent() {
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
