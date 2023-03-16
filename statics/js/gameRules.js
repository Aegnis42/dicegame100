// Définition des variables globales
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOnePendingPoints = 0;
let playerTwoPendingPoints = 0;
let currentPlayer = 1;

// Fonction pour lancer le dé
function rollDice() {
  // Simulation d'un dé lancé en générant une valeur aléatoire après 4 secondes
  setTimeout(function() {
    let random = Math.floor(Math.random() * 6) + 1; // Génère un nombre aléatoire entre 1 et 6
    // Met à jour l'affichage du dé
    let dice = document.querySelector('.dice');
    dice.className = 'dice';
    dice.classList.add('show-' + random);
    // Ajoute le résultat du dé au score en attente du joueur actuel
    if (currentPlayer === 1) {
      playerOnePendingPoints += random;
      document.querySelector('#pendingPointsOne').textContent = playerOnePendingPoints;
    } else {
      playerTwoPendingPoints += random;
      document.querySelector('#pendingPointsTwo').textContent = playerTwoPendingPoints;
    }
    // Vérifie si le joueur a gagné
    checkWin();
    // Passe au joueur suivant
    togglePlayer();
  }, 4000);
}

// Fonction pour stocker les points en attente dans le score total
function stockPoints() {
  if (currentPlayer === 1) {
    playerOneScore += playerOnePendingPoints;
    document.querySelector('#currentScoreOne').textContent = playerOneScore;
    playerOnePendingPoints = 0;
    document.querySelector('#pendingPointsOne').textContent = 0;
  } else {
    playerTwoScore += playerTwoPendingPoints;
    document.querySelector('#currentScoreTwo').textContent = playerTwoScore;
    playerTwoPendingPoints = 0;
    document.querySelector('#pendingPointsTwo').textContent = 0;
  }
  // Vérifie si le joueur a gagné
  checkWin();
  // Passe au joueur suivant
  togglePlayer();
}

// Fonction pour vérifier si un joueur a gagné
function checkWin() {
  if (playerOneScore >= 100) {
    document.querySelector('#scoreWinPlayerOne').textContent++;
    resetGame();
    alert('Player 1 wins!');
  } else if (playerTwoScore >= 100) {
    document.querySelector('#scoreWinPlayerTwo').textContent++;
    resetGame();
    alert('Player 2 wins!');
  }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOnePendingPoints = 0;
  playerTwoPendingPoints = 0;
  document.querySelector('#currentScoreOne').textContent = 0;
  document.querySelector('#currentScoreTwo').textContent = 0;
  document.querySelector('#pendingPointsOne').textContent = 0;
  document.querySelector('#pendingPointsTwo').textContent = 0;
  togglePlayer();
}

// Fonction pour passer au joueur suivant
function togglePlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
    document.querySelector('#currentPlayer').textContent = "Player 2's turn";
  } else {
    currentPlayer = 1;
    document.querySelector('#currentPlayer').textContent = "Player 1's turn";
  }
}

// Ajoute des écouteurs d'événements pour les boutons "Roll Dice" et "Stock Points"
document.querySelector('#rollBtn').addEventListener('click', rollDice);
document.querySelector('#stockPointsBtnOne').addEventListener('click', stockPoints);
document.querySelector('#stockPointsBtnTwo').addEventListener('click', stockPoints);