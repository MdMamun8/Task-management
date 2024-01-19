import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

export const InitialState = {
  todos: getDataFromLocalStorage(),
};
