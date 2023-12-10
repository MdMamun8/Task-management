import { useContext, useState } from "react";
import ShowTask from "../ShowTask/ShowTask";
import { GlobalContext } from "../Global/GlobalData";

/* eslint-disable no-undef */
const Todo = () => {
  const { todos } = useContext(GlobalContext);
  const [editId, setEditId] = useState(null);
  return todos.length > 0 ? (
    <div className='todos'>
      {todos.map((item) => (
        <ShowTask key={item.id} item={item} edit={{ editId, setEditId }} />
      ))}
    </div>
  ) : (
    <h1 className='default-heading1'>No Task Added Yet</h1>
  );
};

export default Todo;
