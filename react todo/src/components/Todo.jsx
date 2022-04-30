import { useState } from "react";
import { Todoitem } from "./TodoItems";
import "../styled/todolist.jsx";
import { StatusHandler } from "./statushandler";
import { DeleteTodo } from "./deletetodo";

const Todobox = () => {
  const [todobag, settodobag] = useState([]);
  console.log(todobag);

  const handletodos = (data) => {
    settodobag([...todobag, data]);
  };
  return (
    <div>
      <Todoitem gettodo={handletodos} />
      <div>
        {todobag.map((e, i) => (
          <div className="todo-ele">
            <input onClick={StatusHandler} type="checkbox" />
           {e}
            <button
              onClick={() => {
                var newtodo = DeleteTodo(todobag, e);
                settodobag(newtodo);
              }}
            >
              b
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Todobox };
