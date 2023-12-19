import readlineSync from 'readline-sync';
function getRandomChoice() {
  const choices = ['Камень', 'Ножницы', 'Бумага'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Ничья!';
  } else if (
    (playerChoice === 'Камень' && computerChoice === 'Ножницы') ||
    (playerChoice === 'Ножницы' && computerChoice === 'Бумага') ||
    (playerChoice === 'Бумага' && computerChoice === 'Камень')
  ) {
    return 'Вы выиграли!';
  } else {
    return 'Вы проиграли!';
  }
}

function playGame() {
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
  console.log('Введите ваш выбор: Камень, Ножницы или Бумага');
  
  const playerChoice = readlineSync.question('> ');
  const computerChoice = getRandomChoice();
  
  console.log(`Вы выбрали: ${playerChoice}`);
  console.log(`Компьютер выбрал: ${computerChoice}`);
  
  const result = determineWinner(playerChoice, computerChoice);
  console.log(result);
}

playGame();