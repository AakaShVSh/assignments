import { useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo)

  return (
    <div>
      {todos.map((item) => (
          <div>{item.id}.{item.title}</div>
      ))}
    </div>
  );
};
export {TodoList}



