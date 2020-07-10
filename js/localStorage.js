// Local Storage Function
saveSettings.addEventListener("click", () => {
  let setProfile = document.getElementById("setProfile");
  let setEmail = document.getElementById("setEmail");
  let timeZone = document.getElementById("timezone");
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

cancelSettings.addEventListener("click", () => {
  if (setProfile.checked) {
    setProfile.checked = false;
  }
  if (setEmail.checked) {
    setEmail.checked = false;
  }
});
