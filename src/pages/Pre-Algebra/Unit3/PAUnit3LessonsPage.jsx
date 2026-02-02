import "./PAUnit3LessonsPage.css";

function PAUnit3LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit3-container">
      <h1 className="units-title">Unit 3: Ratios, Rates, & Percents</h1>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit3Lesson1Page")}>
        Lesson 1 — Ratios
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit3Lesson2Page")}>
        Lesson 2 — Rates & Unnit Rate 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit3Lesson3Page")}>
        Lesson 3 — Percent Basics
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit3Lesson4Page")}>
        Lesson 4 — Percent Problems
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

export default PAUnit3LessonsPage;
