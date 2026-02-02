import "./AUnit2Lesson2Page.css";

function AUnit2Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Two Step Equations</h1>

      <div className="lesson-box">
        
          <h4>1. Solving Step by Step</h4>
          <ul><li>Undo addition/subtraction first, then multiplication/division</li>
          <ul><li>Example: 2x + 3 = 11 → subtract 3 → 2x = 8 → divide 2 → <b>x = 4</b></li>
          </ul></ul><h4>Practice with Integers and Decimals</h4>
          <ul><li>Example: 0.5y - 2 = 3 → add 2 →  0.5y = 5 → divide by 0.5 → <b>y = 10</b></li>
</ul>

          
       
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit2Lesson2Quiz")}
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

export default AUnit2Lesson2Page;