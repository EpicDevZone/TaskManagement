import React from "react";
import Button from "./Button";

const TodoItem = ({
  index,
  toggleComplete,
  todo,
  deleteItem,
  editAndAddTask,
}) => {
  return (
    <>
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
    </>
  );
};

export default TodoItem;
