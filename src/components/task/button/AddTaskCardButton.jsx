import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <div className="add-task-card-button-area">
      <button className="add-task-card-button" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
