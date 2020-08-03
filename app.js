import "./src/formValidation.js";
import "./src/notificationBell.js";
import "./src/localStorage.js";
import "./src/navigationBorder.js";
import "./src/chart.js";
import "./src/chartUpdate.js";

window.addEventListener("DOMContentLoaded", () => {
  setProfile.checked = localStorage.getItem("setProfile") === "true";
  setEmail.checked = localStorage.getItem("setEmail") === "true";
  timezone.value = localStorage.getItem("timeZoneItem") || "";
});
