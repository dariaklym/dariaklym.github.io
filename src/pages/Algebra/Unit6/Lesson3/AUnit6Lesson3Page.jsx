import "./AUnit6Lesson3Page.css";

function AUnit6Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Factoring Polynomials</h1>

      <div className="lesson-box">
       
          <h4>1. Greatest Common Factor (GCF)</h4>
           <ul>
<li>Factor out the largest number and variable shared by all terms</li>
          <li>Example: 6x² + 9x = 3x(2x + 3)</li>
          </ul><h4>2. Factoring Trinomials</h4>
          <ul><li>Example: x² + 5x + 6 → find two numbers that multiply to 6 and add to 5 → (x + 2)(x + 3)</li>
</ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit6Lesson3Quiz")}
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

export default AUnit6Lesson3Page;