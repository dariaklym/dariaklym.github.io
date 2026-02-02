import "./PAUnit4LessonsPage.css";

function PAUnit4LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit4-container">
      <h1 className="units-title">Unit 3: Ratios, Rates, & Percents</h1>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit4Lesson1Page")}>
        Lesson 1 — Expressions & Order of Operations
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit4Lesson2Page")}>
        Lesson 2 — Comining Like Terms 
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit4Lesson3Page")}>
        Lesson 3 — One Step Equations
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit4Lesson4Page")}>
        Lesson 4 —  Two Step Equations
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

export default PAUnit4LessonsPage;
