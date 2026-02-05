import { Moon, Settings } from 'lucide-react';

const Header = ({ onOpenSettings }) => {
  return (
    <header className="flex w-full container justify-between mx-auto p-7 items-center">
      <nav className="font-bold text-xl text-gray-700">PomoFocus</nav>
      <div className="flex gap-3">
        <button
          onClick={() => onOpenSettings()}
          className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors"
        >
          <Settings />
        </button>
        <button className="text-gray-500 cursor-pointer hover:text-gray-800 transition-colors">
          <Moon />
        </button>
      </div>
    </header>
  );
};

export default Header;
