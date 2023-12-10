import { useContext, useState } from "react";
import ShowTask from "../ShowTask/ShowTask";
import { GlobalContext } from "../Global/GlobalData";

/* eslint-disable no-undef */
const Todo = () => {
  const { todos } = useContext(GlobalContext);
  const [editId, setEditId] = useState(null);
  console.log(todos)
  return (
    <div>
      {todos.map((item) => (
        <ShowTask
          key={item.id}
          item={item}
          edit={{ editId, setEditId }}
        />
      ))}
    </div>
  );
};

export default Todo;
