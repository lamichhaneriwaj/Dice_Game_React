import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";

const GamePlay = () => {
    const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");



      const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("Please select a number");
            return;
        }
        let randomNumber =generateRandomNumber()

        setCurrentDice((prev) => randomNumber);



        if (randomNumber === selectedNumber) {
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }


  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
                setError={setError}

        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} rollDice={rollDice}/>
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  padding: 50px 40px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
