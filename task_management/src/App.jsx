import { useTodos } from "./hooks/useTodos";
import Button from "./Components/Button";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";

const App = () => {
  
  const {
    task,
    deleteItem,
    editAndAddTask,
    saveEditedText,
    toggleComplete,
    inputVal,
    setInputVal,
    editIndex,
  } = useTodos();

  return (
    <>
      <div className=" flex flex-col gap-5 w-full h-full items-center justify-around  ">
        <h1 className=" text-3xl font-bold mt-5 ">ToDo Application </h1>

        {/* Add  Button */}

        <TodoForm
          inputVal={inputVal}
          setInputVal={setInputVal}
          editIndex={editIndex}
          saveEditedText={saveEditedText}
        />

        {/* Mapping Logic */}
        <div className="  flex flex-col gap-5 text-center  ">
          <TodoList
            toggleComplete={toggleComplete}
            task={task}
            deleteItem={deleteItem}
            editAndAddTask={editAndAddTask}
          />
        </div>
      </div>
    </>
  );
};

export default App;
