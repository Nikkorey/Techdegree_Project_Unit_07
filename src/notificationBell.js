import get from "./getElement.js";
import getAll from "./getAllElement.js";

// Notification DropDown
const bell = get("#bell");
const notification = get(".notification");
const closeNotification = getAll(".notification__close");

// Notification Bell
bell.addEventListener("click", () => {
  notification.classList.toggle("hidden");
});

closeNotification.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.style.display = "none";
  });
});
