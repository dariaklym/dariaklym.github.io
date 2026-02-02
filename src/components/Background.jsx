import React, { useEffect } from "react";
import "./Background.css";

function Background() {
  useEffect(() => {
    const spheres = document.querySelectorAll(".sphere");

    spheres.forEach((sphere) => {
      const animate = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 20 + Math.random() * 10;

        sphere.animate(
          [{ transform: `translate(${x}vw, ${y}vh)` }],
          {
            duration: duration * 1000,
            fill: "forwards",
            easing: "ease-in-out"
          }
        ).onfinish = animate;
      };

      animate();
    });
  }, []);

  return (
    <div className="background-spheres">
      <div className="sphere sphere1"></div>
      <div className="sphere sphere2"></div>
      <div className="sphere sphere3"></div>
      <div className="sphere sphere4"></div>
      <div className="sphere sphere5"></div>
      <div className="sphere sphere6"></div>
    </div>
  );
}

export default Background;
