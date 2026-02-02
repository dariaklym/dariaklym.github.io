import "./SUnit4Lesson2Page.css";

function SUnit4Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Box Plots</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Box plot (or box-and-whisker plot): </b>Shows the distribution of data using <b>minimum, Q1, median, Q3, maximum.</b></li>
          <li><b>Interquartile Range (IQR)</b> = Q3 - Q1 → shows the spread of the middle 50% of data.</li>
        </ul>
        <h4>Example:</h4>
        Data: 1, 2, 3, 4, 5, 6, 7, 8, 9
        <ul>
          <li>Min = 1, Q1 = 3, Median = 5, Q3 = 7, Max = 9</li>
          <li>IQR = 7 - 3 = 4</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit4Lesson2Quiz")}
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

export default SUnit4Lesson2Page;