import "./PAUnit3Lesson3Page.css";

function PAUnit3Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Percent Basics</h1>

      <div className="lesson-box">
        <ul>
          <h3>What Percent Means</h3>
          A <b>percent</b> means "out of 100"
          <ul>Example:
            <ul>25% = 25 out of 100</ul></ul>  
          <h3>Converting Percent {`<`}---{`>`} Decimal</h3>
          <li>Percent --{`>`} decimal: divide by 100</li>
          <ul><li>35%  --{`>`} 0.35</li>
          <li>8% --{`>`} 0.08</li></ul>
          <li>Decimal  --{`>`} percent: multiply by 100</li>
          <ul><li>0.4  --{`>`} 40%</li>
          <li>0.05  --{`>`} 5%</li></ul>
          <h3>Converting Percent  {`<`}---{`>`} Fraction</h3>
          <li>Percent  --{`>`} fraction: percent over 100</li>
          <ul><li>60% = 60/100 = 3/5</li>
          <li>25% = 25/100 = 1/4</li></ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit3Lesson3Quiz")}
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

export default PAUnit3Lesson3Page;