function getCompChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomNo = Math.floor(Math.random() * 3);
    return choices[randomNo];
}

let humanScore = 0;
let compScore = 0;
let round = 0;

const score = document.querySelector('.score');
const comment = document.querySelector('.comment');
const resultBox = document.querySelector('.result');

function playRound(humanChoice, compChoice) {
    score.firstChild.textContent = `Computer chose: ${compChoice}  `;
    score.lastChild.textContent = `  Human chose: ${humanChoice}`;

    if (compChoice === humanChoice) {
        comment.textContent = "A wonderful draw!";
    } else if (
        (humanChoice === 'rock' && compChoice === 'scissor') ||
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice === 'scissor' && compChoice === 'paper')
    ) {
        comment.textContent = "You won! Inching closer to the crown, prince!";
        humanScore++;
    } else {
        comment.textContent = "You lose, peasant!";
        compScore++;
    }

    resultBox.textContent = `Human score: ${humanScore}   Computer score: ${compScore}\nRound: ${round}`;
}

function playGame(humanChoice) {
    const compChoice = getCompChoice();
    round++;
    playRound(humanChoice, compChoice);

    if (round === reqRounds) {
        if (compScore > humanScore) {
            comment.innerHTML = "You Lost!As expected of the lowly peasant you are! MmuuHAHAHAHA!!!";
        } else if (humanScore > compScore) {
            comment.innerHTML = "You Won!<br>Never doubted you, my King! Here is your crown👑. Please have it and lead us to paradise.";
        } else {
            comment.innerHTML = "A draw! As expected of the battle between two legendary warriors!";
        }
    }
}

let reqRounds = 5;
const container = document.querySelector('.container');
const paperbtn = document.querySelector('#paperbtn');
const rockbtn = document.querySelector('#rockbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');

container.addEventListener('click', (e) => {
if (round<reqRounds) {
        if (e.target === paperbtn) {
            playGame('paper');
        } else if (e.target === rockbtn) {
            playGame('rock');
        } else if (e.target === scissorsbtn) {
            playGame('scissor');
        }
}
});
