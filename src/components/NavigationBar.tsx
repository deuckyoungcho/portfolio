import React, { useState } from 'react';
import AnimatedHamburgerIcon from './ui/AnimatedHamburgerIcon';
import ThemeToggle from './ui/ThemeToggle';

const sections = [
  { name: 'About', href: '#about' },
  { name: 'Work Experience', href: '#work-experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#awards' },
];

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 shadow-md mb-4">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <li key={section.name} className="list-none">
                <a
                  href={section.href}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {section.name}
                </a>
              </li>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex flex-grow justify-end items-center">
            <ThemeToggle />
            <div className="ml-4">
              <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute left-0 right-0 bg-gray-50 dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-2 pointer-events-none"
        }`}
      >
        <ul
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {sections.map((section) => (
            <li key={section.name}>
              <a
                href={section.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
