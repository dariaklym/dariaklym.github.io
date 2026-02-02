import "./SUnit5Lesson2Page.css";

function SUnit5Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Variables & Expressions</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Positive correlation: </b>As x increases, y increases (upward trend).</li>
          <li><b>Negative correlation:</b> As x increases, y decreases (downward trend).</li>
          <li><b>No correlation:</b> No clear pattern.</li>
        </ul>
        <h4>Example:</h4>
        <li>Positive: Hours studied vs Test score</li>
        <li>Negative: Number of hours watching TV vs Test score</li>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit5Lesson2Quiz")}
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

export default SUnit5Lesson2Page;