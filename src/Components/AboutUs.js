import "../Styles/AboutUs.scss";

export default function About() {
  return (
    <>
      <h2 className="section-header">About Us</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            At Tech Lab, we believe local businesses are the building blocks of
            strong communities.That's why we're dedicated to helping small
            businesses establish an impactful online presence.
          </p>
          <p>
            Our team specializes in creating visually stunning websites and
            optimizing online profiles. Whether you're just starting out or
            looking to improve your existing online presence, we're here to
            help.
          </p>
          <p>
            Let's work together to bring your business to the forefront of the
            digital world and build a stronger community by shopping local.
          </p>
        </div>
        <div className="about-icon">
          <img src={require("../Images/Icons/About Us Icons.png")}></img>
        </div>
      </div>
    </>
  );
}
