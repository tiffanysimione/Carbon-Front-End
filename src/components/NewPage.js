import React from 'react';

const NewPage = ({ onClose }) => {
    const handleNewPageClose = () => {
      onClose();
    };
  
    return (
      <div className ="pop-up">
        <div className ="pop-upcontent">
        <h2>New Page</h2>
        
        <p>pee pee</p>
        <button onClick={handleNewPageClose}>Close Page</button>
        </div>
      </div>
    );
  };
  
  export default NewPage;
  