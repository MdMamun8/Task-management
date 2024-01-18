import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";
import "./FormData.css";

import "react-toastify/dist/ReactToastify.css";
import { RiAddCircleFill } from "react-icons/ri";
import Swal from "sweetalert2";
const FormData = () => {
  // dispatch
  const { dispatch, todos } = useContext(GlobalContext);
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.trim().length > 0) {
      const tasks = {
        id: Date.now(),
        data,
        isComplete: false,
      };
      dispatch({ type: "ADD_TODO", payload: tasks });
      setData("");
    } else
      Swal.fire({
        icon: "error",
        title: "Please Add Task",
        text: "Okay?",
      });
  };
  const completedTasks = () => {
    
  };
  return (
    <div className='container'>
      <div>
        <h1>
          <span>Task Management</span> Application
        </h1>
        {todos.length ? (
          <h2>Your Total Task {todos.length}</h2>
        ) : (
          <h2>no task</h2>
        )}
      </div>
      <div className='add-form'>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor='todo'>Your Task : </label>
            <input
              onChange={(e) => setData(e.target.value)}
              value={data}
              type='text'
              id='todo'
              maxLength={25}
              placeholder='Add your task'
            />
            <div className='input-button-add'>
              <button className='add-button'>
                <i>
                  <RiAddCircleFill />
                </i>{" "}
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
