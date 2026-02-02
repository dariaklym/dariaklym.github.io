import "./GUnit4LessonsPage.css";

function GUnit4LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 4: Circles</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit4Lesson1Page")}>
        Lesson 1 — Circle Basics
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit4Lesson2Page")}>
        Lesson 2 — Arcs & Circumference 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit4Lesson3Page")}>
        Lesson 3 — Area of Circles & Sectors
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit4Lesson4Page")}>
        Lesson 4 — Tangent & Chord Problems
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit4Test")}>
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

export default GUnit4LessonsPage;
