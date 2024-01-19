/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./../reducer";
import { InitialState } from "./../InitialState/InitialState";

export const GlobalContext = createContext();

function GlobalData({ children }) {
  const [state, dispatch, ] = useReducer(reducer, InitialState);

  const values = {
    todos: state.todos,
    dispatch,
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}
export default GlobalData;
