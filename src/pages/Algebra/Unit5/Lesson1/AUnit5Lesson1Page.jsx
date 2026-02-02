import "./AUnit5Lesson1Page.css";

function AUnit5Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Solving by Graphing</h1>

      <div className="lesson-box">
        

          <h4>1. Plot Both Lines</h4>
          <ul><li>Each equation of the system can be written in slope-intercept form: y = mx + b</li>
          <li>Plot the y-intercept and use the slope to draw each line</li>
           </ul><h4>2. Find Intersection Point</h4>
          <ul><li>The solution is the point where the two lines cross</li>
          <li>Example: y = x + 1, y = -x + 5 → intersection at (2, 3)</li>
</ul>
       
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit5Lesson1Quiz")}
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

export default AUnit5Lesson1Page;