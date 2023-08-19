(() => {
  "use strict";

  // VARIABLES
  const input = document.querySelector("input");
  const emailAddress = document.querySelector("input").value;
  const validEmailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const button = document.querySelector("button");
  const root = document.querySelector(":root");
  const colorStyles = window.getComputedStyle(root);
  const errorColor = colorStyles.getPropertyValue("--error-color");

  // FUNCTIONS
  const errorMessage = (event) => {
    if (!emailAddress.match(validEmailFormat) || emailAddress === "") {
      event.preventDefault();
      input.style.color = errorColor;
    }
  };
  // EVENT LISTENER
  button.addEventListener("click", errorMessage);
})();
