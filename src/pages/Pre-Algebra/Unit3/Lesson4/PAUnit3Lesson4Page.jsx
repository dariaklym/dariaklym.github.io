import "./PAUnit3Lesson4Page.css";

function PAUnit3Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Percent Problems</h1>

      <div className="lesson-box">
        <ul>
          <h3>Percent of a Number</h3>
          Use:
          <ul>percent * whole = part</ul>  
          Examples:
          <li>20% of 50 → 0.20 * 50 = 10</li>
          <li>15% of 80 → 0.15 * 80 = 12</li>
          <h3>Tax, Tip, Discount (simple versions)</h3>
          <b>Tax:</b>
          <ul>Add extra percent
            <ul>Example: $50 with 6% tax
              <ul><li>0.06 * 50 = 3</li>
              <li>total = $53</li></ul>
            </ul>
          </ul>
          <b>Tip:</b>
          
            <ul>Example: 20% tip on $30
              <ul><li>0.20 * 30 = 6</li>
              <li>total = $36</li></ul>
            </ul>
         
          <b>Discount:</b>
         
            <ul>Example: 25% off $40
              <ul><li>0.25 * 40 = 10</li>
              <li>sale price = 30</li></ul>
            </ul>
         
          <h3>Percent Increase / Decrease</h3>
          <ul>Increase: add</ul>
          <ul>Decrease: subtract</ul>
          <ul><ul>Example:
            <li>100 increased by 20% → 120</li>
            <li>50 decreased by 10% → 45</li>
            </ul></ul>

          
          
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit3Lesson4Quiz")}
      >
        Take Quiz
      </button><button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    
      <button
        className="lessons-btn"
        onClick={() => setCurrentPage("PAUnit3LessonsPage")}
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

export default PAUnit3Lesson4Page;