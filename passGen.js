const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordField = document.getElementById("password-1");
let passwordField2 = document.getElementById("password-2");

function generatePassword() {
  let password = "";
  for (let i = 0; i < 16; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
    passwordField.textContent = password;
  }
  let password2 = "";
  for (let i = 0; i < 16; i++) {
    let index2 = Math.floor(Math.random() * characters.length);
    password2 += characters[index2];
    passwordField2.textContent = password2;
  }
}

function copy(params) {
  let copyText = document.getElementById("password-1");
  navigator.clipboard
    .writeText(copyText.textContent)
    .then((result) => {
      alert("Copied!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
