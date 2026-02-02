import "./AUnit5Lesson2Page.css";

function AUnit5Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Solving by Substitution</h1>

      <div className="lesson-box">
        

          <h4>1. Substitute One Equation into the Other</h4>
          <ul><li>Solve one equation for a variable and replace it in the second equation</li>
          </ul><h4>2. Solve Step-by-Step</h4>
          <ul><li>Example:</li>
          <ul>
            <li>x + y = 5 → <b>y = 5 - x</b></li>
            <li>2x + 3y = 12 → 2x + 3(5 - x) = 12 → 2x + 15 - 3x = 12 → -x = -3 → <b>x = 3</b></li>
            <li>y = 5 - 3 → <b>y = 2</b></li>
          </ul>

        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit5Lesson2Quiz")}
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

export default AUnit5Lesson2Page;