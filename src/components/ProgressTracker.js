import React, { useState, useEffect } from 'react';

const ProgressTracker = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('deutschnileProgress');
    if (savedProgress) {
      setCheckedItems(JSON.parse(savedProgress));
    }
  }, []);

  const handleCheck = (id) => {
    const updatedCheckedItems = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updatedCheckedItems);
    localStorage.setItem('deutschnileProgress', JSON.stringify(updatedCheckedItems));
  };

  return (
    <ul className="progress-list">
      {items.map((item) => (
        <li key={item.id}>
          <label className="progress-item">
            <input
              type="checkbox"
              checked={checkedItems[item.id] || false}
              onChange={() => handleCheck(item.id)}
            />
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ProgressTracker;