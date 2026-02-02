import "./AUnit6Lesson1Page.css";

function AUnit6Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Adding & Subtracting Polynomials</h1>

      <div className="lesson-box">
        
          <h4>1. Combine Like Terms</h4>
          <ul><li>Only combine terms with the same variable and exponent</li>
          <li>Example: (3x² + 2x + 5) + (x² + 4x + 1) = 4x² + 6x + 6</li>
          </ul><h4>2. Simple Examples</h4>
          <ul><li>(2x + 3) + (4x + 5) = 6x + 8</li>
          <li>(5x² - 3x + 2) - (2x² + x - 1) = 3x² - 4x + 3</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit6Lesson1Quiz")}
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

export default AUnit6Lesson1Page;