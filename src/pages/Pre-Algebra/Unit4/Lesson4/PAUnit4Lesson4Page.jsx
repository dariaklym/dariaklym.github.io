import "./PAUnit4Lesson4Page.css";

function PAUnit4Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Two-Step Equations</h1>

      

      <div className="lesson-box">
        <ul>
          <h4>Steps to Solve</h4>
          <h5>1. Undo addition/subtraction first</h5>
          <h5>The undo multiplication/division</h5>
          <ul>
            Example:
            <ul>3x + 4 = 19
              <ul>Step 1: subtract 4 → 3x = 15</ul>
              <ul>Step 2: divide by 3 →  x = 5</ul>
            </ul>
            Another example:
              <ul>x / 2 - 7 = 3
                <ul>Step 1: add 7 → x / 2 = 10</ul>
                <ul>Step 2: multiply by 2 → x = 20</ul>
              </ul>
          </ul>

          <h4>Checking Solutions</h4>
          Plug answer back in.
          <ul>Example:
            <ul>x = 5 for 3x + 4 = 19</ul>
            <ul><b>Check:</b> 3(5) + 4 = 15 + 4 = 19 ✔</ul>
          </ul>

          
          </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit4Lesson4Quiz")}
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
        onClick={() => setCurrentPage("PAUnit4LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("PreAlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default PAUnit4Lesson4Page;