"use client";
import React, { useState } from "react";

const ProductTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="product-tabs">
        <div className="buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={index === activeTab ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </>
  );
};

export default ProductTabs;
