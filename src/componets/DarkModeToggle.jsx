import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply the theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 transition-all"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default DarkModeToggle;
