import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h3>How to play dice game</h3>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`

    margin: 30px;
    border: 1px solid white;
    background: #434b44;
    max-width: 50vw;

    h3{
        margin-top: 20px;
        margin-left: 20px;
        margin-bottom: 0px;
        font-size: 24px;
        font-weight: bold;
        background: #434b44;
        color: #e25f5f;
    }
    ul, li{
        background: #434b44;
    }
`