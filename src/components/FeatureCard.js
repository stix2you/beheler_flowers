// src/components/FeatureCard.js
import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, content }) => {
  return (
    <div className="feature-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default FeatureCard;
