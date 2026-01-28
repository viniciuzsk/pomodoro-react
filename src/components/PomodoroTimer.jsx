import { useEffect, useState } from 'react';

const PomodoroTimer = () => {
  const [currentMode, setCurrentMode] = useState(`focus`);

  const [secondsTotal, setSecondsTotal] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  };

  formatTime(secondsTotal);

  useEffect(() => {
    if (!isActive || secondsTotal <= 0) return;
    const interval = setInterval(() => {
      setSecondsTotal(secondsTotal - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsTotal]);

  const MODES = {
    focus: { label: `foco`, time: 1500 },
    short: { label: `Curta`, time: 300 },
    long: { label: `Longa`, time: 900 },
  };

  function handleChangeMode(modeKey) {
    setCurrentMode(modeKey);
    setSecondsTotal(MODES[modeKey].time);
    setIsActive(false);
  }

  return (
    <div>
      <div className="flex gap-3">
        <button
          className={currentMode === 'focus' ? 'bg-amber-500' : 'bg-none'}
          onClick={() => {
            handleChangeMode(`focus`);
          }}
        >
          Foco
        </button>
        <button
          className={currentMode === 'short' ? 'bg-amber-500' : 'bg-none'}
          onClick={() => {
            handleChangeMode(`short`);
          }}
        >
          Curta
        </button>
        <button
          className={currentMode === 'long' ? 'bg-amber-500' : 'bg-none'}
          onClick={() => {
            handleChangeMode(`long`);
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
