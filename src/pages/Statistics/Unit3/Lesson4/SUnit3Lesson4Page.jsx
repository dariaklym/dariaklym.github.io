import "./SUnit3Lesson4Page.css";

function SUnit3Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Probability Word Problems</h1>

      <div className="lesson-box">
        <ul>
          <li>Step-by-step solving:</li>
          <ul>1. Identify total outcomes.</ul>
          <ul>2. Identify favorable outcomes.</ul>
          <ul>3. Use “and” or “or” rule if needed.</ul>
          <ul>4. Calculate probability as fraction, decimal, or percent.</ul>
        </ul>
        <h4>Example 1:</h4>
        <ul><li>Rolling a die → Probability of rolling 2 <b>or</b> 5 = 1/6 + 1/6 = 1/3</li></ul>
        <h4>Example 2:</h4>
        <ul><li>Flipping two coins → Probability both are heads = 1/2 * 1/2 = 1/4</li></ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit3Lesson4Quiz")}
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

export default SUnit3Lesson4Page;