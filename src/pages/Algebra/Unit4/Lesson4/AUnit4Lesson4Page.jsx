import "./AUnit4Lesson4Page.css";

function AUnit4Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Writing Linear Equations</h1>

      <div className="lesson-box">
        

          <h4>1. From a Table</h4>
          <ul><li>Find slope using two points (x1, y1) and (x2, y2)</li>
          <li>Use slope and point to write y = mx + b</li>
          </ul><h4>2. From a Graph</h4>
          <ul><li>Identify slope and y-intercept from the graph</li>
          <li>Write equation using y = mx + b</li>
          </ul><h4>3. Using Slope and Point</h4>
          <ul><li>Example: Point (2, 5), slope 3 → y - 5 = 3(x - 2) → y = 3x - 1</li>
</ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit4Lesson4Quiz")}
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

export default AUnit4Lesson4Page;