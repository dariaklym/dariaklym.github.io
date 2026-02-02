import "./Unit1LessonsPage.css";

function Unit1LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit1-container">
      <h1 className="units-title">Unit 1: Working With Numbers</h1>

      <div className="unit-box" onClick={() => setCurrentPage("Lesson1Page")}>
        Lesson 1 — Positive & Negative Numbers
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit1Lesson2Page")}>
        Lesson 2 — Adding Integers
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit1Lesson3Page")}>
        Lesson 3 — Subtracting Integers
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("PAUnit1Lesson4Page")}>
        Lesson 4 — Multiplying / Dividing Integers
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

export default Unit1LessonsPage;
