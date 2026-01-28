import { ChartNoAxesColumn, Moon, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex w-full container justify-between mx-auto p-7">
      <nav>PomoFocus</nav>
      <div className="flex gap-5">
        <ChartNoAxesColumn />
        <Settings />
        <Moon />
      </div>
    </header>
  );
};

export default Header;
