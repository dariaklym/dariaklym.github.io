import "./GamesPage.css";

function GamesPage({ setCurrentPage }) {
  return (
    <div className="units-container">

      <div className="glass-box units-title-box">
        <h1>Games</h1>
      </div>
      <div className="units-grid">
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GameAddSub")}>Addition/Subtraction</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GameMulDiv")}>Multiplication/Division</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GameCube")}>Cube</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GameSquare")}>Square</div>
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

export default GamesPage;