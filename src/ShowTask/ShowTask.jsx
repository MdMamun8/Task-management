/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../Global/GlobalData";

const ShowTask = ({ item}) => {
  const { dispatch } = useContext(GlobalContext);
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const updateTodo = (id) =>{
    dispatch({type : "UPDATE_TASK",  payload : id})
  }
  return (
    <div>
      <h2>{item.data}</h2>
      <button onClick={() => deleteTask(item.id)}>delete</button>
      <button onClick={() =>updateTodo(item.id)}>Update</button>
    </div>
  );
};

export default ShowTask;
