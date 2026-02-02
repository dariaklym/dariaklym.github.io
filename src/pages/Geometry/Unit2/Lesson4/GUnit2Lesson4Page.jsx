import "./GUnit2Lesson4Page.css";

function GUnit2Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Triangle Inequalities & Word Problems</h1>

      <div className="lesson-box">
        <h4>Triangle Inequality:</h4>
          <ul>
            <li>Sum of any two sides {`>`} third side</li>
            <li>Example: Sides 5, 6, x → x must be {`<`} 11 and {`>`} 1</li>
          </ul>
        <h4>Word Problem Example:</h4>
        <ul>
          <li>Sides 7, 10, x → x must be {`>`} 3 and {`<`} 17</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit2Lesson4Quiz")}
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
        onClick={() => setCurrentPage("GUnit2LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("GeometryUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default GUnit2Lesson4Page;