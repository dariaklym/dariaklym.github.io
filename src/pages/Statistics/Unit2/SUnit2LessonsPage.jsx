import "./SUnit2LessonsPage.css";

function SUnit2LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 2: Measures of Central Tendency</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit2Lesson1Page")}>
        Lesson 1 — Mean
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit2Lesson2Page")}>
        Lesson 2 — Median 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit2Lesson3Page")}>
        Lesson 3 — Mode & Range
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit2Lesson4Page")}>
        Lesson 4 — Choosing the Right Measure
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit2Test")}>
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

export default SUnit2LessonsPage;