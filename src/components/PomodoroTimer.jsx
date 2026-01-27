import { useEffect, useState } from 'react';

const PomodoroTimer = () => {
  const [secondsTotal, setSecondsTotal] = useState(1500); // timer 25
  const [isActive, setIsActive] = useState(false);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  };

  formatTime(secondsTotal);

  function handleModeChange(tempo) {
    setSecondsTotal(tempo);
    setIsActive(false);
  }

  useEffect(() => {
    if (!isActive || secondsTotal <= 0) return;
    const interval = setInterval(() => {
      setSecondsTotal(secondsTotal - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsTotal]);

  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            handleModeChange(1500);
          }}
        >
          Foco
        </button>
        <button
          onClick={() => {
            handleModeChange(300);
          }}
        >
          Curta
        </button>
        <button
          onClick={() => {
            handleModeChange(900);
          }}
        >
          Longa
        </button>
      </div>
      <h1>Pomodoro Timer</h1>
      <p>{formatTime(secondsTotal)}</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
    </div>
  );
};

export default PomodoroTimer;
