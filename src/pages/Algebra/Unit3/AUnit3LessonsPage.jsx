import "./AUnit3LessonsPage.css";

function AUnit3LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 3: Inequalities</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit3Lesson1Page")}>
        Lesson 1 — Writing Inequalities
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit3Lesson2Page")}>
        Lesson 2 — Solving One Step Inequallities 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit3Lesson3Page")}>
        Lesson 3 — Solving Multi Step Inequalities
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit3Lesson4Page")}>
        Lesson 4 — Graphing Inequalities
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

export default AUnit3LessonsPage;
