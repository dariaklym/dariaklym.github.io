import "./AUnit4Lesson3Page.css";

function AUnit4Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Linear Functions</h1>

      <div className="lesson-box">
       
          <h4>1. Slope and y-Intercept</h4>
           <ul>
<li>Linear function formula: y = mx + b</li>
          <li>m is slope (rise/run), b is y-intercept</li>
          </ul><h4>2. Graphing Using Slope-Intercept Form</h4>
          <ul><li>Example: y = 2x + 1 → y-intercept at 1, slope 2 → up 2, right 1</li>
</ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit4Lesson3Quiz")}
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
        onClick={() => setCurrentPage("AUnit4LessonsPage")}
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

export default AUnit4Lesson3Page;