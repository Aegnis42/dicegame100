const dice = document.getElementsByClassName('dice')[0];
const rollBtn = document.getElementsByClassName('roll')[0];

const randomDice = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {

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

    }, 4050);le jeu es simple il y a 2 joueur 
    il recuper le resultat du des qui est lqncer dans un autre js
    le resultat du dé es ajouter a pending point 
    si le dé fait un pending point es remit a 0 et on passe au joueur suivant 
    si le joueur click sur stock point pending point et ajouter a stock point et on passe au joueur suivant
    le premier arriver a 100 stock point gagne la partit et gagne un point de score win

}

rollBtn.addEventListener('click', randomDice);