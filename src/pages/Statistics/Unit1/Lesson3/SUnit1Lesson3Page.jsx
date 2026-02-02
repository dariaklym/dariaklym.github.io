import "./SUnit1Lesson3Page.css";

function SUnit1Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Graphing Data</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Bar Graphs:</b> Rectangles of equal width represent frequencies. Height = frequency.</li>
          <li><b>Line Plots:</b> Mark x’s above numbers to show frequency.</li>
          <li><b>Pie Charts (conceptual):</b> Circle divided into slices to show proportions.</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Bar Graph: X-axis = Fruit, Y-axis = Frequency (text-based representation).</li>
          <li>Line Plot:</li>
          <pre style={{ fontFamily: "Nunito" }}>
            2  3  4  5 <br />
            x  x  x <br />
            x  x<br />
            x<br />
          </pre>
          <li>Pie Chart: Conceptually, Apple = 50%, Banana = 30%, Orange = 20%</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit1Lesson3Quiz")}
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

export default SUnit1Lesson3Page;