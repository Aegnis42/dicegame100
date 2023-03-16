const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const startBtn = document.querySelector('#startBtn');
const container = document.querySelector('.container');
const currentPlayer = document.querySelector('#currentPlayer');
const playerOneName = document.querySelector('#playerOneName');
const playerTwoName = document.querySelector('#playerTwoName');
const pendingPointsOne = document.querySelector('#pendingPointsOne');
const stockPointsBtnOne = document.querySelector('#stockPointsBtnOne');
const currentScoreOne = document.querySelector('#currentScoreOne');
const pendingPointsTwo = document.querySelector('#pendingPointsTwo');
const stockPointsBtnTwo = document.querySelector('#stockPointsBtnTwo');
const currentScoreTwo = document.querySelector('#currentScoreTwo');
const scoreWinPlayerOne = document.querySelector('#scoreWinPlayerOne');
const scoreWinPlayerTwo = document.querySelector('#scoreWinPlayerTwo');

const playerNames = [playerOneName, playerTwoName];

let currentPlayerIndex = 0;
let currentPendingPoints = 0;
let currentScore = [0, 0];
let wins = [0, 0];

const updatePendingPoint = () => {
  const pendingPoints = currentPlayerIndex === 0 ? pendingPointsOne : pendingPointsTwo;
  pendingPoints.textContent = currentPendingPoints;
};

const switchPlayer = () => {
    currentPendingPoints = 0;
    updatePendingPoint();
    currentScore[currentPlayerIndex] += currentPendingPoints;
    currentPendingPoints = 0;
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    if (`${playerNames[currentPlayerIndex].value}` === "") {
        currentPlayer.textContent = ``;
    }else{
        currentPlayer.textContent = `${playerNames[currentPlayerIndex].value}'s turn`;
    }
    currentScoreOne.textContent = currentScore[0];
    currentScoreTwo.textContent = currentScore[1];
    if (currentScore[(currentPlayerIndex + 1) % 2] >= 100) {
      wins[(currentPlayerIndex + 1) % 2]++;
      const scoreWinEl = (currentPlayerIndex + 1) % 2 === 0 ? scoreWinPlayerOne : scoreWinPlayerTwo;
      scoreWinEl.textContent = wins[(currentPlayerIndex + 1) % 2];
      currentScoreEl = currentPlayerIndex === 0 ? currentScoreOne : currentScoreTwo;
      currentScoreEl.textContent = currentScore[currentPlayerIndex];

      resetGame();
    }
  };

function resetGame() {
    currentPendingPoints = 0;
    updatePendingPoint();
    currentScore = [0, 0];
    currentPlayerIndex = 0;
    if (`${playerNames[currentPlayerIndex].value}` === "") {
        currentPlayer.textContent = ``;
    }else{
        currentPlayer.textContent = `${playerNames[currentPlayerIndex].value}'s turn`;
    }
    
    currentScoreOne.textContent = currentScore[0];
    currentScoreTwo.textContent = currentScore[1];
}


const rollDice = () => {
  const random = Math.floor(Math.random() * 6) + 1;

  dice.style.animation = 'rolling 2s';

  setTimeout(() => {

      switch (random) {
          case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                switchPlayer();
              break;

          case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                currentPendingPoints += random;
                updatePendingPoint();
              break;

          case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                currentPendingPoints += random;
                updatePendingPoint();
              break;

          case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                currentPendingPoints += random;
                updatePendingPoint();
              break;

          case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                currentPendingPoints += random;
                updatePendingPoint();
              break;

          case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                currentPendingPoints += random;
                updatePendingPoint();
              break;

          default:
              break;
      }

      dice.style.animation = 'none';
    
}, 2050);
};

const updatePendingPoints = () => {
const pendingPoints = currentPlayerIndex === 0 ? pendingPointsOne : pendingPointsTwo;
pendingPoints.textContent = currentPendingPoints;
};

const holdPoints = () => {
currentScore[currentPlayerIndex] += currentPendingPoints;
const currentScoreEl = currentPlayerIndex === 0 ? currentScoreOne : currentScoreTwo;
currentScoreEl.textContent = currentScore[currentPlayerIndex];
switchPlayer();
};

rollBtn.addEventListener('click', rollDice);
startBtn.addEventListener('click', resetGame);
stockPointsBtnOne.addEventListener('click', holdPoints);
stockPointsBtnTwo.addEventListener('click', holdPoints);