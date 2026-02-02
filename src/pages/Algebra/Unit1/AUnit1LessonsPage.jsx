import "./AUnit1LessonsPage.css";

function AUnit1LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 1: Expressions & Simplifying</h1>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit1Lesson1Page")}>
        Lesson 1 — Variables & Expressions
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("AUnit1Lesson2Page")}>
        Lesson 2 — Order of Operations Review 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit1Lesson3Page")}>
        Lesson 3 — Combining Like Terms
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit1Lesson4Page")}>
        Lesson 4 — Distributive Property
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("AUnit1Test")}>
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
        onClick={() => setCurrentPage("AlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default AUnit1LessonsPage;
