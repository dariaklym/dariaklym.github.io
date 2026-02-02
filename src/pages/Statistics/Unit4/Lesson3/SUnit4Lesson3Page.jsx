import "./SUnit4Lesson3Page.css";

function SUnit4Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Stem-and-Leaf Plots</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Stem-and-leaf plot:</b> Organizes data by<b> place value</b>, keeping actual data points visible.</li>
          <li><b>Stem </b>= leading digit(s), <b>Leaf </b>= last digit(s)</li>
        </ul>
        <h4>Example:</h4>
        Data: 12, 14, 15, 21, 23
        <ul>
          <li>Stem 1: 2, 4, 5</li>
          <li>Stem 2: 1, 3</li>
          <li>Helps quickly see <b>distribution, median, mode.</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit4Lesson3Quiz")}
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

export default SUnit4Lesson3Page;