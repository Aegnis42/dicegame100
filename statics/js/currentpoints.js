const currentScoreOne = document.getElementById('currentScoreOne');
const currentScoreTwo = document.getElementById('currentScoreTwo');
const pendingPointsOne = document.getElementById('pendingPointsOne');
const pendingPointsTwo = document.getElementById('pendingPointsTwo');

let currentPlayer = 1;

function updateCurrentScore(score) {
  if (currentPlayer === 1) {
    currentScoreOne.textContent = score;
  } else {
    currentScoreTwo.textContent = score;
  }
}

function getCurrentScore() {
  if (currentPlayer === 1) {
    return parseInt(currentScoreOne.textContent);
  } else {
    return parseInt(currentScoreTwo.textContent);
  }
}

function updatePendingPoints(points) {
  if (currentPlayer === 1) {
    pendingPointsOne.textContent = points;
  } else {
    pendingPointsTwo.textContent = points;
  }
}

function getCurrentPendingPoints() {
  if (currentPlayer === 1) {
    return parseInt(pendingPointsOne.textContent);
  } else {
    return parseInt(pendingPointsTwo.textContent);
  }
}
