import "./GUnit3LessonsPage.css";

function GUnit3LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 3: Quadrilaterals & Polygons</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit3Lesson1Page")}>
        Lesson 1 — Quadrilaterals
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit3Lesson2Page")}>
        Lesson 2 — Other Polygons 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit3Lesson3Page")}>
        Lesson 3 — Perimeter & Area
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit3Lesson4Page")}>
        Lesson 4 — Mixed Problems
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit3Test")}>
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

export default GUnit3LessonsPage;
