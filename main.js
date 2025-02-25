function getCompChoice(){
    let compChoice;
    let randomNo = Math.floor(Math.random()*3+1);
    if(randomNo==1){
        compChoice='rock';
    }
    else if(randomNo==2){
        compChoice='paper';
    }
    else{
        compChoice='scissor';
    }
    return compChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter (rock/paper/scissor)");
    if(humanChoice.toLowerCase()=='rock'||humanChoice.toLowerCase()=='paper'||humanChoice.toLowerCase()=='scissor'){
    return humanChoice;
    }
}

let humanScore = 0;
let compScore = 0;
let round = 0;

function playRound(humanChoice,compChoice){
    console.log(`Computer chose:${compChoice}`);
    console.log(`Human chose:${humanChoice}`)

    if(compChoice=='rock'){
        if(humanChoice.toLowerCase()=='paper'){
           console.log("You won! Inching closer to the crown,prince!");
           humanScore++;
        }
       else if(humanChoice.toLowerCase()=='scissor'){
        console.log("You lose,peasant!");
       compScore++;}
    
    else{
        console.log("A wonderful draw!");
    }
    }
    if(compChoice=='paper'){
        if(humanChoice.toLowerCase()=='scissor'){
           console.log("You won! Inching closer to the crown,prince!");
           humanScore++;
        }
       else if(humanChoice.toLowerCase()=='rock'){
        console.log("You lose,peasant!");
       compScore++;}
       else{
        console.log("A wonderful draw!");
    }
    }
   
    if(compChoice=='scissor'){
        if(humanChoice.toLowerCase()=='rock'){
           console.log("You won! Inching closer to the crown,prince!");
           humanScore++;
        }
       else if(humanChoice.toLowerCase()=='paper'){
        console.log("You lose,peasant!");
       compScore++;}
    
    else{
        console.log("A wonderful draw!");
    }
}

}

const humanSelection = getHumanChoice();
const compSelection = getCompChoice();


function playGame(){
    round++;
    console.log(`Round: ${round}`);
    const humanSelection = getHumanChoice();
    const compSelection = getCompChoice();
    playRound(humanSelection,compSelection);

}


playGame();
playGame();
playGame();
playGame();
playGame();

console.log(`computer score:${compScore}`);
console.log(`human score:${humanScore}`);

if(compScore>humanScore){
    console.log("As expected of the lowly peasant you are!MmuuHAHAHAHA!!!");
}

else if(compScore<humanScore){
    console.log("Never doubted you,my King!Here is your crown.Please have it and lead us to paradise.");
}

else{
    console.log("A draw!As expected of the battle between two legendary warriors!");
}
