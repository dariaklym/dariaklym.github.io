import "./AUnit2LessonsPage.css";

function AUnit2LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 2: Solving Equations</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit2Lesson1Page")}>
        Lesson 1 — One Step Equations
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit2Lesson2Page")}>
        Lesson 2 — Two Step Equations 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit2Lesson3Page")}>
        Lesson 3 — Multi Step Equations
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit2Lesson4Page")}>
        Lesson 4 — Solving Equations with Variables on Both Sides
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

export default AUnit2LessonsPage;
