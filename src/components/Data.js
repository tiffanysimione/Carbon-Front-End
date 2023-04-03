import React from 'react';

const PopUp = ({ data, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;