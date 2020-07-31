import get from "./getElement.js";

// Navigation Border Active
const navigation = get(".nav__sticky");
const navigationItem = navigation.getElementsByTagName("a");
for (let i = 0; i < navigationItem.length; i++) {
  navigationItem[i].addEventListener("click", () => {
    var current = document.getElementsByClassName("nav__border");
    current[0].className = current[0].className.replace("nav__border", "");
    navigationItem[i].className = "nav__border";
  });
}
