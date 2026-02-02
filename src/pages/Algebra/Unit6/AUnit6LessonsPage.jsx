import "./AUnit6LessonsPage.css";

function AUnit6LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 6: Polynomials & Quadratics</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit6Lesson1Page")}>
        Lesson 1 — Adding & Subtracting Polynomials
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit6Lesson2Page")}>
        Lesson 2 — Multiplying Polynomials 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit6Lesson3Page")}>
        Lesson 3 — Factoring Polynomials
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit6Lesson4Page")}>
        Lesson 4 — Quadratic Equations Basics
      </div>
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
      
      <button
        className="units-btn"
        onClick={() => setCurrentPage("AlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default AUnit6LessonsPage;
