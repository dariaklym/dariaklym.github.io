import "./AUnit5LessonsPage.css";

function AUnit5LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 5: Systems of Equations</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit5Lesson1Page")}>
        Lesson 1 — Solving by Graphing
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit5Lesson2Page")}>
        Lesson 2 — Solving by Substitution 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit5Lesson3Page")}>
        Lesson 3 — Solving by Elimination
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit5Lesson4Page")}>
        Lesson 4 — Word Problems with Systems
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

export default AUnit5LessonsPage;
