import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalData";

const FormData = () => {
  const { dispatch } = useContext(GlobalContext);
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim().length > 0) {
      const tasks = {
        id: Date.now(),
        data,
      };
      dispatch({ type: "ADD_TODO", payload: tasks });
      setData("");
    } else alert("please input something");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'></label>
        <input
          onChange={(e) => setData(e.target.value)}
          value={data}
          type='text'
          name=''
          id='todo'
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default FormData;
