// frontend/src/components/ProgressBar.jsx
import React from 'react';
import './ProgressBar.css'; // Importa o CSS específico

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="progress-text">{progress.toFixed(2)}% concluído</p>
    </div>
  );
};

export default ProgressBar;
