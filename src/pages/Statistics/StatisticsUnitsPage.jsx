import "./StatisticsUnitsPage.css";

function StatisticsUnitsPage({ setCurrentPage }) {
  return (
    <div className="units-container">

      <div className="glass-box units-title-box">
        <h1>Statistics Units</h1>
      </div>
      <div className="units-grid">
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit1LessonsPage")}>Unit 1 – Data Basics</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit2LessonsPage")}>Unit 2 – Measures of Central Tendency</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit3LessonsPage")}>Unit 3 – Probability Basics</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit4LessonsPage")}>Unit 4 – Data Distributions</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit5LessonsPage")}>Unit 5 – Correlation & Trends</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("SUnit6LessonsPage")}>Unit 6 – Advanced Descriptive Statistics</div>
      </div>
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    </div>
  );
}

export default StatisticsUnitsPage;