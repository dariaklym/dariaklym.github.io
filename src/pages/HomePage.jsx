import './HomePage.css';  
import { useEffect } from "react"; 

export default function HomePage({setCurrentPage}) {
    useEffect(() => {
    const spheres = document.querySelectorAll(".sphere");

    // sphere random speed and direction
    const data = [...spheres].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
      dy: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1)
    }));

    function animate() {
      spheres.forEach((sphere, i) => {
        const size = 180;

        data[i].x += data[i].dx;
        data[i].y += data[i].dy;

        // Bounce off walls
        if (data[i].x <= 0 || data[i].x >= window.innerWidth - size) {
          data[i].dx *= -1;
        }
        if (data[i].y <= 0 || data[i].y >= window.innerHeight - size) {
          data[i].dy *= -1;
        }

        sphere.style.left = data[i].x + "px";
        sphere.style.top = data[i].y + "px";
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="home-container">
        <div className="background-spheres">
            <div className="sphere sphere1"></div>
            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>
            <div className="sphere sphere4"></div>
            <div className="sphere sphere5"></div>
            <div className="sphere sphere6"></div>
            <div className="sphere sphere7"></div>
            <div className="sphere sphere8"></div>


            <div className="glass-box welcome-box">
                <h1>Home Page</h1>
                <p>Select  section below to begin</p>
            </div>

            <div className="sections-grid">
                <div className="glass-box section-card" onClick={() => setCurrentPage("GamesPage")}>Games</div>
                <div className="glass-box section-card" onClick={() => setCurrentPage("DTestPage")}>Diagnostic Test</div>
                <div className="glass-box section-card" onClick={() => setCurrentPage("PreAlgebraUnitsPage")}>Pre-Algebra</div>
                <div className="glass-box section-card" onClick={() => setCurrentPage("AlgebraUnitsPage")}>Algebra</div>
                <div className="glass-box section-card" onClick={() => setCurrentPage("GeometryUnitsPage")}>Geometry</div>
                <div className="glass-box section-card" onClick={() => setCurrentPage("StatisticsUnitsPage")}>Statistics</div>
            </div>
        </div>
    </div>
  );
}



