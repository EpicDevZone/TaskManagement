import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ toggleComplete, task, deleteItem, editAndAddTask }) => {
  return (
    <>
      {task.map((todo, index) => {
        return (
          <TodoItem
            index={index}
            toggleComplete={toggleComplete}
            todo={todo}
            deleteItem={deleteItem}
            editAndAddTask={editAndAddTask}
          />
        );
      })}
    </>
  );
};

export default TodoList;
