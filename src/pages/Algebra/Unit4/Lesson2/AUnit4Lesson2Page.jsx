import "./AUnit4Lesson2Page.css";

function AUnit4Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Evaluating Functions</h1>

      <div className="lesson-box">
        
          <h4>1. Plug in Values for x</h4>
          <ul><li>Replace x in the function with a number</li>
          </ul><h4>2. Calculate Outputs</h4>
          <ul><li>Example: f(x) = x² + 3, f(2) = 2² + 3 = 7</li>
          <li>Example: g(x) = 5x - 4, g(3) = 15 - 4 = 11</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit4Lesson2Quiz")}
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
        onClick={() => setCurrentPage("AUnit4LessonsPage")}
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

export default AUnit4Lesson2Page;