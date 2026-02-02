import "./AUnit6Lesson4Page.css";

function AUnit6Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Quadratic Equations Basics</h1>

      <div className="lesson-box">
       
          <h4>1. Solving Simple Quadratics by Factoring</h4>
          <ul> <li>Set the equation equal to 0: x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = -2, -3</li>
          </ul><h4>2. Check Solutions</h4>
          <ul><li>Substitute values back into original equation to verify correctness</li>
</ul>

          
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit6Lesson4Quiz")}
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

export default AUnit6Lesson4Page;