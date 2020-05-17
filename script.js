var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var uppercaseElement = document.getElementById('uppercase')
var lowercaseElement = document.getElementById('lowercase')
var numbersElement = document.getElementById('numbers')
var symbolsElement = document.getElementById('symbols')
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.getElementById('passwordDisplay')

// Character Codes
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Event Listeners to sync slider and number box. Function is at the bottom
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

generateBtn.addEventListener('click', e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var uppercase = uppercaseElement.checked
  var numbers = numbersElement.checked
  var symbols = symbolsElement.checked
  var password = generatePassword(characterAmount, uppercase, numbers, symbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, uppercase, numbers, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  // variable that stores our password in an empty array
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

// function array that picks the characters and generates our password
function arrayFromLowToHigh (low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Syncs length slider and input number box
function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}