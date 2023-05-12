import "../Styles/AboutUs.scss";
import { ReactComponent as AboutIcon } from "../Images/Icons/About Us Icons.svg";

export default function About() {
  return (
    <>
      <h2 className="section-header">About Us</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            At Tech Lab, we believe in the power of local businesses to build
            strong communities.{" "}
          </p>
          <p>
            That's why we're dedicated to helping small businesses establish a
            strong online presence.
          </p>
          <p>
            With years of experience working with businesses of all sizes, we've
            seen how an up-to-date and engaging online presence can drive growth
            and attract new customers.
          </p>
          <p>
            Our team specializes in creating visually stunning websites and
            optimizing online profiles that reflect your brand and capture the
            attention of your audience.
          </p>
          <p>
            Whether you're just starting out or looking to improve your existing
            online presence, we're here to help.
          </p>
          <p>
            Let's work together to bring your business to the forefront of the
            digital world and build a stronger community by shopping local.
          </p>
        </div>
        <div className="about-icon">
          <AboutIcon />
        </div>
      </div>
    </>
  );
}
