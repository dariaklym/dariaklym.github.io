import "./SUnit6Lesson4Page.css";

function SUnit6Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Word Problems & Real-World Applications</h1>

      <div className="lesson-box">
        <ul>
          <li>Use SD, variance, and z-scores in <b>real-world situations:</b> test scores, heights, temperatures.</li>
          <li>Step-by-step problem solving:</li><br />
          1) Identify mean and SD<br /> <br />
          2) Calculate z-score for value<br /> <br />
          3) Interpret: above/below average, extreme or typical<br /> <br />


        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Average test score = 70, SD = 8, student scored 90 → z = (90-70)/8 = 20/8 = 2.5 → unusually high score</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit6Lesson4Quiz")}
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

export default SUnit6Lesson4Page;