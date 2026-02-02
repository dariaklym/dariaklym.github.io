import "./SUnit3Lesson2Page.css";

function SUnit3Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Simple Probability</h1>

      <div className="lesson-box">
        <ul>
          <li><b>Rolling dice:</b> Six-sided die has outcomes 1-6. Probability of any specific number = 1/6.</li>
          <li><b>Flipping coins:</b> Two outcomes: heads or tails → Probability of heads = 1/2.</li>
          <li><b>Drawing cards</b> (simplified, without suits): Example: Probability of drawing a red card from 26 red out of 52 cards = 26/52 = 1/2.</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit3Lesson2Quiz")}
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

export default SUnit3Lesson2Page;