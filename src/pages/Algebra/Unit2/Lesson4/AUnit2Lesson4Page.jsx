import "./AUnit2Lesson4Page.css";

function AUnit2Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Solving Equations with Variables on Both Sides</h1>

      <div className="lesson-box">
        <h4>1. Moving Variable to One Side</h4>
        <ul><li>Example: 3x + 5 = 2x + 9 → subtract 2x from both sides → x + 5 = 9 → subtract 5 → <b>x = 4</b></li>
        </ul><h4>2. Solving and Checking</h4>
        <ul><li>Always check: 3(4) + 5 = 2(4) + 9 → 12 + 5 = 8 + 9 → 17 = <b>17</b> ✓</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit2Lesson4Quiz")}
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

export default AUnit2Lesson4Page;