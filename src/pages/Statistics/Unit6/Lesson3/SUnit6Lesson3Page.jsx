import "./SUnit6Lesson3Page.css";

function SUnit6Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Z-Scores (Conceptual)</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Z-score</b> measures how many SDs a value is from the mean.</li>
          <li>Formula: z = (x - mean)/SD</li>
          <li>Positive z → above mean, Negative z → below mean</li>
          <li><b>Example:</b> Mean = 50, SD = 5, x = 60 → z = (60-50)/5 = 2 → 2 SDs above mean</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit6Lesson3Quiz")}
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
        onClick={() => setCurrentPage("SUnit6LessonsPage")}
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

export default SUnit6Lesson3Page;