const getAllElement = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export default getAllElement;
