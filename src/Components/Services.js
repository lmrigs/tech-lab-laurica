import "../Styles/Services.scss";

function ServiceSquare(props) {
  return (
    <div className="service-square">
      <div className="icon">
        <img src={props.icon} alt="storefront icon" />
      </div>
      <div className="square-title">
        <h3>{props.title}</h3>
      </div>
      <div className="square-content">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <h2 className="section-header">Our Services</h2>
      <div className="service-grid">
        <ServiceSquare
          icon={require("../Images/Icons/icons8-web-design-96 1.png")}
          title="Design & Develop"
          text="We can help you create visually stunning and highly functional websites that reflect your brand and meet your business goals."
        />
        <ServiceSquare
          icon={require("../Images/Icons/icons8-add-basket-96 1.png")}
          title="E-commerce"
          text="As specialists in e-commerce solutions, we can help you bring your business online and reach a wider audience through a user-friendly and secure platform."
        />
        <ServiceSquare
          icon={require("../Images/Icons/icons8-upload-to-cloud-96 1.png")}
          title="Hosting"
          text="Our system engineers create efficient, secure, and scalable servers tailored to your website's traffic needs, ensuring fast and reliable performance."
        />
        <ServiceSquare
          icon={require("../Images/Icons/icons8-elderly-person-96 1.png")}
          title="Accessibility Audit"
          text="We can help you ensure website inclusivity by meeting WCAG guidelines and providing actionable recommendations for a better user experience."
        />
        <ServiceSquare
          icon={require("../Images/Icons/icons8-google-code 1.png")}
          title="Website Assessment"
          text="We can deliver a customized report on your tech stack, web analytics, user experience, SEO, and more, including actionable steps to improve your website's performance and results."
        />
        <ServiceSquare
          icon={require("../Images/Icons/icons8-google-96 1.png")}
          title="Google Optimization"
          text="Don't lose potential customers due to an outdated or unoptimized Google Business profile. Our GMB optimization service keeps your profile current and engaging."
        />
      </div>
    </>
  );
}
