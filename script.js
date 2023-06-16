'use strict';

let attemptsCount = 10;
let userAnswer;
let ckeckAnswer;
let isStarted = Boolean(confirm('Загадывание случайного числа от 1 до 100'));

const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const playGame = function (randomNumber, attempt) {
  return function (userNumber) {
    attempt--;

    if (userNumber > randomNumber) {
      alert(`Загаданное число меньше, осталось попыток ${attempt}`);
    }
    if (userNumber < randomNumber) {
      alert(`Загаданное число больше, осталось попыток ${attempt}`);
    }
    if (userNumber === randomNumber) {
      isStarted = Boolean(confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'));

      if (isStarted) {
        ckeckAnswer = playGame(getRandomNumber(100), attemptsCount);
      }
    }
    if (attempt === 0) {
      isStarted = Boolean(confirm('Попытки закончились, хотите сыграть еще?'));

      if (isStarted) {
        ckeckAnswer = playGame(getRandomNumber(100), attemptsCount);
      }
    }
    askQuestion(isStarted);
  }
};

const askQuestion = function (isStarted) {
  if (isStarted) {
    userAnswer = prompt('Угадай число от 1 до 100');

    if (userAnswer === null) {
      isStarted = false;
      askQuestion(isStarted);
    }
    if (!isNumber(userAnswer)) {
      alert('Введите число!');
      isStarted = true;
      askQuestion(isStarted);
    } else {
      userAnswer = Number(userAnswer);
      ckeckAnswer(userAnswer);
    }
  } else {
    alert('Игра окончена');
  }
}

ckeckAnswer = playGame(getRandomNumber(100), attemptsCount);
askQuestion(isStarted);
