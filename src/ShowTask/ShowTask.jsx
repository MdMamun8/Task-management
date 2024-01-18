/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";
import { LiaEditSolid } from "react-icons/lia";
const ShowTask = ({ item, edit: { editId, setEditId } }) => {
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
    <div className='tasks'>
      {/* complete */}
      <div className='all-output'>
        {item.isComplete ? (
          <h2>
            {/* */}
            <del>
              <span>
                {" "}
                {" ✔ "} {item.data}
              </span>{" "}
            </del>
          </h2>
        ) : (
          <h2>
            {" "}
            <span>
              <span className='single-task'>Task :</span> {item.data}
            </span>
          </h2>
        )}
      </div>
      <div className='all-button'>
        {editId === item.id ? (
          <input
            onChange={(e) => setUpdateTask(e.target.value)}
            type='text'
            placeholder='update YOur Task'
            value={updateTask}
            maxLength={25}
          />
        ) : (
          <div className='complete-button'>
            <button onClick={() => completeTask(item.id)}>
              <i>
                <AiOutlineFileDone />
              </i>
            </button>
          </div>
        )}
        <button className='delete-button' onClick={() => deleteTask(item.id)}>
          <i>
            <FaDeleteLeft />
          </i>
        </button>
        {editId === item.id ? (
          <button onClick={() => updateTodo(item.id)}>Save</button>
        ) : (
          <button className='edit-button' onClick={() => setEditId(item.id)}>
            <i>
              <LiaEditSolid />
            </i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowTask;
