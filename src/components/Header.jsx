import { ChartNoAxesColumn, Moon, Settings } from 'lucide-react';

const Header = ({ onOpenSettings }) => {
  return (
    <header className="flex w-full container justify-between mx-auto p-7">
      <nav>PomoFocus</nav>
      <div className="flex gap-5">
        <ChartNoAxesColumn />
        <Settings className="cursor-pointer" onClick={() => onOpenSettings()} />
        <Moon />
      </div>
    </header>
  );
};

export default Header;
