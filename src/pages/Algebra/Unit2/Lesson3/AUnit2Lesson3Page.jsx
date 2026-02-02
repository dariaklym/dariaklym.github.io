import "./AUnit2Lesson3Page.css";

function AUnit2Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Multi Step Equations</h1>

      <div className="lesson-box">
        
           <h4>1. Combine Like Terms First</h4>
           <ul><li>Example: 3x + 2x - 5 = 15 → 5x - 5 = <b>15</b></li>
          </ul> <h4>2. Using Distributive Property</h4>
           <ul><li>Example: 2(x + 3) + 4 = 12 → 2x + 6 + 4 = 12 → 2x + 10 = <b>12</b></li>
           </ul><h4>3. Solve for the Variable</h4>
           <ul><li>Continue isolating the variable step by step</li>
           <li>Example above: 2x + 10 = 12 → 2x = 2 → <b>x = 1</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit2Lesson3Quiz")}
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

export default AUnit2Lesson3Page;