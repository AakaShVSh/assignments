import { useState } from "react";

const Todoitem = ({ gettodo }) => {
  const [todo, setodo] = useState("");

  return (
    <div>
      <input
        
        onChange={(e) => {
          setodo(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          gettodo(todo);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
export { Todoitem };
