import "./SUnit6Lesson1Page.css";

function SUnit6Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Standard Deviation (Conceptual)</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Standard deviation (SD)</b> measures how spread out the numbers in a data set are.</li>
          <li>Small SD → data points are close to the mean.</li>
          <li>Large SD → data points are far from the mean.</li>
          <li><b>Step-by-step example:</b></li><br />
           Data: 5, 7, 7, 10<br />
          <ul><br />
            1) Mean = (5 + 7 + 7 + 10)/4 = 29/4 = 7.25<br /><br />
            2) Subtract mean from each value: -2.25, -0.25, -0.25, 2.75<br /><br />
            3) Square each difference: 5.06, 0.06, 0.06, 7.56<br /><br />
            4) Average squared differences = (5.06 + 0.06 + 0.06 + 7.56)/4 = 12.74/4 = 3.185<br /><br />
            5) SD = √3.185 ≈ 1.78
          </ul>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit6Lesson1Quiz")}
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

export default SUnit6Lesson1Page;