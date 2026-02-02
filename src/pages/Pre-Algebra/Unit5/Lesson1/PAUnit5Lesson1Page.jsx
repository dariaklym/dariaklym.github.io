import "./PAUnit5Lesson1Page.css";

function PAUnit5Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 - Evaluating Algebraic Expressions</h1>

      <div className="lesson-box">
        <ul>

            <li>An <b>expression</b> is a mathematical phrase with numbers, variables, and operations.</li>
            <li>To <b>evaluate</b> an expression, substiture the value of the variable and simplify.</li>
            <ul><li>Example: Evaluate 2x + 5 when x = 4</li></ul>
            <li>Follow the order of operations (PEMDAS)</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit5Lesson1Quiz")}
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
        onClick={() => setCurrentPage("PAUnit5LessonsPage")}
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

export default PAUnit5Lesson1Page;