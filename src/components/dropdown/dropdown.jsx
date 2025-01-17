/* Dropdown component (for filtering recipes by category) done by: Tan Jun Wei */

import React, { useState } from 'react';
import styles from '@/src/styles/dropdown.module.css';

const Dropdown = ({ selectedTag, setSelectedTag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'All Categories',
    'Hard',
    'Medium',
    'Easy',
    'Hawker Favourites',
    'Chinese',
    'Malaysian',
    'Indian',
    'Peranakan',
    'Teochew',
    'Seafood',
    'Spicy',
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value) => {
    setSelectedTag(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.customDropdown}>
      <div className={styles.selectedItem} onClick={toggleDropdown}>
        {selectedTag || 'Select Category'}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          ▼
        </span>
      </div>
      <div
        className={`${styles.dropdownOptions} ${isOpen ? styles.open : ''}`}
      >
        {options.map((option) => (
          <div
            key={option}
            className={styles.option}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;