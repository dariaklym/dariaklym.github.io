import "./PAUnit2Lesson4Page.css";

function PAUnit2Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Operations With Decimals</h1>

      <div className="lesson-box">
        <h3>1. Adding & Subtracting Decimals</h3>
        <ul><li>Line up the decimal points.</li>
        <ul>Example: 3.75 + 0.8 = 3.75 + 0.80 = 4.55</ul></ul>

        <h3>2. Multiplying Decimals</h3>
        <ul><li>Multiply normally --{`>`} count total decimal places.</li>
        <ul>Example: 0.3 * 0.5 = 0.15</ul>
        </ul>

        <h3>3. Dividing Decimals (simple cases)</h3>
        <ul><li>Move decimal in divisor to make it whole, move same in dividend</li>
        <ul>Example: 0.8 / 4 = 0.2</ul></ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit2Lesson4Quiz")}
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
        onClick={() => setCurrentPage("PAUnit2LessonsPage")}
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

export default PAUnit2Lesson4Page;