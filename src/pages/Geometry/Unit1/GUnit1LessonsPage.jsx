import "./GUnit1LessonsPage.css";

function GUnit1LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 1: Basics of Geometry</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit1Lesson1Page")}>
        Lesson 1 — Points, Lines, and Planes
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit1Lesson2Page")}>
        Lesson 2 — Angles 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit1Lesson3Page")}>
        Lesson 3 — Measuring Angles
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit1Lesson4Page")}>
        Lesson 4 — Midpoints & Segment Addition
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit1Test")}>
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

export default GUnit1LessonsPage;
