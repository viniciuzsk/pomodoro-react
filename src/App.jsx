import { useState } from 'react';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';
import SettingsModal from './components/SettingsModal';
const App = () => {
  const [isSettings, setIsSettingsOpen] = useState(false);
  return (
    <>
      <Header onOpenSettings={() => setIsSettingsOpen(!isSettings)} />
      {isSettings && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
      <PomodoroTimer />
    </>
  );
};

export default App;
