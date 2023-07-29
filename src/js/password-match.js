const passwordInput = document.getElementById("password");
const passwordInputConfirmation = document.getElementById(
  "password-confirmation"
);
const passwordMsg = document.getElementById("password-msg");

function passowrdMatching() {
  if (isPasswordsEmpty()) {
    passwordConfirmationChecker() ? toggleValidState() : toggleInvalidState();
  }
}

function isPasswordsEmpty() {
  return passwordInput.validity.valid && passwordInputConfirmation.value !== "";
}

function passwordConfirmationChecker() {
  if (isPasswordsEmpty()) {
    return passwordInput.value === passwordInputConfirmation.value;
  }
  return true;
}

function toggleInvalidState() {
  passwordMsg.style.display = "block";
  passwordInput.style.border = "red 1px solid";
  passwordInputConfirmation.style.border = "red 1px solid";
}

function toggleValidState() {
  passwordMsg.style.display = "none";
  passwordInput.style.border = "green 1px solid";
  passwordInputConfirmation.style.border = "green 1px solid";
}


passwordInput.addEventListener("blur", passowrdMatching);
passwordInputConfirmation.addEventListener("blur", passowrdMatching);
