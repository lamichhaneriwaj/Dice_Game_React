import './App.css'
import { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';
import Rules from './components/Rules';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };




  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}

    />}
    <Rules />
    </>
  );
}

export default App;
