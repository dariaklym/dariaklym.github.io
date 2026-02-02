import "./AUnit3Lesson2Page.css";

function AUnit3Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Solving One Step Inequallities</h1>

      <div className="lesson-box">
        
          <h4>1. Add/Subtract/Multiply/Dividea</h4>
          <ul><li>Example: x + 5 {`>`} 12 → subtract 5 → x {`>`} 7</li>
          <li>Example: 3y ≤ 9 → divide 3 → y ≤ -3</li>
          </ul><h4>2. Remember to Flip the Sign When Multiplying/Dividing by Negative</h4>
          <ul><li>Example: -2x ≥ 6  → divide by -2 → x ≤ -3</li>        
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit3Lesson2Quiz")}
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
        onClick={() => setCurrentPage("AUnit3LessonsPage")}
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

export default AUnit3Lesson2Page;