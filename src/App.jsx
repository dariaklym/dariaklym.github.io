import { useState } from "react";
import Background from "./components/Background";
import HomePage from "./pages/HomePage";
import PreAlgebraUnitsPage from "./pages/Pre-Algebra/PreAlgebraUnitsPage";
import AlgebraUnitsPage from "./pages/Algebra/AlgebraUnitsPage";
import GeometryUnitsPage from "./pages/Geometry/GeometryUnitsPage";
import StatisticsUnitsPage from "./pages/Statistics/StatisticsUnitsPage";
import DTestPage from "./pages/diagnostic/DTestPage";
import DTestResults from "./pages/diagnostic/DTestResults";
import GamesPage from "./pages/games/GamesPage";

// Games
import GameAddSub from "./pages/games/GameAddSub";
import GameMulDiv from "./pages/games/GameMulDiv";
import GameCube from "./pages/games/GameCube";
import GameSquare from "./pages/games/GameSquare";
import SpeedGame from "./pages/games/SpeedGame";

//Pre-Algebra Unit 1
import PAUnit1Test from "./pages/Pre-Algebra/Unit1/Test/PAUnit1Test";
import Unit1LessonsPage from "./pages/Pre-Algebra/Unit1/Unit1LessonsPage";
import Lesson1Page from "./pages/Pre-Algebra/Unit1/Lesson1/Lesson1Page";
import Lesson1Quiz from "./pages/Pre-Algebra/Unit1/Lesson1/Lesson1Quiz";
import PAUnit1Lesson2Page from "./pages/Pre-Algebra/Unit1/Lesson2/PAUnit1Lesson2Page";
import PAUnit1Lesson2Quiz from "./pages/Pre-Algebra/Unit1/Lesson2/PAUnit1Lesson2Quiz";
import PAUnit1Lesson3Page from "./pages/Pre-Algebra/Unit1/Lesson3/PAUnit1Lesson3Page";
import PAUnit1Lesson3Quiz from "./pages/Pre-Algebra/Unit1/Lesson3/PAUnit1Lesson3Quiz";
import PAUnit1Lesson4Page from "./pages/Pre-Algebra/Unit1/Lesson4/PAUnit1Lesson4Page";
import PAUnit1Lesson4Quiz from "./pages/Pre-Algebra/Unit1/Lesson4/PAUnit1Lesson4Quiz";

// Pre-ALgebra Unit 2 
import PAUnit2Test from "./pages/Pre-Algebra/Unit2/Test/PAUnit2Test";
import PAUnit2LessonsPage from "./pages/Pre-Algebra/Unit2/PAUnit2LessonsPage";
import PAUnit2Lesson1Page from "./pages/Pre-Algebra/Unit2/Lesson1/PAUnit2Lesson1Page";
import PAUnit2Lesson1Quiz from "./pages/Pre-Algebra/Unit2/Lesson1/PAUnit2Lesson1Quiz";
import PAUnit2Lesson2Page from "./pages/Pre-Algebra/Unit2/Lesson2/PAUnit2Lesson2Page";
import PAUnit2Lesson2Quiz from "./pages/Pre-Algebra/Unit2/Lesson2/PAUnit2Lesson2Quiz";
import PAUnit2Lesson3Page from "./pages/Pre-Algebra/Unit2/Lesson3/PAUnit2Lesson3Page";
import PAUnit2Lesson3Quiz from "./pages/Pre-Algebra/Unit2/Lesson3/PAUnit2Lesson3Quiz";
import PAUnit2Lesson4Page from "./pages/Pre-Algebra/Unit2/Lesson4/PAUnit2Lesson4Page";
import PAUnit2Lesson4Quiz from "./pages/Pre-Algebra/Unit2/Lesson4/PAUnit2Lesson4Quiz";

//PreAlgebra Unit 3
import PAUnit3Test from "./pages/Pre-Algebra/Unit3/Test/PAUnit3Test";
import PAUnit3LessonsPage from "./pages/Pre-Algebra/Unit3/PAUnit3LessonsPage";
import PAUnit3Lesson1Page from "./pages/Pre-Algebra/Unit3/Lesson1/PAUnit3Lesson1Page";
import PAUnit3Lesson1Quiz from "./pages/Pre-Algebra/Unit3/Lesson1/PAUnit3Lesson1Quiz";
import PAUnit3Lesson2Page from "./pages/Pre-Algebra/Unit3/Lesson2/PAUnit3Lesson2Page";
import PAUnit3Lesson2Quiz from "./pages/Pre-Algebra/Unit3/Lesson2/PAUnit3Lesson2Quiz";
import PAUnit3Lesson3Page from "./pages/Pre-Algebra/Unit3/Lesson3/PAUnit3Lesson3Page";
import PAUnit3Lesson3Quiz from "./pages/Pre-Algebra/Unit3/Lesson3/PAUnit3Lesson3Quiz";
import PAUnit3Lesson4Page from "./pages/Pre-Algebra/Unit3/Lesson4/PAUnit3Lesson4Page";
import PAUnit3Lesson4Quiz from "./pages/Pre-Algebra/Unit3/Lesson4/PAUnit3Lesson4Quiz";

//Pre-ALgebra Unit4
import PAUnit4Test from "./pages/Pre-Algebra/Unit4/Test/PAUnit4Test";
import PAUnit4LessonsPage from "./pages/Pre-Algebra/Unit4/PAUnit4LessonsPage";
import PAUnit4Lesson1Page from "./pages/Pre-Algebra/Unit4/Lesson1/PAUnit4Lesson1Page";
import PAUnit4Lesson1Quiz from "./pages/Pre-Algebra/Unit4/Lesson1/PAUnit4Lesson1Quiz";
import PAUnit4Lesson2Page from "./pages/Pre-Algebra/Unit4/Lesson2/PAUnit4Lesson2Page";
import PAUnit4Lesson2Quiz from "./pages/Pre-Algebra/Unit4/Lesson2/PAUnit4Lesson2Quiz";
import PAUnit4Lesson3Page from "./pages/Pre-Algebra/Unit4/Lesson3/PAUnit4Lesson3Page";
import PAUnit4Lesson3Quiz from "./pages/Pre-Algebra/Unit4/Lesson3/PAUnit4Lesson3Quiz";
import PAUnit4Lesson4Page from "./pages/Pre-Algebra/Unit4/Lesson4/PAUnit4Lesson4Page";
import PAUnit4Lesson4Quiz from "./pages/Pre-Algebra/Unit4/Lesson4/PAUnit4Lesson4Quiz";

//Pre ALgebra Unit 5
import PAUnit5Test from "./pages/Pre-Algebra/Unit5/Test/PAUnit5Test";
import PAUnit5LessonsPage from "./pages/Pre-Algebra/Unit5/PAUnit5LessonsPage";
import PAUnit5Lesson1Page from "./pages/Pre-Algebra/Unit5/Lesson1/PAUnit5Lesson1Page";
import PAUnit5Lesson1Quiz from "./pages/Pre-Algebra/Unit5/Lesson1/PAUnit5Lesson1Quiz";
import PAUnit5Lesson2Page from "./pages/Pre-Algebra/Unit5/Lesson2/PAUnit5Lesson2Page";
import PAUnit5Lesson2Quiz from "./pages/Pre-Algebra/Unit5/Lesson2/PAUnit5Lesson2Quiz";
import PAUnit5Lesson3Page from "./pages/Pre-Algebra/Unit5/Lesson3/PAUnit5Lesson3Page";
import PAUnit5Lesson3Quiz from "./pages/Pre-Algebra/Unit5/Lesson3/PAUnit5Lesson3Quiz";
import PAUnit5Lesson4Page from "./pages/Pre-Algebra/Unit5/Lesson4/PAUnit5Lesson4Page";
import PAUnit5Lesson4Quiz from "./pages/Pre-Algebra/Unit5/Lesson4/PAUnit5Lesson4Quiz";

//Pre algebra Unit 6
import PAUnit6Test from "./pages/Pre-Algebra/Unit6/Test/PAUnit6Test";
import PAUnit6LessonsPage from "./pages/Pre-Algebra/Unit6/PAUnit6LessonsPage";
import PAUnit6Lesson1Page from "./pages/Pre-Algebra/Unit6/Lesson1/PAUnit6Lesson1Page";
import PAUnit6Lesson1Quiz from "./pages/Pre-Algebra/Unit6/Lesson1/PAUnit6Lesson1Quiz";
import PAUnit6Lesson2Page from "./pages/Pre-Algebra/Unit6/Lesson2/PAUnit6Lesson2Page";
import PAUnit6Lesson2Quiz from "./pages/Pre-Algebra/Unit6/Lesson2/PAUnit6Lesson2Quiz";
import PAUnit6Lesson3Page from "./pages/Pre-Algebra/Unit6/Lesson3/PAUnit6Lesson3Page";
import PAUnit6Lesson3Quiz from "./pages/Pre-Algebra/Unit6/Lesson3/PAUnit6Lesson3Quiz";
import PAUnit6Lesson4Page from "./pages/Pre-Algebra/Unit6/Lesson4/PAUnit6Lesson4Page";
import PAUnit6Lesson4Quiz from "./pages/Pre-Algebra/Unit6/Lesson4/PAUnit6Lesson4Quiz";

//Algebra Unit 1
import AUnit1LessonsPage from "./pages/Algebra/Unit1/AUnit1LessonsPage";
import AUnit1Lesson1Page from "./pages/Algebra/Unit1/Lesson1/AUnit1Lesson1Page";
import AUnit1Lesson1Quiz from "./pages/Algebra/Unit1/Lesson1/AUnit1Lesson1Quiz";
import AUnit1Lesson2Page from "./pages/Algebra/Unit1/Lesson2/AUnit1Lesson2Page";
import AUnit1Lesson2Quiz from "./pages/Algebra/Unit1/Lesson2/AUnit1Lesson2Quiz";
import AUnit1Lesson3Page from "./pages/Algebra/Unit1/Lesson3/AUnit1Lesson3Page";
import AUnit1Lesson3Quiz from "./pages/Algebra/Unit1/Lesson3/AUnit1Lesson3Quiz";
import AUnit1Lesson4Page from "./pages/Algebra/Unit1/Lesson4/AUnit1Lesson4Page";
import AUnit1Lesson4Quiz from "./pages/Algebra/Unit1/Lesson4/AUnit1Lesson4Quiz";
import AUnit1Test from "./pages/Algebra/Unit1/Test/AUnit1Test";

//Algebra Unit 2
import AUnit2Test from "./pages/Algebra/Unit2/Test/AUnit2Test";
import AUnit2LessonsPage from "./pages/Algebra/Unit2/AUnit2LessonsPage";
import AUnit2Lesson1Page from "./pages/Algebra/Unit2/Lesson1/AUnit2Lesson1Page";
import AUnit2Lesson1Quiz from "./pages/Algebra/Unit2/Lesson1/AUnit2Lesson1Quiz";
import AUnit2Lesson2Page from "./pages/Algebra/Unit2/Lesson2/AUnit2Lesson2Page";
import AUnit2Lesson2Quiz from "./pages/Algebra/Unit2/Lesson2/AUnit2Lesson2Quiz";
import AUnit2Lesson3Page from "./pages/Algebra/Unit2/Lesson3/AUnit2Lesson3Page";
import AUnit2Lesson3Quiz from "./pages/Algebra/Unit2/Lesson3/AUnit2Lesson3Quiz";
import AUnit2Lesson4Page from "./pages/Algebra/Unit2/Lesson4/AUnit2Lesson4Page";
import AUnit2Lesson4Quiz from "./pages/Algebra/Unit2/Lesson4/AUnit2Lesson4Quiz";

//Algebra Unit 3
import AUnit3Test from "./pages/Algebra/Unit3/Test/AUnit3Test";
import AUnit3LessonsPage from "./pages/Algebra/Unit3/AUnit3LessonsPage";
import AUnit3Lesson1Page from "./pages/Algebra/Unit3/Lesson1/AUnit3Lesson1Page";
import AUnit3Lesson1Quiz from "./pages/Algebra/Unit3/Lesson1/AUnit3Lesson1Quiz";
import AUnit3Lesson2Page from "./pages/Algebra/Unit3/Lesson2/AUnit3Lesson2Page";
import AUnit3Lesson2Quiz from "./pages/Algebra/Unit3/Lesson2/AUnit3Lesson2Quiz";
import AUnit3Lesson3Page from "./pages/Algebra/Unit3/Lesson3/AUnit3Lesson3Page";
import AUnit3Lesson3Quiz from "./pages/Algebra/Unit3/Lesson3/AUnit3Lesson3Quiz";
import AUnit3Lesson4Page from "./pages/Algebra/Unit3/Lesson4/AUnit3Lesson4Page";
import AUnit3Lesson4Quiz from "./pages/Algebra/Unit3/Lesson4/AUnit3Lesson4Quiz";

//Algebra Unit 4
import AUnit4Test from "./pages/Algebra/Unit4/Test/AUnit4Test";
import AUnit4LessonsPage from "./pages/Algebra/Unit4/AUnit4LessonsPage";
import AUnit4Lesson1Page from "./pages/Algebra/Unit4/Lesson1/AUnit4Lesson1Page";
import AUnit4Lesson1Quiz from "./pages/Algebra/Unit4/Lesson1/AUnit4Lesson1Quiz";
import AUnit4Lesson2Page from "./pages/Algebra/Unit4/Lesson2/AUnit4Lesson2Page";
import AUnit4Lesson2Quiz from "./pages/Algebra/Unit4/Lesson2/AUnit4Lesson2Quiz";
import AUnit4Lesson3Page from "./pages/Algebra/Unit4/Lesson3/AUnit4Lesson3Page";
import AUnit4Lesson3Quiz from "./pages/Algebra/Unit4/Lesson3/AUnit4Lesson3Quiz";
import AUnit4Lesson4Page from "./pages/Algebra/Unit4/Lesson4/AUnit4Lesson4Page";
import AUnit4Lesson4Quiz from "./pages/Algebra/Unit4/Lesson4/AUnit4Lesson4Quiz";

//Algebra Unit 5
import AUnit5Test from "./pages/Algebra/Unit5/Test/AUnit5Test";
import AUnit5LessonsPage from "./pages/Algebra/Unit5/AUnit5LessonsPage";
import AUnit5Lesson1Page from "./pages/Algebra/Unit5/Lesson1/AUnit5Lesson1Page";
import AUnit5Lesson1Quiz from "./pages/Algebra/Unit5/Lesson1/AUnit5Lesson1Quiz";
import AUnit5Lesson2Page from "./pages/Algebra/Unit5/Lesson2/AUnit5Lesson2Page";
import AUnit5Lesson2Quiz from "./pages/Algebra/Unit5/Lesson2/AUnit5Lesson2Quiz";
import AUnit5Lesson3Page from "./pages/Algebra/Unit5/Lesson3/AUnit5Lesson3Page";
import AUnit5Lesson3Quiz from "./pages/Algebra/Unit5/Lesson3/AUnit5Lesson3Quiz";
import AUnit5Lesson4Page from "./pages/Algebra/Unit5/Lesson4/AUnit5Lesson4Page";
import AUnit5Lesson4Quiz from "./pages/Algebra/Unit5/Lesson4/AUnit5Lesson4Quiz";

//Algebra Unit 6
import AUnit6Test from "./pages/Algebra/Unit6/Test/AUnit6Test";
import AUnit6LessonsPage from "./pages/Algebra/Unit6/AUnit6LessonsPage";
import AUnit6Lesson1Page from "./pages/Algebra/Unit6/Lesson1/AUnit6Lesson1Page";
import AUnit6Lesson1Quiz from "./pages/Algebra/Unit6/Lesson1/AUnit6Lesson1Quiz";
import AUnit6Lesson2Page from "./pages/Algebra/Unit6/Lesson2/AUnit6Lesson2Page";
import AUnit6Lesson2Quiz from "./pages/Algebra/Unit6/Lesson2/AUnit6Lesson2Quiz";
import AUnit6Lesson3Page from "./pages/Algebra/Unit6/Lesson3/AUnit6Lesson3Page";
import AUnit6Lesson3Quiz from "./pages/Algebra/Unit6/Lesson3/AUnit6Lesson3Quiz";
import AUnit6Lesson4Page from "./pages/Algebra/Unit6/Lesson4/AUnit6Lesson4Page";
import AUnit6Lesson4Quiz from "./pages/Algebra/Unit6/Lesson4/AUnit6Lesson4Quiz";

//Geometry Unit 1
import GUnit1Test from "./pages/Geometry/Unit1/Test/GUnit1Test";
import GUnit1LessonsPage from "./pages/Geometry/Unit1/GUnit1LessonsPage";
import GUnit1Lesson1Page from "./pages/Geometry/Unit1/Lesson1/GUnit1Lesson1Page";
import GUnit1Lesson1Quiz from "./pages/Geometry/Unit1/Lesson1/GUnit1Lesson1Quiz";
import GUnit1Lesson2Page from "./pages/Geometry/Unit1/Lesson2/GUnit1Lesson2Page";
import GUnit1Lesson2Quiz from "./pages/Geometry/Unit1/Lesson2/GUnit1Lesson2Quiz";
import GUnit1Lesson3Page from "./pages/Geometry/Unit1/Lesson3/GUnit1Lesson3Page";
import GUnit1Lesson3Quiz from "./pages/Geometry/Unit1/Lesson3/GUnit1Lesson3Quiz";
import GUnit1Lesson4Page from "./pages/Geometry/Unit1/Lesson4/GUnit1Lesson4Page";
import GUnit1Lesson4Quiz from "./pages/Geometry/Unit1/Lesson4/GUnit1Lesson4Quiz";

//Geometry Unit 2
import GUnit2Test from "./pages/Geometry/Unit2/Test/GUnit2Test";
import GUnit2LessonsPage from "./pages/Geometry/Unit2/GUnit2LessonsPage";
import GUnit2Lesson1Page from "./pages/Geometry/Unit2/Lesson1/GUnit2Lesson1Page";
import GUnit2Lesson1Quiz from "./pages/Geometry/Unit2/Lesson1/GUnit2Lesson1Quiz";
import GUnit2Lesson2Page from "./pages/Geometry/Unit2/Lesson2/GUnit2Lesson2Page";
import GUnit2Lesson2Quiz from "./pages/Geometry/Unit2/Lesson2/GUnit2Lesson2Quiz";
import GUnit2Lesson3Page from "./pages/Geometry/Unit2/Lesson3/GUnit2Lesson3Page";
import GUnit2Lesson3Quiz from "./pages/Geometry/Unit2/Lesson3/GUnit2Lesson3Quiz";
import GUnit2Lesson4Page from "./pages/Geometry/Unit2/Lesson4/GUnit2Lesson4Page";
import GUnit2Lesson4Quiz from "./pages/Geometry/Unit2/Lesson4/GUnit2Lesson4Quiz";

//Geometry Unit 3
import GUnit3Test from "./pages/Geometry/Unit3/Test/GUnit3Test";
import GUnit3LessonsPage from "./pages/Geometry/Unit3/GUnit3LessonsPage";
import GUnit3Lesson1Page from "./pages/Geometry/Unit3/Lesson1/GUnit3Lesson1Page";
import GUnit3Lesson1Quiz from "./pages/Geometry/Unit3/Lesson1/GUnit3Lesson1Quiz";
import GUnit3Lesson2Page from "./pages/Geometry/Unit3/Lesson2/GUnit3Lesson2Page";
import GUnit3Lesson2Quiz from "./pages/Geometry/Unit3/Lesson2/GUnit3Lesson2Quiz";
import GUnit3Lesson3Page from "./pages/Geometry/Unit3/Lesson3/GUnit3Lesson3Page";
import GUnit3Lesson3Quiz from "./pages/Geometry/Unit3/Lesson3/GUnit3Lesson3Quiz";
import GUnit3Lesson4Page from "./pages/Geometry/Unit3/Lesson4/GUnit3Lesson4Page";
import GUnit3Lesson4Quiz from "./pages/Geometry/Unit3/Lesson4/GUnit3Lesson4Quiz";

//Geometry Unit 4
import GUnit4Test from "./pages/Geometry/Unit4/Test/GUnit4Test";
import GUnit4LessonsPage from "./pages/Geometry/Unit4/GUnit4LessonsPage";
import GUnit4Lesson1Page from "./pages/Geometry/Unit4/Lesson1/GUnit4Lesson1Page";
import GUnit4Lesson1Quiz from "./pages/Geometry/Unit4/Lesson1/GUnit4Lesson1Quiz";
import GUnit4Lesson2Page from "./pages/Geometry/Unit4/Lesson2/GUnit4Lesson2Page";
import GUnit4Lesson2Quiz from "./pages/Geometry/Unit4/Lesson2/GUnit4Lesson2Quiz";
import GUnit4Lesson3Page from "./pages/Geometry/Unit4/Lesson3/GUnit4Lesson3Page";
import GUnit4Lesson3Quiz from "./pages/Geometry/Unit4/Lesson3/GUnit4Lesson3Quiz";
import GUnit4Lesson4Page from "./pages/Geometry/Unit4/Lesson4/GUnit4Lesson4Page";
import GUnit4Lesson4Quiz from "./pages/Geometry/Unit4/Lesson4/GUnit4Lesson4Quiz";

//Geomerty Unit 5
import GUnit5Test from "./pages/Geometry/Unit5/Test/GUnit5Test";
import GUnit5LessonsPage from "./pages/Geometry/Unit5/GUnit5LessonsPage";
import GUnit5Lesson1Page from "./pages/Geometry/Unit5/Lesson1/GUnit5Lesson1Page";
import GUnit5Lesson1Quiz from "./pages/Geometry/Unit5/Lesson1/GUnit5Lesson1Quiz";
import GUnit5Lesson2Page from "./pages/Geometry/Unit5/Lesson2/GUnit5Lesson2Page";
import GUnit5Lesson2Quiz from "./pages/Geometry/Unit5/Lesson2/GUnit5Lesson2Quiz";
import GUnit5Lesson3Page from "./pages/Geometry/Unit5/Lesson3/GUnit5Lesson3Page";
import GUnit5Lesson3Quiz from "./pages/Geometry/Unit5/Lesson3/GUnit5Lesson3Quiz";
import GUnit5Lesson4Page from "./pages/Geometry/Unit5/Lesson4/GUnit5Lesson4Page";
import GUnit5Lesson4Quiz from "./pages/Geometry/Unit5/Lesson4/GUnit5Lesson4Quiz";

//Geometry Unit 6
import GUnit6Test from "./pages/Geometry/Unit6/Test/GUnit6Test";
import GUnit6LessonsPage from "./pages/Geometry/Unit6/GUnit6LessonsPage";
import GUnit6Lesson1Page from "./pages/Geometry/Unit6/Lesson1/GUnit6Lesson1Page";
import GUnit6Lesson1Quiz from "./pages/Geometry/Unit6/Lesson1/GUnit6Lesson1Quiz";
import GUnit6Lesson2Page from "./pages/Geometry/Unit6/Lesson2/GUnit6Lesson2Page";
import GUnit6Lesson2Quiz from "./pages/Geometry/Unit6/Lesson2/GUnit6Lesson2Quiz";
import GUnit6Lesson3Page from "./pages/Geometry/Unit6/Lesson3/GUnit6Lesson3Page";
import GUnit6Lesson3Quiz from "./pages/Geometry/Unit6/Lesson3/GUnit6Lesson3Quiz";
import GUnit6Lesson4Page from "./pages/Geometry/Unit6/Lesson4/GUnit6Lesson4Page";
import GUnit6Lesson4Quiz from "./pages/Geometry/Unit6/Lesson4/GUnit6Lesson4Quiz";

//Statistics Unit 1
import SUnit1Test from "./pages/Statistics/Unit1/Test/SUnit1Test";
import SUnit1LessonsPage from "./pages/Statistics/Unit1/SUnit1LessonsPage";
import SUnit1Lesson1Page from "./pages/Statistics/Unit1/Lesson1/SUnit1Lesson1Page";
import SUnit1Lesson1Quiz from "./pages/Statistics/Unit1/Lesson1/SUnit1Lesson1Quiz";
import SUnit1Lesson2Page from "./pages/Statistics/Unit1/Lesson2/SUnit1Lesson2Page";
import SUnit1Lesson2Quiz from "./pages/Statistics/Unit1/Lesson2/SUnit1Lesson2Quiz";
import SUnit1Lesson3Page from "./pages/Statistics/Unit1/Lesson3/SUnit1Lesson3Page";
import SUnit1Lesson3Quiz from "./pages/Statistics/Unit1/Lesson3/SUnit1Lesson3Quiz";
import SUnit1Lesson4Page from "./pages/Statistics/Unit1/Lesson4/SUnit1Lesson4Page";
import SUnit1Lesson4Quiz from "./pages/Statistics/Unit1/Lesson4/SUnit1Lesson4Quiz";

//Statistics Unit 2
import SUnit2Test from "./pages/Statistics/Unit2/Test/SUnit2Test";
import SUnit2LessonsPage from "./pages/Statistics/Unit2/SUnit2LessonsPage";
import SUnit2Lesson1Page from "./pages/Statistics/Unit2/Lesson1/SUnit2Lesson1Page";
import SUnit2Lesson1Quiz from "./pages/Statistics/Unit2/Lesson1/SUnit2Lesson1Quiz";
import SUnit2Lesson2Page from "./pages/Statistics/Unit2/Lesson2/SUnit2Lesson2Page";
import SUnit2Lesson2Quiz from "./pages/Statistics/Unit2/Lesson2/SUnit2Lesson2Quiz";
import SUnit2Lesson3Page from "./pages/Statistics/Unit2/Lesson3/SUnit2Lesson3Page";
import SUnit2Lesson3Quiz from "./pages/Statistics/Unit2/Lesson3/SUnit2Lesson3Quiz";
import SUnit2Lesson4Page from "./pages/Statistics/Unit2/Lesson4/SUnit2Lesson4Page";
import SUnit2Lesson4Quiz from "./pages/Statistics/Unit2/Lesson4/SUnit2Lesson4Quiz";

//Statistics Unit 3
import SUnit3Test from "./pages/Statistics/Unit3/Test/SUnit3Test";
import SUnit3LessonsPage from "./pages/Statistics/Unit3/SUnit3LessonsPage";
import SUnit3Lesson1Page from "./pages/Statistics/Unit3/Lesson1/SUnit3Lesson1Page";
import SUnit3Lesson1Quiz from "./pages/Statistics/Unit3/Lesson1/SUnit3Lesson1Quiz";
import SUnit3Lesson2Page from "./pages/Statistics/Unit3/Lesson2/SUnit3Lesson2Page";
import SUnit3Lesson2Quiz from "./pages/Statistics/Unit3/Lesson2/SUnit3Lesson2Quiz";
import SUnit3Lesson3Page from "./pages/Statistics/Unit3/Lesson3/SUnit3Lesson3Page";
import SUnit3Lesson3Quiz from "./pages/Statistics/Unit3/Lesson3/SUnit3Lesson3Quiz";
import SUnit3Lesson4Page from "./pages/Statistics/Unit3/Lesson4/SUnit3Lesson4Page";
import SUnit3Lesson4Quiz from "./pages/Statistics/Unit3/Lesson4/SUnit3Lesson4Quiz";

//Statistics Unit 4
import SUnit4Test from "./pages/Statistics/Unit4/Test/SUnit4Test";
import SUnit4LessonsPage from "./pages/Statistics/Unit4/SUnit4LessonsPage";
import SUnit4Lesson1Page from "./pages/Statistics/Unit4/Lesson1/SUnit4Lesson1Page";
import SUnit4Lesson1Quiz from "./pages/Statistics/Unit4/Lesson1/SUnit4Lesson1Quiz";
import SUnit4Lesson2Page from "./pages/Statistics/Unit4/Lesson2/SUnit4Lesson2Page";
import SUnit4Lesson2Quiz from "./pages/Statistics/Unit4/Lesson2/SUnit4Lesson2Quiz";
import SUnit4Lesson3Page from "./pages/Statistics/Unit4/Lesson3/SUnit4Lesson3Page";
import SUnit4Lesson3Quiz from "./pages/Statistics/Unit4/Lesson3/SUnit4Lesson3Quiz";
import SUnit4Lesson4Page from "./pages/Statistics/Unit4/Lesson4/SUnit4Lesson4Page";
import SUnit4Lesson4Quiz from "./pages/Statistics/Unit4/Lesson4/SUnit4Lesson4Quiz";

//Statistics Unit 5
import SUnit5Test from "./pages/Statistics/Unit5/Test/SUnit5Test";
import SUnit5LessonsPage from "./pages/Statistics/Unit5/SUnit5LessonsPage";
import SUnit5Lesson1Page from "./pages/Statistics/Unit5/Lesson1/SUnit5Lesson1Page";
import SUnit5Lesson1Quiz from "./pages/Statistics/Unit5/Lesson1/SUnit5Lesson1Quiz";
import SUnit5Lesson2Page from "./pages/Statistics/Unit5/Lesson2/SUnit5Lesson2Page";
import SUnit5Lesson2Quiz from "./pages/Statistics/Unit5/Lesson2/SUnit5Lesson2Quiz";
import SUnit5Lesson3Page from "./pages/Statistics/Unit5/Lesson3/SUnit5Lesson3Page";
import SUnit5Lesson3Quiz from "./pages/Statistics/Unit5/Lesson3/SUnit5Lesson3Quiz";
import SUnit5Lesson4Page from "./pages/Statistics/Unit5/Lesson4/SUnit5Lesson4Page";
import SUnit5Lesson4Quiz from "./pages/Statistics/Unit5/Lesson4/SUnit5Lesson4Quiz";

//Statistics Unit 6
import SUnit6Test from "./pages/Statistics/Unit6/Test/SUnit6Test";
import SUnit6LessonsPage from "./pages/Statistics/Unit6/SUnit6LessonsPage";
import SUnit6Lesson1Page from "./pages/Statistics/Unit6/Lesson1/SUnit6Lesson1Page";
import SUnit6Lesson1Quiz from "./pages/Statistics/Unit6/Lesson1/SUnit6Lesson1Quiz";
import SUnit6Lesson2Page from "./pages/Statistics/Unit6/Lesson2/SUnit6Lesson2Page";
import SUnit6Lesson2Quiz from "./pages/Statistics/Unit6/Lesson2/SUnit6Lesson2Quiz";
import SUnit6Lesson3Page from "./pages/Statistics/Unit6/Lesson3/SUnit6Lesson3Page";
import SUnit6Lesson3Quiz from "./pages/Statistics/Unit6/Lesson3/SUnit6Lesson3Quiz";
import SUnit6Lesson4Page from "./pages/Statistics/Unit6/Lesson4/SUnit6Lesson4Page";
import SUnit6Lesson4Quiz from "./pages/Statistics/Unit6/Lesson4/SUnit6Lesson4Quiz";


function App() {
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [diagnosticResults, setDiagnosticResults] = useState([]);
  //The function decides what to display based on the value of currentPage
  function renderPage() {
    if (currentPage === "HomePage") 
      return <HomePage setCurrentPage={setCurrentPage} />;
    if (currentPage === "GamesPage")
      return <GamesPage setCurrentPage={setCurrentPage} />;
    
    if (currentPage === "SpeedGame")
      return <SpeedGame setCurrentPage={setCurrentPage} />;
    
    if (currentPage === "DTestPage")
      return (
        <DTestPage
          setCurrentPage={setCurrentPage}
          setDiagnosticResults={setDiagnosticResults}
        />
      );
         if (currentPage === "DTestResults")
      return (
        <DTestResults
          diagnosticResults={diagnosticResults}
          setCurrentPage={setCurrentPage}
        />
      );
    // Games
    if (currentPage === "GameAddSub")
      return <GameAddSub setCurrentPage={setCurrentPage}/>;
    if (currentPage === "GameMulDiv")
      return <GameMulDiv setCurrentPage={setCurrentPage}/>;
    if (currentPage === "GameCube")
      return <GameCube setCurrentPage={setCurrentPage}/>;
    if (currentPage === "GameSquare")
      return <GameSquare setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PreAlgebraUnitsPage")
      return <PreAlgebraUnitsPage setCurrentPage={setCurrentPage} />;
    // Pre Algebra Unit 1
    if (currentPage === "Unit1LessonsPage")
      return <Unit1LessonsPage setCurrentPage={setCurrentPage} />;
    if (currentPage === "Lesson1Page")
      return <Lesson1Page setCurrentPage={setCurrentPage} />;
    if (currentPage === "Lesson1Quiz")
      return <Lesson1Quiz setCurrentPage={setCurrentPage} />;
    if (currentPage === "PAUnit1Lesson2Page")
      return <PAUnit1Lesson2Page setCurrentPage={setCurrentPage}/>;
    if (currentPage === "PAUnit1Lesson2Quiz")
      return <PAUnit1Lesson2Quiz setCurrentPage={setCurrentPage}/>;
    if (currentPage === "PAUnit1Lesson3Page")
      return <PAUnit1Lesson3Page setCurrentPage={setCurrentPage}/>;
    if (currentPage === "PAUnit1Lesson3Quiz")
      return <PAUnit1Lesson3Quiz setCurrentPage={setCurrentPage}/>;
    if (currentPage === "PAUnit1Lesson4Page")
      return <PAUnit1Lesson4Page setCurrentPage={setCurrentPage}/>;
    if (currentPage === "PAUnit1Lesson4Quiz")
      return <PAUnit1Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit1Test")
      return <PAUnit1Test setCurrentPage={setCurrentPage}/>;
    
    //Pre Algebra Unit 2 
    if (currentPage === "PAUnit2LessonsPage")
      return <PAUnit2LessonsPage setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit2Lesson1Page")
      return <PAUnit2Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit2Lesson1Quiz")
      return <PAUnit2Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit2Lesson2Page")
      return <PAUnit2Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit2Lesson2Quiz")
      return <PAUnit2Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit2Lesson3Page")
      return <PAUnit2Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit2Lesson3Quiz")
      return <PAUnit2Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit2Lesson4Page")
      return <PAUnit2Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit2Lesson4Quiz")
      return <PAUnit2Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit2Test")
      return <PAUnit2Test setCurrentPage={setCurrentPage}/>;

    //Pre-Algebra 3 Unit
    if (currentPage === "PAUnit3LessonsPage")
      return <PAUnit3LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Lesson1Page")
      return <PAUnit3Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit3Lesson1Quiz")
      return <PAUnit3Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Lesson2Page")
      return <PAUnit3Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit3Lesson2Quiz")
      return <PAUnit3Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Lesson3Page")
      return <PAUnit3Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit3Lesson3Quiz")
      return <PAUnit3Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Lesson4Page")
      return <PAUnit3Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Lesson4Quiz")
      return <PAUnit3Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit3Test")
      return <PAUnit3Test setCurrentPage={setCurrentPage}/>;

    //Pre Algebra Unit 4
    if (currentPage === "PAUnit4LessonsPage")
      return <PAUnit4LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Lesson1Page")
      return <PAUnit4Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit4Lesson1Quiz")
      return <PAUnit4Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Lesson2Page")
      return <PAUnit4Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit4Lesson2Quiz")
      return <PAUnit4Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Lesson3Page")
      return <PAUnit4Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit4Lesson3Quiz")
      return <PAUnit4Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Lesson4Page")
      return <PAUnit4Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Lesson4Quiz")
      return <PAUnit4Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit4Test")
      return <PAUnit4Test setCurrentPage={setCurrentPage}/>;

    //Pre Algebra Unit 5
    if (currentPage === "PAUnit5LessonsPage")
      return <PAUnit5LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Lesson1Page")
      return <PAUnit5Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit5Lesson1Quiz")
      return <PAUnit5Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Lesson2Page")
      return <PAUnit5Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit5Lesson2Quiz")
      return <PAUnit5Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Lesson3Page")
      return <PAUnit5Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit5Lesson3Quiz")
      return <PAUnit5Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Lesson4Page")
      return <PAUnit5Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Lesson4Quiz")
      return <PAUnit5Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit5Test")
      return <PAUnit5Test setCurrentPage={setCurrentPage}/>;


    //Pre Algebra Unit 6 
    if (currentPage === "PAUnit6LessonsPage")
      return <PAUnit6LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Lesson1Page")
      return <PAUnit6Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit6Lesson1Quiz")
      return <PAUnit6Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Lesson2Page")
      return <PAUnit6Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit6Lesson2Quiz")
      return <PAUnit6Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Lesson3Page")
      return <PAUnit6Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "PAUnit6Lesson3Quiz")
      return <PAUnit6Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Lesson4Page")
      return <PAUnit6Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Lesson4Quiz")
      return <PAUnit6Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "PAUnit6Test")
      return <PAUnit6Test setCurrentPage={setCurrentPage}/>;
    
    //Algebra
    if (currentPage === "AlgebraUnitsPage")
      return <AlgebraUnitsPage setCurrentPage={setCurrentPage} />;
    //Algebra Unit 1
    if (currentPage === "AUnit1LessonsPage")
      return <AUnit1LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Lesson1Page")
      return <AUnit1Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit1Lesson1Quiz")
      return <AUnit1Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Lesson2Page")
      return <AUnit1Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit1Lesson2Quiz")
      return <AUnit1Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Lesson3Page")
      return <AUnit1Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit1Lesson3Quiz")
      return <AUnit1Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Lesson4Page")
      return <AUnit1Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Lesson4Quiz")
      return <AUnit1Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit1Test")
      return <AUnit1Test setCurrentPage={setCurrentPage}/>;

    //Algebra Unit 2
    if (currentPage === "AUnit2LessonsPage")
      return <AUnit2LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Lesson1Page")
      return <AUnit2Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit2Lesson1Quiz")
      return <AUnit2Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Lesson2Page")
      return <AUnit2Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit2Lesson2Quiz")
      return <AUnit2Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Lesson3Page")
      return <AUnit2Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit2Lesson3Quiz")
      return <AUnit2Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Lesson4Page")
      return <AUnit2Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Lesson4Quiz")
      return <AUnit2Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit2Test")
      return <AUnit2Test setCurrentPage={setCurrentPage}/>;

    //Algebra Unit 3
    if (currentPage === "AUnit3LessonsPage")
      return <AUnit3LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Lesson1Page")
      return <AUnit3Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit3Lesson1Quiz")
      return <AUnit3Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Lesson2Page")
      return <AUnit3Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit3Lesson2Quiz")
      return <AUnit3Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Lesson3Page")
      return <AUnit3Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit3Lesson3Quiz")
      return <AUnit3Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Lesson4Page")
      return <AUnit3Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Lesson4Quiz")
      return <AUnit3Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit3Test")
      return <AUnit3Test setCurrentPage={setCurrentPage}/>;

    //Algebra Unit 4
    if (currentPage === "AUnit4LessonsPage")
      return <AUnit4LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Lesson1Page")
      return <AUnit4Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit4Lesson1Quiz")
      return <AUnit4Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Lesson2Page")
      return <AUnit4Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit4Lesson2Quiz")
      return <AUnit4Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Lesson3Page")
      return <AUnit4Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit4Lesson3Quiz")
      return <AUnit4Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Lesson4Page")
      return <AUnit4Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Lesson4Quiz")
      return <AUnit4Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit4Test")
      return <AUnit4Test setCurrentPage={setCurrentPage}/>;

    //Algebra Unit 5
    if (currentPage === "AUnit5LessonsPage")
      return <AUnit5LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Lesson1Page")
      return <AUnit5Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit5Lesson1Quiz")
      return <AUnit5Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Lesson2Page")
      return <AUnit5Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit5Lesson2Quiz")
      return <AUnit5Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Lesson3Page")
      return <AUnit5Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit5Lesson3Quiz")
      return <AUnit5Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Lesson4Page")
      return <AUnit5Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Lesson4Quiz")
      return <AUnit5Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit5Test")
      return <AUnit5Test setCurrentPage={setCurrentPage}/>;

    //Algebra Unit 6
    if (currentPage === "AUnit6LessonsPage")
      return <AUnit6LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Lesson1Page")
      return <AUnit6Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit6Lesson1Quiz")
      return <AUnit6Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Lesson2Page")
      return <AUnit6Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit6Lesson2Quiz")
      return <AUnit6Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Lesson3Page")
      return <AUnit6Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "AUnit6Lesson3Quiz")
      return <AUnit6Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Lesson4Page")
      return <AUnit6Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Lesson4Quiz")
      return <AUnit6Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "AUnit6Test")
      return <AUnit6Test setCurrentPage={setCurrentPage}/>;


  //Geometry
    if (currentPage === "GeometryUnitsPage")
      return <GeometryUnitsPage setCurrentPage={setCurrentPage} />;
    //Geometry Unit 1
    if (currentPage === "GUnit1LessonsPage")
      return <GUnit1LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Lesson1Page")
      return <GUnit1Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit1Lesson1Quiz")
      return <GUnit1Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Lesson2Page")
      return <GUnit1Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit1Lesson2Quiz")
      return <GUnit1Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Lesson3Page")
      return <GUnit1Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit1Lesson3Quiz")
      return <GUnit1Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Lesson4Page")
      return <GUnit1Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Lesson4Quiz")
      return <GUnit1Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit1Test")
      return <GUnit1Test setCurrentPage={setCurrentPage}/>;

    //Geometry Unit 2
    if (currentPage === "GUnit2LessonsPage")
      return <GUnit2LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Lesson1Page")
      return <GUnit2Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit2Lesson1Quiz")
      return <GUnit2Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Lesson2Page")
      return <GUnit2Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit2Lesson2Quiz")
      return <GUnit2Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Lesson3Page")
      return <GUnit2Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit2Lesson3Quiz")
      return <GUnit2Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Lesson4Page")
      return <GUnit2Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Lesson4Quiz")
      return <GUnit2Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit2Test")
      return <GUnit2Test setCurrentPage={setCurrentPage}/>;

    //Geometry Unit 3
    if (currentPage === "GUnit3LessonsPage")
      return <GUnit3LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Lesson1Page")
      return <GUnit3Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit3Lesson1Quiz")
      return <GUnit3Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Lesson2Page")
      return <GUnit3Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit3Lesson2Quiz")
      return <GUnit3Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Lesson3Page")
      return <GUnit3Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit3Lesson3Quiz")
      return <GUnit3Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Lesson4Page")
      return <GUnit3Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Lesson4Quiz")
      return <GUnit3Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit3Test")
      return <GUnit3Test setCurrentPage={setCurrentPage}/>;

    //Geometry Unit 4
    if (currentPage === "GUnit4LessonsPage")
      return <GUnit4LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Lesson1Page")
      return <GUnit4Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit4Lesson1Quiz")
      return <GUnit4Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Lesson2Page")
      return <GUnit4Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit4Lesson2Quiz")
      return <GUnit4Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Lesson3Page")
      return <GUnit4Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit4Lesson3Quiz")
      return <GUnit4Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Lesson4Page")
      return <GUnit4Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Lesson4Quiz")
      return <GUnit4Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit4Test")
      return <GUnit4Test setCurrentPage={setCurrentPage}/>;

    //Geometry Unit 5
    if (currentPage === "GUnit5LessonsPage")
      return <GUnit5LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Lesson1Page")
      return <GUnit5Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit5Lesson1Quiz")
      return <GUnit5Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Lesson2Page")
      return <GUnit5Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit5Lesson2Quiz")
      return <GUnit5Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Lesson3Page")
      return <GUnit5Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit5Lesson3Quiz")
      return <GUnit5Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Lesson4Page")
      return <GUnit5Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Lesson4Quiz")
      return <GUnit5Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit5Test")
      return <GUnit5Test setCurrentPage={setCurrentPage}/>;

    //Geometry Unit 6
    if (currentPage === "GUnit6LessonsPage")
      return <GUnit6LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Lesson1Page")
      return <GUnit6Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit6Lesson1Quiz")
      return <GUnit6Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Lesson2Page")
      return <GUnit6Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit6Lesson2Quiz")
      return <GUnit6Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Lesson3Page")
      return <GUnit6Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "GUnit6Lesson3Quiz")
      return <GUnit6Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Lesson4Page")
      return <GUnit6Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Lesson4Quiz")
      return <GUnit6Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "GUnit6Test")
      return <GUnit6Test setCurrentPage={setCurrentPage}/>;

    //Statistics
    if (currentPage === "StatisticsUnitsPage")
      return <StatisticsUnitsPage setCurrentPage={setCurrentPage} />;
    //Statistics Unit 1
    if (currentPage === "SUnit1LessonsPage")
      return <SUnit1LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Lesson1Page")
      return <SUnit1Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit1Lesson1Quiz")
      return <SUnit1Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Lesson2Page")
      return <SUnit1Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit1Lesson2Quiz")
      return <SUnit1Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Lesson3Page")
      return <SUnit1Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit1Lesson3Quiz")
      return <SUnit1Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Lesson4Page")
      return <SUnit1Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Lesson4Quiz")
      return <SUnit1Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit1Test")
      return <SUnit1Test setCurrentPage={setCurrentPage}/>;

    //Statistics Unit 2
    if (currentPage === "SUnit2LessonsPage")
      return <SUnit2LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Lesson1Page")
      return <SUnit2Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit2Lesson1Quiz")
      return <SUnit2Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Lesson2Page")
      return <SUnit2Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit2Lesson2Quiz")
      return <SUnit2Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Lesson3Page")
      return <SUnit2Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit2Lesson3Quiz")
      return <SUnit2Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Lesson4Page")
      return <SUnit2Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Lesson4Quiz")
      return <SUnit2Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit2Test")
      return <SUnit2Test setCurrentPage={setCurrentPage}/>;

    //Statistics Unit 3
    if (currentPage === "SUnit3LessonsPage")
      return <SUnit3LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Lesson1Page")
      return <SUnit3Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit3Lesson1Quiz")
      return <SUnit3Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Lesson2Page")
      return <SUnit3Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit3Lesson2Quiz")
      return <SUnit3Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Lesson3Page")
      return <SUnit3Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit3Lesson3Quiz")
      return <SUnit3Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Lesson4Page")
      return <SUnit3Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Lesson4Quiz")
      return <SUnit3Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit3Test")
      return <SUnit3Test setCurrentPage={setCurrentPage}/>;

    //Statistics Unit 4
    if (currentPage === "SUnit4LessonsPage")
      return <SUnit4LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Lesson1Page")
      return <SUnit4Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit4Lesson1Quiz")
      return <SUnit4Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Lesson2Page")
      return <SUnit4Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit4Lesson2Quiz")
      return <SUnit4Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Lesson3Page")
      return <SUnit4Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit4Lesson3Quiz")
      return <SUnit4Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Lesson4Page")
      return <SUnit4Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Lesson4Quiz")
      return <SUnit4Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit4Test")
      return <SUnit4Test setCurrentPage={setCurrentPage}/>;

    //Statistics Unit 5
    if (currentPage === "SUnit5LessonsPage")
      return <SUnit5LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Lesson1Page")
      return <SUnit5Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit5Lesson1Quiz")
      return <SUnit5Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Lesson2Page")
      return <SUnit5Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit5Lesson2Quiz")
      return <SUnit5Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Lesson3Page")
      return <SUnit5Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit5Lesson3Quiz")
      return <SUnit5Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Lesson4Page")
      return <SUnit5Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Lesson4Quiz")
      return <SUnit5Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit5Test")
      return <SUnit5Test setCurrentPage={setCurrentPage}/>;

    //Statistics Unit 6
    if (currentPage === "SUnit6LessonsPage")
      return <SUnit6LessonsPage setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Lesson1Page")
      return <SUnit6Lesson1Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit6Lesson1Quiz")
      return <SUnit6Lesson1Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Lesson2Page")
      return <SUnit6Lesson2Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit6Lesson2Quiz")
      return <SUnit6Lesson2Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Lesson3Page")
      return <SUnit6Lesson3Page setCurrentPage={setCurrentPage} />;

    if (currentPage === "SUnit6Lesson3Quiz")
      return <SUnit6Lesson3Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Lesson4Page")
      return <SUnit6Lesson4Page setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Lesson4Quiz")
      return <SUnit6Lesson4Quiz setCurrentPage={setCurrentPage}/>;

    if (currentPage === "SUnit6Test")
      return <SUnit6Test setCurrentPage={setCurrentPage}/>;
  
  }

  return (
    <>
      <Background />  
      
      <div style={{ 
        width: "100%", 
        height: "100vh", 
        overflowY: "auto", 
        position: "relative",
        zIndex: 2 
      }}>
        {renderPage()}
      </div>
    </>
  );
}

export default App;


