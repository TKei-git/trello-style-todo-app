import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (e) => {
    if (!e.destination) {
      return;
    }
    const newTaskList = [...taskList];
    const remove = newTaskList.splice(e.source.index, 1);
    newTaskList.splice(e.destination.index, 0, remove[0]);
    setTaskList(newTaskList);
  };

  const droppableId = uuid();

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
