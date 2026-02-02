import "./AUnit5Lesson3Page.css";

function AUnit5Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Solving by Elimination</h1>

      <div className="lesson-box">
        
          <h4>1. Add/Subtract Equations to Eliminate a Variable</h4>
          <ul><li>Example:</li>
          <ul>
            <li>2x + y = 7</li>
            <li>x - y = 1</li>
            <li>Add: 3x = 8 → x = 8/3</li>
            <li>Substitute to find y</li>
          </ul>
          </ul><h4>2. Solve for the Other Variable</h4>
          <ul><li>Once one variable is eliminated and solved, substitute back into either original equation</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit5Lesson3Quiz")}
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
        onClick={() => setCurrentPage("AUnit5LessonsPage")}
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

export default AUnit5Lesson3Page;