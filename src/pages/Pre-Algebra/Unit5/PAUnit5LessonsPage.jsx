import "./PAUnit5LessonsPage.css";

function PAUnit5LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit5-container">
      <h1 className="units-title">Unit 5: Expressions, Equations, and Inequalities</h1>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit5Lesson1Page")}>
        Lesson 1 — Evaluating Algebraic Expressions
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit5Lesson2Page")}>
        Lesson 2 — Writing and Solving 1-Step Equations 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit5Lesson3Page")}>
        Lesson 3 — Writing and Solving 2-Step Equations
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit5Lesson4Page")}>
        Lesson 4 — Solving Inequalities & Graphing on a Number Line
      </div>
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("PreAlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default PAUnit5LessonsPage;