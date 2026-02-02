import "./AUnit6Lesson2Page.css";

function AUnit6Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Multiplying Polynomials</h1>

      <div className="lesson-box">
        
        
        <h4>1. Distributive Property (Binomials × Binomials)</h4>
        <ul><li>Multiply each term in the first polynomial by each term in the second</li>
        </ul><h4>2. FOIL Method</h4>
        <ul><li>First, Outer, Inner, Last</li>
        <li>Example: (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit6Lesson2Quiz")}
      >
        Take Quiz
      </button>
      
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    
      <button
        className="lessons-btn"
        onClick={() => setCurrentPage("AUnit6LessonsPage")}
      >
        Back to Lessons
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

export default AUnit6Lesson2Page;