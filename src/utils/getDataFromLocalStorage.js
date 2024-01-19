export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};
