import "../Styles/Hero.scss";
// import Spline from "@splinetool/react-spline";
// import { useState, useEffect } from "react";
// import Loader from "../Images/loading_bubbles.gif";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text-header">
        <span className="title-gradient">Empower</span> your <br />
        business with <br />a <span className="title-gradient">website</span>.
      </h1>
      <p className="hero-text-content">
        Reach your audience, boost your sales. <br></br>Your business deserves
        to be seen online. <br></br>Join the digital revolution. <br></br>Take
        your business online with us.
      </p>
    </div>
  );
}

// export function Animation() {
//   const [canvasLoaded, setCanvasLoaded] = useState(false);

//   useEffect(() => {
//     const canvasElement = document.querySelector(".spline canvas");
//     if (canvasElement) {
//       const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//           if (mutation.attributeName === "style") {
//             const { display, width, height } = mutation.target.style;
//             const isCanvasLoaded =
//               display === "block" && width === "100%" && height === "100%";

//             if (isCanvasLoaded) {
//               setCanvasLoaded(true);
//               observer.disconnect();
//             }
//           }
//         });
//       });

//       observer.observe(canvasElement, { attributes: true });
//     }
//   }, []);

//   return (
//     <div className="loading-animation">
//       <div className={`loading-overlay ${canvasLoaded ? "hidden" : ""}`}>
//         <img src={Loader} alt="My Image" />
//       </div>

//       {/* Your Spline component */}
//       <Spline
//         className="spline"
//         scene="https://prod.spline.design/eZG7X-ABMmstzH9n/scene.splinecode"
//       />
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <div className="container">
//       <HeroText />
//       <Animation />
//     </div>
//   );
// }
