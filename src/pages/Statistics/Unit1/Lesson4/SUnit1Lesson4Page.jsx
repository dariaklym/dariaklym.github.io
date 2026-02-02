import "./SUnit1Lesson4Page.css";

function SUnit1Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Reading Graphs</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Interpreting Tables & Graphs:</b> Read data carefully; note frequencies and categories.</li>
          <li><b>Identifying Trends:</b> Look for increases, decreases, or patterns.</li>
          <li><b>Comparing Data Sets:</b> Compare two graphs or tables side by side.</li>
        </ul>
        <h4>Example:</h4>
        <pre >
          Table 1: Fruit sold<br /><br />
          -----------------<br />
          | Fruit  | Sold |<br />
          |--------|------|<br />
          | Apple  |  10  |<br />
          | Banana |  15  |<br />
          | Orange |  5   |<br />
          -----------------<br /><br />

          Trend: Banana is sold the most
        </pre>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit1Lesson4Quiz")}
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
        onClick={() => setCurrentPage("SUnit1LessonsPage")}
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

export default SUnit1Lesson4Page;