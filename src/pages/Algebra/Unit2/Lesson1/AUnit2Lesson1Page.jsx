import "./AUnit2Lesson1Page.css";

function AUnit2Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — One Step Equations</h1>

      <div className="lesson-box">
        
          <h4>1. Solve Using Addition/Subtraction</h4>
          <ul><li>Goal: Isolate the variable</li>
          <li>Example: x + 5 = 12 → subtract 5 from both sides → <b>x = 7</b></li>
          <li>Example: y - 3 = 10 → add 3 to both sides → <b>y = 13</b></li>
          </ul><h4>2. Solve Using Multiplication/Division</h4>
          <ul><li>Example: 3x = 15 → divide both sides by 3 → <b>x = 5</b></li>
          <li>Example: y / 4 = 2 → multiply both sides by 4 → <b>y = 8</b></li>
          </ul><h4>3. Checking Solutions</h4>
          <ul><li>Substitute the solution back into the original equation to verify</li>
          <li>Example: x + 5 = 12, solution x = 7 → 7 + 5 = <b>12</b> ✓</li>
          </ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit2Lesson1Quiz")}
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
        onClick={() => setCurrentPage("AUnit2LessonsPage")}
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

export default AUnit2Lesson1Page;