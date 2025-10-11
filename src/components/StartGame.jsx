import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  .content h1{
    font-size: 4rem;

  }
`;

const Button = styled.button`
    color: white;
    background-color: #ff0000;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #ffffff;
        color: #ff0000;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
`;
