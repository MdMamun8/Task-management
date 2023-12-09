/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";

const ShowTask = ({ item, edit: { editId, setEditId } }) => {
  const { dispatch } = useContext(GlobalContext);
  const [updateTask, setUpdateTask] = useState(item.data);
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const updateTodo = (id) => {
    if (updateTask.trim().length > 0) {
      setEditId(null);
      dispatch({ type: "UPDATE_TASK", payload: { id, data: updateTask } });
    } else alert("write something");
  };
  return (
    <div>
      {editId === item.id ? (
        <input
          onChange={(e) => setUpdateTask(e.target.value)}
          type='text'
          placeholder='update YOur Task'
          value={updateTask}
        />
      ) : (
        <h2>{item.data}</h2>
      )}
      <button onClick={() => deleteTask(item.id)}>delete</button>
      {editId === item.id ? (
        <button onClick={() => updateTodo(item.id)}>Save</button>
      ) : (
        <button onClick={() => setEditId(item.id)}>Edit</button>
      )}
    </div>
  );
};

export default ShowTask;
