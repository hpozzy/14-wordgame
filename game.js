import { commonWords } from "./constants.js"

//this fucntion gets all the words greater than 3 letters
let allowedWords = []
commonWords.map(function (i) {
  if (i.length >= [3]) {
    return allowedWords.push(i)
  }
})

let pressedKey = ""
//this function chooses a random word from the words greater than 3
const randomAllowedWord =
  allowedWords[Math.floor(Math.random() * allowedWords.length)]

//this function splits the words
const separatedWord = randomAllowedWord.split("")
console.log(separatedWord)

//this diplays the length of the word through div/boxes
let hiddenWords = []
for (let i = 0; i < randomAllowedWord.length; i++) {
  hiddenWords.push(`<div class='guessBox'></div>`)
}

document.getElementById("container").innerHTML = hiddenWords.join("")

let lives = 8
document.getElementById("lives").innerHTML = "Attempts Remaining: " + lives
document.getElementById("buttons").addEventListener("click", function (e) {
  console.log(e.target.innerText)
  if (separatedWord.includes(e.target.innerText)) {
    for (let i = 0; i < separatedWord.length; i++) {
      if (separatedWord[i] === e.target.innerText) {
        hiddenWords.splice(
          i,
          1,
          `<div class='guessBox'>${separatedWord[i]}</div>`
        )
      }
      document.getElementById("container").innerHTML = hiddenWords.join("")
      console.log(hiddenWords)
    }
  } else {
    pressedKey += e.target.innerText
    document.getElementById("keysPressed").innerHTML =
      "Letters used: " + pressedKey
    document.getElementById("lives").innerHTML =
      "Attempts Remaining: " + (lives -= 1)
  }
  if (lives == 0) {
    if (alert("You Lose")) {
    } else window.location.reload()
  }
  if (!hiddenWords.includes(`<div class='guessBox'></div>`)) {
    alert("YESSIRSKIII")
  }
})
