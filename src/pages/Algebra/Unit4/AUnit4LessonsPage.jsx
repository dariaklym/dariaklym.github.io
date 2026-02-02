import "./AUnit4LessonsPage.css";

function AUnit4LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 4: Functions & Relations</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit4Lesson1Page")}>
        Lesson 1 — Understanding Functions
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit4Lesson2Page")}>
        Lesson 2 — Evaluating Functions 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit4Lesson3Page")}>
        Lesson 3 — Linear Functions
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit4Lesson4Page")}>
        Lesson 4 — Writing Linear Equations
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

export default AUnit4LessonsPage;
