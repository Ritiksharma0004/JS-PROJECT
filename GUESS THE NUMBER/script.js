let random = parseInt(Math.random() * 100);
console.log(random);

const btn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const start = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

// if (isNaN(userInput)) {
//   alert('Please enter a valid number');
// } else

function validateGuess(guess) {
  // guess = parseInt(userInput.value)
  if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number lesser than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over ! and the number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessesSlot.innerHTML += `${guess}  `;
  numGuess++;
  if (remaining.innerHTML > 0) {
    remaining.innerHTML = `${11 - numGuess}`;
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  start.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100);
    prevGuess = [];
    numGuess = 1;
    guessesSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    remaining.innerHTML = `${11 - numGuess}`;
    start.removeChild(p);
    playGame = true;
  });
}
