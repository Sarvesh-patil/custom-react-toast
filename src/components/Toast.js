import React from "react";

const Toast = ({ id, onClose, text }) => {
  return (
    <div className="toast">
      <p>{text}</p>
      <span className="closeButton" onClick={() => onClose(id)}>
        x
      </span>
    </div>
  );
};

export default React.memo(Toast);
