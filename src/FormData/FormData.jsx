import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";
import "./FormData.css";
const FormData = () => {
  const { dispatch } = useContext(GlobalContext);
  const [data, setData] = useState("");
  const dateInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim().length > 0) {
      const tasks = {
        id: Date.now(),
        data,
        date: dateInputRef.current.value,
        isComplete: false,
      };
      dispatch({ type: "ADD_TODO", payload: tasks });
      setData("");
    } else alert("please input something");
  };
  return (
    <div className='container'>
      <div>
        <h1>
          <span>Task Management</span> Application
        </h1>
      </div>
      <div className='add-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='todo'></label>
            <input
              onChange={(e) => setData(e.target.value)}
              value={data}
              type='text'
              name=''
              id='todo'
              maxLength={25}
            />
            <input type='date' required ref={dateInputRef} />
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
