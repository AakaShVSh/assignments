import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addtodo } from "../refactor/action";

const TodoInput = () => {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();

  const handletaketodo = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const addTodoAction = addtodo(payload);
    dispatch(addTodoAction);
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
        type="text"
      />
      <button onClick={handletaketodo}>submit</button>
    </div>
  );
};
export { TodoInput };
