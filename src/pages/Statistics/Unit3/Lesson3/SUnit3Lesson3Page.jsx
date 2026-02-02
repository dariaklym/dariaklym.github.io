import "./SUnit3Lesson3Page.css";

function SUnit3Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Compound Probability</h1>

      <div className="lesson-box">
        <ul>
          <li><b>"And" situations:</b> Two events must both occur → Multiply probabilities (if independent).</li>
          <li><b>"Or" situations:</b> Either event can occur → Add probabilities (if mutually exclusive)</li>
          <li><b>Independent events:</b> One event does not affect the other</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Rolling a 2 <b>and</b> a 5 on two dice: 1/6 * 1/6 = 1/36</li>
          <li>Rolling a 2 <b>or</b> a 5 on one die: 1/6 + 1/6 = 2/6 = 1/3</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit3Lesson3Quiz")}
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
        onClick={() => setCurrentPage("SUnit3LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("StatisticsUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default SUnit3Lesson3Page;