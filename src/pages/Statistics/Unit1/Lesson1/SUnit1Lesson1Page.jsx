import "./SUnit1Lesson1Page.css";

function SUnit1Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Types of Data</h1>

      <div className="lesson-box">
        
        <ul>
          <li><b>Qualitative (Categorical) Data:</b> Data that describes categories or qualities, e.g., favorite color, type of pet.</li>
          <li><b>Quantitative (Numerical) Data:</b> Data that represents numbers, e.g., age, number of books.</li>
          <li><b>Discrete Data:</b> Countable numbers, e.g., number of students in a class.</li>
          <li><b>Continuous Data:</b> Measurable values, e.g., height, weight, temperature.</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Favorite fruit: Apple, Banana, Orange → qualitative</li>
          <li>Number of pets: 0, 1, 2 → discrete quantitative</li>
          <li>Height in cm: 150, 162.5 → continuous quantitative</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("SUnit1Lesson1Quiz")}
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

export default SUnit1Lesson1Page;