import "./PAUnit1Lesson2Page.css";

function PAUnit1Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Adding Integers</h1>

      <div className="lesson-box">
        <h3>1. Same Sign Addition</h3>
        <ul>
            <li>
                Add normally, keep the sign.
            </li>
        </ul>
        <p>Example: -5 + -3 = -8</p>

        <h3>2. Different Sign Addition</h3>
        <ul>
            <li>Subtract the numbers, keep the sign of the larger absolute value.</li>
        </ul>
        <p>Example: 7 + -10 --{`>`} answer is -3</p>

        <h3>3. Mental Number Line</h3>
        <ul>
            <li>Add means move right</li>
            <li>Subtract means move left</li>
        </ul>

        <h3>4. Common Mistakes</h3>
        <ul>
            <li>Thinking "bigger number decides sign" instead of "bigger absolute value decides sign"</li>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit1Lesson2Quiz")}
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
        onClick={() => setCurrentPage("PAUnit1LessonsPage")}
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

export default PAUnit1Lesson2Page;
