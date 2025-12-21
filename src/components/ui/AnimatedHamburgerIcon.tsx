import React from 'react';

interface AnimatedHamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const AnimatedHamburgerIcon: React.FC<AnimatedHamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="hamburger-button"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`hamburger-box ${isOpen ? 'is-open' : ''}`}>
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default AnimatedHamburgerIcon;
