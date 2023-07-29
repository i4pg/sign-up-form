const passwordLabel = document.getElementById('password-label')
const passwordInput = document.getElementById("password");
const passwordInputConfirmation = document.getElementById(
  "password-confirmation"
);

function passwordConfirmationChecker() {
  if (passwordInput.validity.valid && passwordInputConfirmation.value) {
    return passwordInput.value === passwordInputConfirmation.value;
  }
}

function passowrdMatching() {
  if (!passwordConfirmationChecker) {
    msg = document.createElement('p')
    msg.textContent = "* Passwords do not match"
    msg.css.
  }
}

passwordInput.addEventListener("blur", passowrdMatching);
passwordInputConfirmation.addEventListener("blur", passowrdMatching);
