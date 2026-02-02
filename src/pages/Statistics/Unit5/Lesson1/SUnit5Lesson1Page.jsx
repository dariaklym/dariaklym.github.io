import "./SUnit5Lesson1Page.css";

function SUnit5Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Scatter Plots</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Scatter plot:</b> A graph that shows the relationship between two variables, usually labeled <b>x (independent)</b> and <b>y (dependent).</b></li>
          <li>Each point represents a pair of values (x, y).</li>
          <li>Look for <b>patterns</b>: upward, downward, or no trend.</li>
        </ul>
        <h4>Example:</h4>
        x = hours studied, y = test score
        <ul>
          <li>(1, 50), (2, 60), (3, 70), (4, 75) → points show upward trend</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit5Lesson1Quiz")}
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

export default SUnit5Lesson1Page;