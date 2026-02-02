import "./AUnit5Lesson4Page.css";

function AUnit5Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Word Problems with Systems</h1>

      <div className="lesson-box">
        
          <h4>1. Translate Words to Equations</h4>
          <ul><li>Identify variables and relationships</li>
          <li>Example: “A number plus its double is 9” → x + 2x = 9</li>
          </ul><h4>2. Solve Using Substitution or Elimination</h4>
          <ul><li>Solve step-by-step using methods learned</li>
</ul>

        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit5Lesson4Quiz")}
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

export default AUnit5Lesson4Page;