import "./AUnit3Lesson4Page.css";

function AUnit3Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Graphing Inequalities</h1>

      <div className="lesson-box">
        
          <h4>1. Plotting on a Number Line</h4>
          <ul><li>Open circle for {`<`} or {`>`}</li>
          <li>Closed circle for ≤ or ≥</li>
          <li>Shade in the direction of the inequality</li>
          </ul><h4>2. Interval Notation Basics</h4>
          <ul><li>x {`>`} 3 → (3, ∞)</li>
          <li>y ≤ 5 → {`(`}-∞, 5{`]`}</li>
          </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit3Lesson4Quiz")}
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

export default AUnit3Lesson4Page;