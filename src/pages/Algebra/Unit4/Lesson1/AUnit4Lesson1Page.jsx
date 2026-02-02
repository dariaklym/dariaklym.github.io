import "./AUnit4Lesson1Page.css";

function AUnit4Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 - Understanding Functions</h1>

      <div className="lesson-box">
        
        <h4>1. Definition of a Function</h4>
        <ul><li>A function is a rule that assigns <b>exactly one output</b> for each input.</li>
         </ul><h4>2. Inputs and Outputs</h4>
        <ul><li>The input is usually called x, the output is y or f(x).</li>
        <li>Example: If f(x) = 2x + 3, then input x = 1 → output f(1) = 5</li>
        </ul><h4>3. Function Notation f(x)</h4>
        <ul><li>f(x) means the value of the function at x</li>
        <li>Example: f(4) = 2(4) + 3 = 11</li>
       </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit4Lesson1Quiz")}
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

export default AUnit4Lesson1Page;