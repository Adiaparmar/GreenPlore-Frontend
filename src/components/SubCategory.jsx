import React, { useState } from "react";
import "./SubCategory.css";

const SubCategoryPage = () => {
  const categories = [
    { id: 1, name: "Category 1", items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`) },
    { id: 2, name: "Category 2", items: Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`) },
    { id: 3, name: "Category 3", items: Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`) },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [visibleItems, setVisibleItems] = useState(5);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleItems(12); // Reset visible items for the new category
  };

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 5);
  };

  return (
    <div className="subcategory-page">
      {/* Left Navigation */}
      <nav className="sub-category-navigation">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`nav-button ${
              selectedCategory.id === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="subcategory-content">
        <h2>{selectedCategory.name}</h2>
        <ul className="subcategory-item-list">
          {selectedCategory.items.slice(0, visibleItems).map((item, index) => (
            <li key={index} className="subcategory-item">{item}</li>
          ))}
        </ul>
        {visibleItems < selectedCategory.items.length && (
          <button className="see-more-button" onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default SubCategoryPage;
