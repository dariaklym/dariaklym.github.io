import "./SUnit5Lesson3Page.css";

function SUnit5Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Lines of Best Fit (Conceptual)</h1>

      <div className="lesson-box">
        <ul>

          <li><b>Line of best fit:</b> A straight line that best represents the trend in a scatter plot.</li>
          <li>Can be used to <b>predict values.</b></li>
          <li>Roughly estimate a line that passes near most points.</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Scatter: (1, 50), (2, 60), (3, 70), (4, 75)</li>
          <li>Line of best fit: roughly y = 10x + 45</li>
          <li>Predict y when x = 5 → y ≈ 95</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit5Lesson3Quiz")}
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

export default SUnit5Lesson3Page;