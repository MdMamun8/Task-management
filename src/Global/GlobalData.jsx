/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { reducer } from "./../reducer";
import { InitialState } from "./../InitialState/InitialState";

export const GlobalContext = createContext();

function GlobalData({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const values = {
    todos: state.todos,
    dispatch,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}
export default GlobalData;
