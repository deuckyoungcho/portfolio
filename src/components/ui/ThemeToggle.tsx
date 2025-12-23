import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Download } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const download = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}/조득용_경력기술서.pdf`;
    link.download = "조득용_경력기술서.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        onClick={download}
        className="p-2 rounded-full text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        <Download size={20} />
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </>
  );
};

export default ThemeToggle;
