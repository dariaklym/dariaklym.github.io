import "./SUnit6Lesson2Page.css";

function SUnit6Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Variance</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Variance</b> = average of squared differences from the mean</li>
          <li>Variance is <b>SD²</b>, the square of standard deviation.</li>
          <li><b>Example:</b></li><br />
           Data: 2, 4, 4, 6<br />
          <ul><br />
            1) Mean = (2 + 4 + 4 + 6)/4 = 16/4 = 4<br /><br />
            2) Differences: -2, 0, 0, 2<br /><br />
            3) Squares: 4, 0, 0, 4<br /><br />
            4) Variance = (4 + 0 + 0 + 4)/4 = 8/4 = 2<br /><br />
            5) SD = √2 ≈ 1.41
          </ul>
          </ul>
                </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit6Lesson2Quiz")}
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

export default SUnit6Lesson2Page;