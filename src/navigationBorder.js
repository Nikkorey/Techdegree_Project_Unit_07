import get from "./getElement.js";

// Navigation Border Active
const navigation = get(".nav__sticky");
const navLink = navigation.getElementsByTagName("a");

for (let links of navLink) {
  links.addEventListener("click", (e) => {
    let navActive = get(".nav__active");
    navActive.className = navActive.className.replace("nav__active", "");
    e.currentTarget.className += "nav__active";
  });
}
