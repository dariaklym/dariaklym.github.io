import "./SUnit1LessonsPage.css";

function SUnit1LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 1: Data Basics</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit1Lesson1Page")}>
        Lesson 1 — Types of Data
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit1Lesson2Page")}>
        Lesson 2 — Organizing Data 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit1Lesson3Page")}>
        Lesson 3 — Graphing Data
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit1Lesson4Page")}>
        Lesson 4 — Reading Graphs
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("SUnit1Test")}>
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

export default SUnit1LessonsPage;