export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("task");
  return data ? JSON.parse(data) : [];
};
