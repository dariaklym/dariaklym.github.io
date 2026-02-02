import "./SUnit2Lesson3Page.css";

function SUnit2Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Mode & Range</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Mode:</b> Most frequently occurring value.</li>
          <li><b>Range:</b> Maximum value - Minimum value.</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Data: 2, 3, 3, 4, 5 → Mode = 3, Range = 5 - 2 = 3</li>
          <li>Data: 1, 1, 2, 3, 3 → Two modes: 1 & 3</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit2Lesson3Quiz")}
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
        onClick={() => setCurrentPage("SUnit2LessonsPage")}
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

export default SUnit2Lesson3Page;