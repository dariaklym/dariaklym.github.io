import "./SUnit3Lesson1Page.css";

function SUnit3Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — What is Probability</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Probability:</b> A measure of how likely an event is to occur.</li>
          <li>Formula: <b>Probability = Favorable outcomes ÷ Total outcomes</b></li>
          <li>Can be expressed as <b>fractions, decimals, or percentages.</b></li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Rolling a 6 on a die: Favorable = 1, Total = 6 → Probability = 1/6 ≈ 0.167 ≈ 16.7%</li>
          <li>Flipping heads on a coin: Favorable = 1, Total = 2 → Probability = 1/2 = 0.5 = 50%</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit3Lesson1Quiz")}
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
        onClick={() => setCurrentPage("SUnit3LessonsPage")}
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

export default SUnit3Lesson1Page;