import "./SUnit2Lesson2Page.css";

function SUnit2Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Median</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Median:</b> The middle value when data is arranged in order.</li>
          <li><b>Even number of data points:</b> Take the average of the two middle numbers.</li>
        </ul>
        <p><b>Example 1 (odd count):</b> 3, 5, 7 → Median = 5</p>
        <p><b>Example 2 (even count):</b> 4, 6, 8, 10 → Median = (6 + 8) / 2 = <b>7</b></p>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit2Lesson2Quiz")}
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

export default SUnit2Lesson2Page;