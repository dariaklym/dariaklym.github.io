import "./GUnit5LessonsPage.css";

function GUnit5LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 5: Coordinate Geometry</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit5Lesson1Page")}>
        Lesson 1 — Points on Plane
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit5Lesson2Page")}>
        Lesson 2 — Distance & Midpoint Formulas 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit5Lesson3Page")}>
        Lesson 3 — Slope & Lines
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit5Lesson4Page")}>
        Lesson 4 — Word Problems & Applications
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit5Test")}>
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
        onClick={() => setCurrentPage("GeometryUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default GUnit5LessonsPage;
