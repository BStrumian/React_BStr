import { useState, useRef } from 'react';
import './App.css';
import Herta from '/Audio/Herta.mp3';

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    audioRef.current.play();
  };

  return (
    <>
      <div>
        <img src="/image/fjv7ifrmc3951.jpg" alt="" />
      </div>
      <h1>Bartłomiej Strumian 113847</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>spin counter {count}</button>
        <p>
          <button onClick={handlePlayAudio}>aughhh</button>
        </p>
        <audio ref={audioRef}>
          <source src={Herta} type="audio/mp3" />
        </audio>
      </div>
      
    </>
  );
}

export default App;
