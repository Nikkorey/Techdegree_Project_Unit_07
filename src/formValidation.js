import get from "./getElement.js";
import getAll from "./getAllElement.js";
import { alertHTML } from "./alertMessage.js";

// Get Element
const user = get("#userField");
const message = get("#messageField");
const send = get("#send");
let usersNames = getAll(".user__items");
const inputUserNames = get("#userField");

// Form Submission
send.addEventListener("click", (e) => {
  e.preventDefault();
  if (user.value === "" && message.value === "") {
    alertHTML(
      "Error",
      "Please fill out user and message fields before sending.",
      "tomato"
    );
  } else if (user.value === "") {
    alertHTML("Error", "Please fill out user field before sending.", "tomato");
  } else if (message.value == "") {
    alertHTML(
      "Error",
      "Please fill out message field before sending.",
      "tomato"
    );
  } else if (
    user.value !== usersNames[0].innerText &&
    user.value !== usersNames[1].innerText &&
    user.value !== usersNames[2].innerText &&
    user.value !== usersNames[3].innerText
  ) {
    alertHTML(
      "Error",
      "Message unsuccessfully sent, there is no such member that matches your user search.",
      "tomato"
    );
  } else {
    alertHTML(
      "Success",
      `Message sent successfully to ${user.value}`,
      "#81c98f"
    );
  }
});

// Search Users Names
inputUserNames.addEventListener("keyup", () => {
  let filter, userNames, userNameList, textValue, namesContent;
  filter = inputUserNames.value.toUpperCase();
  userNames = get("#searchUsers");
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
      inputUserNames.value = userNameList[i].textContent;
      userNames.style.display = "none";
    });
  }
});
