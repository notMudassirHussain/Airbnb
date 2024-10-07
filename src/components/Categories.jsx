import React, { useState } from 'react';
import './Categories.css'; // Add your styles

const Categories = () => {
  const categories = ['Icons', 'Rooms', 'Top Cities', 'Amazing Views', 'Islands'];
  const [activeCategory, setActiveCategory] = useState('Icons');

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className={activeCategory === category ? 'active' : ''} 
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
