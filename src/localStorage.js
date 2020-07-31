import get from "./getElement.js";
import alertHTML from "./alertMessage.js";

// Save & Cancel Settings Variable
const saveSettings = get("#save");
const cancelSettings = get("#cancel");

// Local Storage Save Settings
saveSettings.addEventListener("click", () => {
  let setProfile = get("#setProfile");
  let setEmail = get("#setEmail");
  let timeZone = get("#timezone");
  if (setProfile.checked === true) {
    localStorage.setItem("setProfile", "true");
  } else {
    localStorage.setItem("setProfile", "false");
  }
  if (setEmail.checked === true) {
    localStorage.setItem("setEmail", "true");
  } else {
    localStorage.setItem("setEmail", "false");
  }
  if (
    timeZone.value === "Eastern" ||
    timeZone.value === "Central" ||
    timeZone.value === "Pacific"
  ) {
    localStorage.setItem("timeZoneItem", `${timeZone.value}`);
  } else {
    localStorage.setItem("timeZoneItem", `${timeZone.value}`);
  }
  alertHTML("Success", "Settings saved successfully.", "#81c98f");
});

// Local Storage Cancel Settings
cancelSettings.addEventListener("click", () => {
  if (setProfile.checked) {
    setProfile.checked = false;
  }
  if (setEmail.checked) {
    setEmail.checked = false;
  }
});
