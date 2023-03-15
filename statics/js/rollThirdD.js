const diceList = document.getElementsByClassName('dice');
const rollBtnList = document.getElementsByClassName('roll');
const pendingPointsList = document.getElementsByTagName('p');
const stockPointsBtnList = document.getElementsByTagName('button');

let activePlayer = 0; 

const randomDice = (diceIndex) => {
    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random, diceIndex);
    }
    else {
        randomDice(diceIndex);
    }
}
const rollDice = (random, diceIndex) => {
    const dice = diceList[diceIndex];

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

        // Update the current score and pending points
        const currentScore = getCurrentScore();
        const pendingPoints = getCurrentPendingPoints();

        if (random === 1) {
            // The active player rolled a 1, switch to the other player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateCurrentScore(0);
            updatePendingPoints(0);
        } else {
            // Add the random number to the pending points
            const newPendingPoints = pendingPoints + random;
            updatePendingPoints(newPendingPoints);
        }
    }, 4050);
}
for(let i = 0; i < rollBtnList.length; i++) {
    rollBtnList[i].addEventListener('click', () => {
        if (activePlayer === i) {
            randomDice(i);
        }
    });
}