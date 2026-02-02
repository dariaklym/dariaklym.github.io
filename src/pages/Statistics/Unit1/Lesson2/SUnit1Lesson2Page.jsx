import "./SUnit1Lesson2Page.css";

function SUnit1Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Organizing Data</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Tally Charts:</b> Use tally marks to count frequencies. Each group of five is easy to count.</li>
          <li><b>Frequency Tables:</b> Table that shows how often each value occurs.</li>
        </ul>
        <h4>Example Tally Chart (favorite fruit):</h4>
        <ul>
          Apple ||||| (5)  <br />
          Banana |||| (4) <br />
          Orange ||| (3) 
        </ul>
        <h4>Frequency Table Example:</h4>
        <ul><pre style={{ fontFamily: "Nunito" }}>
            Fruit     Frequency<br /><br />
            Apple         5<br />
            Banana       4<br />
            Orange       3
          </pre>
</ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit1Lesson2Quiz")}
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

export default SUnit1Lesson2Page;