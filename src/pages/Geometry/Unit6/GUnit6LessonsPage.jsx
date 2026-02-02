import "./GUnit6LessonsPage.css";

function GUnit6LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 6: Volume, Surface Area & Transformations</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit6Lesson1Page")}>
        Lesson 1 — Surface Area of Solids
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit6Lesson2Page")}>
        Lesson 2 — Volume of Solids 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit6Lesson3Page")}>
        Lesson 3 — Transformations (Text-based)
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit6Lesson4Page")}>
        Lesson 4 — Composite Solids & Mixed Problems
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit6Test")}>
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

export default GUnit6LessonsPage;
