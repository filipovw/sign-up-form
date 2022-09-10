const form = document.querySelector("form");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const passwordError = document.querySelector(".error1");

let password1 = "";
let password2 = "";

passwordField.addEventListener("input", (event) => {
  password1 = form.password.value;
  checkValidity();
});

confirmPasswordField.addEventListener("input", (event) => {
  password2 = form.confirmPassword.value;
  checkValidity();
  checkIfSame();
});

form.addEventListener("submit", (event) => {
  if (checkIfBoth() == false) {
    event.preventDefault();
  }
});

function checkValidity() {
  if (passwordField.validity.valid) {
    passwordField.classList.remove("error");
    if (confirmPasswordField.validity.valid) {
      confirmPasswordField.classList.remove("error");
    } else {
      confirmPasswordField.classList.add("error");
    }
  } else {
    passwordField.classList.add("error");
    confirmPasswordField.classList.add("error");
  }
}

function checkIfSame() {
  if (password1 == password2) {
    passwordError.style.color = "white";
  } else {
    passwordError.style.color = "#900 !important";
  }
}

function checkIfBoth() {
  if (
    passwordField.validity.valid &&
    confirmPasswordField.validity.valid &&
    passwordError.style.color == "white"
  ) {
    return true;
  } else {
    return false;
  }
}
