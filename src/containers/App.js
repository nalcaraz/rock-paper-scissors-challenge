import React, { useState, useEffect } from "react";
import "../assets/index.css";
import Header from "../components/Header";
import Scissors from "../components/Scissors";
import Rock from "../components/Rock";
import Paper from "../components/Paper";
import Triangle from "../components/Triangle";
import Rules from "../components/Rules";
import PlayAgain from "../components/PlayAgain";

const weapons = ["rock", "paper", "scissors"];

function App() {
  const [score, setScore] = useState(0);
  const [humanChoice, setHumanChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [winner, setWinner] = useState(null);
  
  // TODO: Need to add isLoading state for computer result

  useEffect(() => {
    if (
      document.cookie
        .split(";")
        .filter(item => item.trim().startsWith("Score=")).length
    ) {
      const existingScore = document.cookie.replace(
        /(?:(?:^|.*;\s*)Score\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      console.log("existing Score", existingScore);
      setScore(parseInt(existingScore));
    }
  }, []);

  useEffect(() => {
    if (humanChoice != null) {
      getComputerChoice();
    }
  }, [humanChoice]);

  useEffect(() => {
    if (computerChoice != null) {
      checkResult();
    }
  }, [computerChoice]);

  useEffect(() => {
    if (winner != null) updateScore();
  }, [winner]);

  useEffect(() => {
    // If Score changes, delete cookie and recreate it with new score
    document.cookie = "Score=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "Score=" + score;
  }, [score]);

  const handleSelectWeapon = choice => {
    setHumanChoice(choice);
  };

  const handleOpenRules = () => {
    setIsRulesModalOpen(true);
  };

  const handleCloseRules = () => {
    setIsRulesModalOpen(false);
  };

  const handleReset = () => {
    setHumanChoice(null);
    setComputerChoice(null);
    setWinner(null);
  };

  function getComputerChoice() {
    setComputerChoice(weapons[Math.floor(Math.random() * weapons.length)]);
  }

  function checkResult() {
    console.log("ComputerChoice", computerChoice);
    console.log("HumanChoice", humanChoice);
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        setWinner("computer");
      } else if (computerChoice === "scissors") {
        setWinner("human");
      } else {
        setWinner("tie");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        setWinner("human");
      } else if (computerChoice === "scissors") {
        setWinner("computer");
      } else {
        setWinner("tie");
      }
    } else {
      // Choice is implied to be scissors
      if (computerChoice === "paper") {
        setWinner("human");
      } else if (computerChoice === "rock") {
        setWinner("computer");
      } else {
        setWinner("tie");
      }
    }
  }

  function updateScore() {
    if (winner === "human") {
      setScore(parseInt(score) + 1);
    } else if (winner === "computer") {
      setScore(parseInt(score) - 1);
    }
  }

  console.log("winner?  ", winner);
  return (
    <>
      <header>
        <Header score={score}></Header>
      </header>
      <main>
        {humanChoice == null && computerChoice == null && (
          <>
            <Triangle />
            <div className="scissors-choice">
              <Scissors handleClickWeapon={handleSelectWeapon} />
            </div>
            <div className="rock-choice">
              <Rock handleClickWeapon={handleSelectWeapon} />
            </div>
            <div className="paper-choice">
              <Paper handleClickWeapon={handleSelectWeapon} />
            </div>
          </>
        )}
        {humanChoice != null && computerChoice != null && (
          <>
            <div className="result-content">
              <span className="human-result">
                <h2 className="uppercase light-text">You picked</h2>
                {humanChoice === "scissors" && <Scissors className="result" />}
                {humanChoice === "rock" && <Rock />}
                {humanChoice === "paper" && <Paper />}
              </span>
              <div>
                <PlayAgain handleReset={handleReset} winner={winner} />
              </div>
              <span className="computer-result">
                <h2 className="uppercase light-text"> The House Picked</h2>
                {computerChoice === "scissors" && <Scissors />}
                {computerChoice === "rock" && <Rock />}
                {computerChoice === "paper" && <Paper />}
              </span> 
             
            </div>
          
          </>
        )}
      </main>
      <Rules isOpen={isRulesModalOpen} close={handleCloseRules}></Rules>
      <footer>
        <button className="rules-button uppercase" onClick={handleOpenRules}>
          Rules
        </button>
      </footer>
      <div className={"backdrop " + (isRulesModalOpen ? "" : "hidden")}></div>
    </>
  );
}

export default App;
