import { useState } from "react";
import { TodoInput } from "./todoinput";

const Todo = () => {
  const [todoinput, setinput] = useState([""]);

  const handletake = (gettodo) => {
    setinput([...todoinput, gettodo]);
  };

  return (
    <div>
      <h1>Write your Todo</h1>
      {todoinput.map((e) => (
        <div>
          {" "}
          <h4 id = "todos">{e}</h4>
        </div>
      ))}
      <TodoInput getdata={handletake} />
    </div>
  );
};

export { Todo };
