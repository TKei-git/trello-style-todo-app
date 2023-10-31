import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="task-box"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="task-text">{task.text}</p>
          <button
            className="task-trash-button"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
