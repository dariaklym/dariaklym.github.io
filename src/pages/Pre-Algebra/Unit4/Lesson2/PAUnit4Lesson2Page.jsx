import "./PAUnit4Lesson2Page.css";

function PAUnit4Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Combining Like Terms</h1>

      

      <div className="lesson-box">
        <ul>

          <h5>Like vs Unlike Terms</h5>
          <b>Like terms</b> have the same variable and the same exponent.
          <ul>Examples:
            <li>3x and 7x → like</li>
            <li>2y and 5y → like</li>
            <li>4x and 4 → unlike</li>
            <li>x and x^2 → unlike</li>
          </ul>
          <h5>Combining Like Terms</h5>
          Add or subtract coefficients.
          <ul>Examples:
            <li>3x + 5x = 8x</li>
            <li>10y - 6y = 4y</li>
            <li>2x + 3 + 5x = 7x + 3</li>
          </ul>
          <h5>Simplifying Expressions</h5>
          Combine all like terms.
          <ul>Example:
            <ul>6x + 2 – 3x + 5 → (6x – 3x) + (2 + 5) → 3x + 7</ul>
          </ul>
      </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit4Lesson2Quiz")}
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

export default PAUnit4Lesson2Page;