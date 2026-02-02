import "./AUnit3Lesson3Page.css";

function AUnit3Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Solving Multi Step Inequalities</h1>

      <div className="lesson-box">
        

          <h4>1. Combine Like Terms First</h4>
          <ul><li>Example: 3x + 2x - 5 {`<`} 15 → 5x - 5 {`<`} 15</li>
          </ul><h4>2. Use Distributive Property</h4>
          <ul><li>Example: 2(x + 3) ≥ 10 → 2x + 6 ≥ 10 → 2x ≥ 4 → x ≥ 2</li>
          </ul><h4>3. Check Solutions</h4>
          <ul><li>Substitute a number in the solution set to verify inequality</li>
</ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit3Lesson3Quiz")}
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

export default AUnit3Lesson3Page;