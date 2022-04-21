import { useState } from "react";

const TodoInput = ({ getdata }) => {
  const [todo, settodo] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          settodo(e.target.value);
        }}
        type="text"
        style={{ fontSize: "20px" }}
      />
      <button
        onClick={() => {
           getdata(todo);
        }}
      >
        +
      </button>
    </div>
  );
};

export {TodoInput}