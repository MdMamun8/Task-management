/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";

const ShowTask = ({
  item,
  edit: { editId, setEditId },
}) => {
  const { dispatch } = useContext(GlobalContext);
  const [updateTask, setUpdateTask] = useState(item.data);
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const updateTodo = (id) => {
    if (updateTask.trim().length > 0) {
      dispatch({ type: "UPDATE_TASK", payload: { id, data: updateTask } });
      setEditId(null);
    } else alert("write something");
  };
  const completeTask = (id) => {

    dispatch({ type: "COMPLETE__TASK", payload: id });
  };
  return (
    <div>
      {/* complete */}
      {item.isComplete ? (
        <h2>
          <del>{item.data + item.date + " ✔"}</del>
        </h2>
      ) : (
        <h2>{item.data + item.date}</h2>
      )}

      {editId === item.id ? (
        <input
          onChange={(e) => setUpdateTask(e.target.value)}
          type='text'
          placeholder='update YOur Task'
          value={updateTask}
        />
      ) : (
        <div>
          <button onClick={() => completeTask(item.id)}>Completed</button>
        </div>
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
