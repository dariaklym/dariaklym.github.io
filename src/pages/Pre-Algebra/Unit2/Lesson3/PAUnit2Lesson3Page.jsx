import "./PAUnit2Lesson3Page.css";

function PAUnit2Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Decimals</h1>

      <div className="lesson-box">
        <h3>1. Place Value (to the right of decimal)</h3>
        <ul>
          <li>Tenths (0.1)</li>
          <li>Hundredths (0.01)</li>
          <li>Thousandths (0.001)</li>
          <ul>Example: 4.372</ul>
          <ul>4 = ones</ul>
          <ul>3 = tenths</ul>
          <ul>7 = hundredths</ul>
          <ul>2 = thousandths</ul>
        </ul>

        <h3>2. Fractions --{`>`} Decimals</h3>
        <ul><li>Divide numerator by denominator</li>
        <ul>Example: 1/4 = 0.25</ul></ul>

        <h3>3. Decimals --{`>`} Fractions</h3>
        <ul><li>Write as fraction then simplify</li>
        <ul>Example: 0.6 = 6/10 = 3/5</ul></ul>

        <h3>4. Rounding</h3>
        <ul>Look at the digit to the right
          <ul>
            <li>If 5 or more --{`>`} round up</li>
            <li>if 4 or less --{`>`} stay the same</li>
            <ul>Example: round 3.478 to hundredths --{`>`} 3.48</ul>
          </ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit2Lesson3Quiz")}
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

export default PAUnit2Lesson3Page;
