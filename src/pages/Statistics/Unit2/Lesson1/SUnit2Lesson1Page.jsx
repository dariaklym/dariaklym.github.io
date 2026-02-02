import "./SUnit2Lesson1Page.css";

function SUnit2Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Mean</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Mean (Average):</b> The sum of all data values divided by the number of values.</li>
          <li><b>Step-by-step calculation:</b></li>
          <ul>
            1. Add all numbers together. <br />
            2. Count the number of values. <br />
            3. Divide the sum by the count.
          </ul>

          <h4>Example:</h4>
          <ul>
            Data: 5, 7, 8 , 10<br />
            Step 1: 5 + 7 + 8 + 10 = 30 <br />
            Step 2: Count = 4 <br />
            Step 3: Mean = 30 / 4 = <b>7.5</b>
          </ul>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit2Lesson1Quiz")}
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
        onClick={() => setCurrentPage("SUnit2LessonsPage")}
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

export default SUnit2Lesson1Page;