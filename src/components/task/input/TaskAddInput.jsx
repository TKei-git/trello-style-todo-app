import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText === "") {
      return;
    }

    const taskId = uuid();
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-add-input"
          placeholder="タスクを入力"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
