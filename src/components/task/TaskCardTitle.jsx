import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [cardTitle, setCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div className="task-card-title" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="task-card-title-input"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={cardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{cardTitle}</h3>
      )}
    </div>
  );
};
