import React, { useState } from "react";

const Size = ({ sizeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="image-modal-container">
      <button className="size-btn" onClick={openModal}>
        <strong>Size Guide</strong>
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content image-content">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <div className="size-box">
              <img src={sizeUrl} alt="Full Image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Size;
