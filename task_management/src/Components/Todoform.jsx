import React from "react";
import Button  from "./Button"; 

const TodoForm = ({ inputVal, setInputVal, editIndex, saveEditedText }) => {
  return (
    <>
      <input
        className=" border px-6 py-2 font-bold text-xl  "
        placeholder="Add The Task..........."
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />

      <Button
        text={editIndex !== null ? "Save" : "Add"}
        style=" border px-3 py-2 rounded-3xl font-semibold text-2xl text-center "
        eventHandling={() => saveEditedText()}
      />
    </>
  );
};

export default TodoForm;
