
import styled from 'styled-components'

const RoleDice = ({
    currentDice, 
    rollDice
}) => {




  return (
    <DiceContainer
    onClick={rollDice}
    >
        <div className='dice'>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
align-items: center;
flex-direction: column;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
`