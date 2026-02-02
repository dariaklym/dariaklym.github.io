import "./SUnit4Lesson4Page.css";

function SUnit4Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Variables & Expressions</h1>

      <div className="lesson-box">
        <ul>
          <li>Compare <b>shape, center, and spread </b>of two or more data sets.</li>
          <li><b>Shape: </b>symmetric, skewed left/right, uniform, etc.</li>
          <li><b>Center: </b>mean or median</li>
          <li><b>Spread: </b>range, IQR</li>
          <li><b>Text-based examples:</b></li>
          <ul>
            <li>Data A: 2, 3, 4, 5, 6 → symmetric, center ≈ 4, range = 4</li>
            <li>Data B: 1, 2, 3, 7, 9 → skewed right, center ≈ 3, range = 8</li>
          </ul>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit4Lesson4Quiz")}
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
        onClick={() => setCurrentPage("SUnit4LessonsPage")}
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

export default SUnit4Lesson4Page;