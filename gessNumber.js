function gessNumber() {
  var randomNum = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  };

  var choosenNum = randomNum(1, 10);
  console.log(choosenNum);
  var number = prompt('Введите число от 1 до 10,');

  if (+number === choosenNum) {
    alert('Вы просто мастер Йода - угадали!');
  } else {
    do {
      if (number === null) {
        alert('Ну и ладно...');
        return number;
        break;
      } else if (number < 1 || number > 10 || isNaN(number)) {
        alert('Не число от 1 до 10');
        number = prompt('Введите число от 1 до 10,');
      } else if (number < choosenNum) {
        alert('Ваше число меньше');
        number = prompt('Введите число от 1 до 10,');
      } else if (number > choosenNum) {
        alert('Ваше число больше');
        number = prompt('Введите число от 1 до 10,');
      }


    } while ((+number !== choosenNum));

    if (+number === choosenNum) {
      alert('КрасавчеГ ! Загаданное число было: ' + choosenNum);
    }
  }
}

var result = gessNumber();

var replay;
if (result !== null) {
  while (replay = confirm('Сыграем еще?')) {
    gessNumber();
  }
}