import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
            <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 4rem;
    font-weight: bold;
    line-height: 40px;
}
p{
    font-size: 1.5rem;
    font-weight: 500px;
}
`