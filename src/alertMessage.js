import get from "./getElement.js";

// Alert Variables
const alert = get("#alert");
const alertMessage = alert.querySelector("p");
const closeAlert = get("#closeHello");

// Updating Alert Message
export const alertHTML = (type, message, color) => {
  alertMessage.innerHTML = `<strong>${type}:</strong> ${message}`;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  alert.parentNode.style.display = "block";
  alert.style.backgroundColor = `${color}`;
};

closeAlert.addEventListener("click", (e) => {
  e.preventDefault();
  alert.parentNode.style.display = "none";
});

export default alertHTML;
