import "./PAUnit2LessonsPage.css";

function PAUnit2LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit2-container">
      <h1 className="units-title">Unit 2: Fractions</h1>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit2Lesson1Page")}>
        Lesson 1 — What Fractions Mean
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit2Lesson2Page")}>
        Lesson 2 — Fractions Operations 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit2Lesson3Page")}>
        Lesson 3 — Decimals
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("PAUnit2Lesson4Page")}>
        Lesson 4 — Operations With Decimals
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

export default PAUnit2LessonsPage;
