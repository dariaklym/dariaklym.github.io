import "./SUnit3LessonsPage.css";

function SUnit3LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 3: Probability Basics</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit3Lesson1Page")}>
        Lesson 1 — What is Probability
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit3Lesson2Page")}>
        Lesson 2 — Simple Probability 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit3Lesson3Page")}>
        Lesson 3 — Compound Probability
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit3Lesson4Page")}>
        Lesson 4 — Probability Word Problems
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit3Test")}>
        Unit Test
      </div>

      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
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

export default SUnit3LessonsPage;