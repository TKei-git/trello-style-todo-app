import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="task-card-delete-button"
        onClick={() => taskCardDelete(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
