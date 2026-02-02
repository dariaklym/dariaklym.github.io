import "./PAUnit6LessonsPage.css";

function PAUnit6LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit6-container">
      <h1 className="units-title">Unit 6: Geometry and Statistics Basics</h1>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit6Lesson1Page")}>
        Lesson 1 — Angles & Lines
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit6Lesson2Page")}>
        Lesson 2 — Perimeter & Area
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit6Lesson3Page")}>
        Lesson 3 — Volume Basics
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit6Lesson4Page")}>
        Lesson 4 — Basic Statistics
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

export default PAUnit6LessonsPage;