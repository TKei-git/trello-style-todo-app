import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);
  const droppableId = uuid();

  const handleDragEnd = (e) => {
    if (!e.destination) {
      return;
    }
    const newTaskCardsList = [...taskCardsList];
    const remove = newTaskCardsList.splice(e.source.index, 1);
    newTaskCardsList.splice(e.destination.index, 0, remove[0]);
    setTaskCardsList(newTaskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={droppableId} direction="horizontal">
        {(provided) => (
          <div
            className="task-cards-area"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
