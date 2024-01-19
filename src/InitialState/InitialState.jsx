import { getDataFromLocalStorage } from "../utilis/getDataFromLocalStorage";

export const InitialState = {
  todos: getDataFromLocalStorage(),
};
