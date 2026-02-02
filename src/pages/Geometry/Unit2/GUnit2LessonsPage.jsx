import "./GUnit2LessonsPage.css";

function GUnit2LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 2: Triangles</h1>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit2Lesson1Page")}>
        Lesson 1 — Types of Triangles
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("GUnit2Lesson2Page")}>
        Lesson 2 — Triangle Properties 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit2Lesson3Page")}>
        Lesson 3 — Right Triangles & Pythagorean Theorem
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("GUnit2Lesson4Page")}>
        Lesson 4 — Triangle Inequalities & Word Problems
      </div>
      <div className="unit-box" onClick={()=> setCurrentPage("GUnit2Test")}>
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

export default GUnit2LessonsPage;
