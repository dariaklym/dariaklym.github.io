import "./SUnit2Lesson4Page.css";

function SUnit2Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Choosing the Right Measure</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Mean:</b>  Best for numerical data without extreme outliers.</li>
          <li><b>Median:</b>  Best when outliers exist or data is skewed.</li>
          <li><b>Mode:</b> Best for categorical data or most common value.</li>
          <li>Compare measures: Look at mean, median, mode to understand data distribution.</li>
          <li>Word problems: Apply measures to real-life data.</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          Data: 2, 3, 3, 3, 10 →
          <ul>
            <li>Mean = (2+3+3+3+10)/5 = 21/5 = <b>4.2</b></li>
            <li>Median = <b>3</b></li>
            <li>Mode = <b>3</b></li>
            <ul>→ Median & Mode better represent the “typical” value due to outlier 10.</ul>
          </ul>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit2Lesson4Quiz")}
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

export default SUnit2Lesson4Page;