// Message User Variable
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// Save & Cancel Settings Variable
const saveSettings = document.getElementById("save");
const cancelSettings = document.getElementById("cancel");

// Alert Variables
const alert = document.getElementById("alert");
const alertMessage = alert.querySelector("p");
const closeAlert = document.getElementById("closeHello");

closeAlert.addEventListener("click", (e) => {
  e.preventDefault();
  alert.parentNode.style.display = "none";
});

// Updating Alert Message
const alertHTML = (type, message, color) => {
  alertMessage.innerHTML = `<strong>${type}:</strong> ${message}`;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  alert.parentNode.style.display = "block";
  alert.style.backgroundColor = `${color}`;
};

// Form Submission
send.addEventListener("click", (e) => {
  e.preventDefault();
  let users = document.getElementById("searchUsers");
  let usersNames = users.querySelectorAll("li");
  for (let i = 0; i < usersNames.length; i++) {
    if (user.value === "" && message.value === "") {
      alertHTML(
        "Error",
        "Please fill out user and message fields before sending.",
        "tomato"
      );
      alertStyle("tomato  ");
    } else if (user.value === "") {
      alertHTML(
        "Error",
        "Please fill out user field before sending.",
        "tomato"
      );
    } else if (message.value == "") {
      alertHTML(
        "Error",
        "Please fill out message field before sending.",
        "tomato"
      );
    } else if (user.value !== usersNames[1].innerText) {
      alertHTML(
        "Error",
        "Message unsuccessfully sent, there is no such member that matches your user search.",
        "tomato"
      );
    } else {
      alertHTML("Success", "Message sent successfully.", "#81c98f");
    }
  }
});

window.addEventListener("load", () => {
  setProfile.checked = localStorage.getItem("setProfile") === "true";
  setEmail.checked = localStorage.getItem("setEmail") === "true";
  timezone.value = localStorage.getItem("timeZoneItem");
});

// Notification DropDown
const bell = document.getElementById("bell");
const notification = document.querySelector(".notification");
const closeNotification = document.querySelectorAll(".notification__close");

closeNotification.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.style.display = "none";
  });
});

// Notification Bell
bell.addEventListener("click", () => {
  notification.classList.toggle("hidden");
});

// Search Users Names
const inputUsers = document.getElementById("userField");

inputUsers.addEventListener("keyup", () => {
  let filter, userNames, userNameList, textValue, namesContent;
  filter = inputUsers.value.toUpperCase();
  userNames = document.getElementById("searchUsers");
  userNameList = userNames.getElementsByTagName("li");
  userNames.style.display = "block";
  for (let i = 0; i < userNameList.length; i++) {
    textValue = userNameList[i].textContent;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      userNameList[i].style.display = "";
    } else {
      userNameList[i].style.display = "none";
    }
    namesContent = userNameList[i];
    namesContent.addEventListener("click", () => {
      inputUsers.value = userNameList[i].textContent;
      userNames.style.display = "none";
    });
  }
});

// Navigation Border Active
const navigation = document.querySelector(".nav__sticky");
const navigationItem = navigation.getElementsByTagName("a");
for (let i = 0; i < navigationItem.length; i++) {
  navigationItem[i].addEventListener("click", () => {
    var current = document.getElementsByClassName("nav__border");
    current[0].className = current[0].className.replace("nav__border", "");
    navigationItem[i].className = "nav__border";
  });
}
