// Main

const passwordField = document.getElementById("pwd");
const copyToClipboardButton = document.getElementById("cpy");
const lengthSlider = document.getElementById("slider");
const lengthDisplay = document.getElementById("count");
const generateButton = document.getElementById("generate-btn");
const isUppercase = document.getElementById("uppercase");
const isLowercase = document.getElementById("lowercase");
const isNumbers = document.getElementById("numbers");
const isSpecial = document.getElementById("special");

// Copy to clipboard
copyToClipboardButton.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordField.value);
});

// update Range ui on slider change
lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});

// generate random password
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*";

generateButton.addEventListener("click", () => {
  var characters = "";
  var password = "";
  var length = lengthSlider.value;

  if (isUppercase.checked) {
    characters += uppercase;
  }
  if (isLowercase.checked) {
    characters += lowercase;
  }
  if (isNumbers.checked) {
    characters += numbers;
  }
  if (isSpecial.checked) {
    characters += special;
  }

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
  };

  for (let i = 0; i < length; i++) {
    let index = generateRandomNumber();
    password += characters.substring(index, index + 1);
  }

  passwordField.value = password;
});
