'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  //const[toggleTheme, setToggleTheme] = useState<boolean>(false)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <Button className="flex justify-center" variant="ghost" size="icon" onClick={toggleTheme}>
        {/* scale100 pour afficher light par défaut */}
        <Moon className="h-6 w-6 scale-100 dark:scale-0" />
        <Sun className="h-6 w-6 scale-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ToggleTheme;
