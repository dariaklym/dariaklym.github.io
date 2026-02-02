import "./SUnit4Lesson1Page.css";

function SUnit4Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Histograms</h1>

      <div className="lesson-box">
        <ul>

          <li><b>Histogram:</b> A graph that shows the frequency of data in <b>bins</b> (intervals).</li>
          <li>Each bin represents a range of values.</li>
          <li>Height of the bar = number of data points in that bin.</li>

        </ul>
        <h4>Example:</h4>
        
          Data: 1, 2, 2, 3, 3, 3, 4, 5, 5<ul>
          <li>Bin 1-2: 3 points</li>
          <li>Bin 3-4: 4 points</li>
          <li>Bin 5-6: 2 points</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit4Lesson1Quiz")}
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

export default SUnit4Lesson1Page;