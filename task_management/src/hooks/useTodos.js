import { useState, useEffect } from "react";

export const useTodos = (key = "Todo Items") => {
  const [task, setTask] = useState(() => {
    const savedItems = localStorage.getItem(key);
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [inputVal, setInputVal] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  /*Set Local Storage  */
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(task));
  }, [task, key]);

  /*  Delete the Task*/

  const deleteItem = (id) => {
    const updatedList = task.filter((_, i) => i !== id);
    setTask(updatedList);
  };

  /*  Edit and Add the Task*/

  const editAndAddTask = (idx) => {
    setInputVal(task[idx].text);
    setEditIndex(idx);
  };

  const saveEditedText = () => {
    if (inputVal.trim() === "") return;

    if (editIndex !== null) {
      const updated = task.map((item, i) =>
        i === editIndex ? { ...item, text: inputVal } : item,
      );
      setEditIndex(null);
      setTask(updated);
    } else {
      setTask([
        ...task,
        {
          text: inputVal,
          completed: false,
        },
      ]);
    }

    setInputVal("");
  };

  /* Toggle as completed*/

  const toggleComplete = (index) => {
    const updated = task.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTask(updated);
  };
  return {
    task,
    deleteItem,
    editAndAddTask,
    saveEditedText,
    toggleComplete,
    inputVal,
    setInputVal,
    editIndex,
  };
};
