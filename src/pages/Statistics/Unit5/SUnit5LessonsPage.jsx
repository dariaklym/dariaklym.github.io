import "./SUnit5LessonsPage.css";

function SUnit5LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 5: Correlation & Trends</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit5Lesson1Page")}>
        Lesson 1 — Scatter Plots
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit5Lesson2Page")}>
        Lesson 2 — Positive vs Negative Correlation 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit5Lesson3Page")}>
        Lesson 3 — Lines of Best Fit (Conceptual)
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit5Lesson4Page")}>
        Lesson 4 — Interpreting Trends
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit5Test")}>
        Unit Test
      </div>
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("StatisticsUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default SUnit5LessonsPage;