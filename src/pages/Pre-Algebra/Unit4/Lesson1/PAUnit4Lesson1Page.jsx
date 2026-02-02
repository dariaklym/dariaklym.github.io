import "./PAUnit4Lesson1Page.css";

function PAUnit4Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 - Expressions & Equations</h1>

      

      <div className="lesson-box">
        <ul>
          <h5>Terms & Coefficients</h5>
          <li>A <b>term</b> is a number, a variable, or both (like 3x, 7, x).</li>
          <li>A <b>coefficient</b> is the number in front of a variable (in 5x, 5 is the coefficient)</li>
          <h5>Expressions</h5>
          <ul>
            An <b>expressions</b> has NO equals sign.<br />
            Examples: 
            <li>3x + 4</li>
            <li>7 - 2x</li>
          </ul>
          <h5>PEMDAS (Order of Operations)</h5>
          P - Parentheses<br />
          E - Exponents <br />
          MD - Multiply/Divide (left to right) <br />
          AS - Add/Subtract (left to right) <br />
          <ul>Example:
            <ul>8 + 4 * 3 = 8 + 12 = 20</ul>
          </ul>

        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit4Lesson1Quiz")}
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

export default PAUnit4Lesson1Page;