import "./SUnit5Lesson4Page.css";

function SUnit5Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Interpreting Trends</h1>

      <div className="lesson-box">
        <ul>
          <li>Use trends to make predictions <b>carefully</b></li>
          <li>Consider <b>limitations</b>: correlation does not mean causation.</li>
          <li>Understand that <b>outliers </b>can affect predictions.</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Scatter: Hours studied vs Test score</li>
          <li>Predicting for 10 hours: reasonable if data supports trend</li>
          <li>Prediction outside range may be inaccurate</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit5Lesson4Quiz")}
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
        onClick={() => setCurrentPage("SUnit5LessonsPage")}
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

export default SUnit5Lesson4Page;