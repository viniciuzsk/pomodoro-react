import { useState } from 'react';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';
import SettingsModal from './components/SettingsModal';
const App = () => {
  const [isSettings, setIsSettingsOpen] = useState(false);
  const [timers, setTimers] = useState({ focus: 25, short: 5, long: 15 });

  return (
    <>
      <Header onOpenSettings={() => setIsSettingsOpen(!isSettings)} />
      {isSettings && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
          timers={timers}
          setTimers={(timerSettingsModal) => setTimers(timerSettingsModal)}
        />
      )}
      <PomodoroTimer timers={timers} />
    </>
  );
};

export default App;
