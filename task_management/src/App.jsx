import { useEffect, useState } from "react";
import Button from "./Button";

const localKey = "Todo Items";
const App = () => {
  const [task, setTask] = useState(()=>{
    const savedItems=localStorage.getItem(localKey);
    return savedItems ? JSON.parse(savedItems):[];
  });
  const [inputVal, setInputVal] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  /* LocalStorgae  */

  /* for Setting the tasks  */
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(task));
  }, [task]);

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

  return (
    <>
      <div className=" flex flex-col gap-5 w-full h-full items-center justify-around  ">
        <h1 className=" text-3xl font-bold mt-5 ">ToDo Application </h1>
        <input
          className=" border px-6 py-2 font-bold text-xl  "
          placeholder="Add The Task..........."
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />

        {/* Add  Button */}
        <Button
          text={editIndex !== null ? "Save" : "Add"}
          style=" border px-3 py-2 rounded-3xl font-semibold text-2xl text-center "
          eventHandling={() => saveEditedText()}
        />

        {/* Mapping Logic */}
        <div className="  flex flex-col gap-5 text-center  ">
          {task.map((todo, index) => {
            return (
              <div
                className="border-2 flex flex-col  px-5 py-4 rounded-3xl shadow-gray-700  justify-between items-center gap-4"
                key={index}
              >
                <div className="flex gap-5 items-center justify-around">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    className=" h-5 w-5 "
                    onChange={() => toggleComplete(index)}
                  />
                  <h3
                    onClick={() => toggleComplete(index)}
                    className={` cursor-pointer  px-3 py-2 rounded-xl text-2xl  font-medium   ${todo.completed && "line-through  bg-green-600"}`}
                  >
                    {todo.text}
                  </h3>
                </div>
                <div className=" flex gap-2 justify-around items-center  ">
                  <Button
                    eventHandling={() => deleteItem(index)}
                    text={"Delete"}
                    style={
                      " bg-red-600 font-semibold border px-3 py-2 rounded-3xl mx-2 text-[15px]"
                    }
                  />

                  <Button
                    eventHandling={() => editAndAddTask(index)}
                    text={"Edit"}
                    style={
                      "font-semibold border px-3 py-2 rounded-3xl mx-2 text-[15px] bg-blue-600"
                    }
                  />
                </div>
                {todo.completed && (
                  <div className=" text-2xl font-bold text-green-600 bg-gray-300 px-5 py-2 rounded-3xl">
                    {" "}
                    <p>The Task is completed</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
