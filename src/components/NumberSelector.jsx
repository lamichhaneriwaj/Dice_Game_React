import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (num) => {
    setSelectedNumber(num);
          setError("");

  };

  // console.log(selectedNumber)
  return (
    <Container>
        <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((num, i) => (
          <Box
            isSelected={num == selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(num)}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select a number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
.error{
    color: red;
}
  p {
    font-size: 1.5rem;
    font-weight: 700px;
  }
  .flex {
    display: flex;
    gap: 10px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 72px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#002aff" : "transparent"};
`;
