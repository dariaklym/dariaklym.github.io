import "./SUnit6LessonsPage.css";

function SUnit6LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 6: Advanced Descriptive Statistics</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit6Lesson1Page")}>
        Lesson 1 — Standard Deviation (Conceptual)
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit6Lesson2Page")}>
        Lesson 2 — Variance 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit6Lesson3Page")}>
        Lesson 3 — Z-Scores (Conceptual)
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit6Lesson4Page")}>
        Lesson 4 — Word Problems & Real-World Applications
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("SUnit6Test")}>
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

export default SUnit6LessonsPage;