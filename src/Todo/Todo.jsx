import { useContext } from "react";
import ShowTask from "../ShowTask/ShowTask";
import { GlobalContext } from "../Global/GlobalData";

/* eslint-disable no-undef */
const Todo = () => {
  const { todos } = useContext(GlobalContext);
  return (
    <div>
      {todos.map((item) => (
        <ShowTask key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Todo;
