import "./DTestResults.css";

function getCourseList(weaknesses) {
  const courses = [...new Set(weaknesses.map(w => w.course))];
  return `${courses.join(", ")} sections (look for topics you struggle with)`;
}

function DTestResults({ diagnosticResults, setCurrentPage }) {

  const weaknesses = diagnosticResults
    .filter(r => !r.correct)
    .map(r => ({
      course: r.course,
      unit: r.unit,
      lessonTitle: r.lessonTitle
    }));

  return (
    <div className="results-container">
      <h1>Your Diagnostic Results</h1>

      {weaknesses.length === 0 ? (
        <p>You are very strong across all tested topics </p>
      ) : (
        <>
          <h2>Weaknesses Topics</h2>
          <ul>
            {weaknesses.map((w, i) => (
              <li key={i}>{w.lessonTitle}</li>
            ))}
          </ul>

          <h2>In this app it is recommended to complete:</h2>
          <ul>
            {weaknesses.map((w, i) => (
              <li key={i}>
                {w.course} Unit {w.unit} 
              </li>
            ))}
          </ul>

          <h2>Other Helpful Resources</h2>
          <ul>
            <li>
              <a href="https://www.khanacademy.org/math" target="_blank">
                Khan Academy
              </a>{" "}
              - {getCourseList(weaknesses)}
            </li>
            <li>
              <a href="https://artofproblemsolving.com/alcumus" target="_blank">
                Art of Problem Solving – Alcumus
              </a>{" "}
              (choose the topic you struggle with)
            </li>
          </ul>
        </>
      )}
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    </div>
  );
}

export default DTestResults;