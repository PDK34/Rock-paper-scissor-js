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
    return humanChoice;
}

let humanScore = 0;
let compScore = 0;

function playRound(humanChoice,compChoice){
    console.log(`you choose ${humanChoice}`);
    console.log(`Comp says:${compChoice}`);
    
    if(compChoice=='rock'){
        console.log(humanChoice)
        console.log(typeof humanChoice)
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

playRound(humanSelection,compSelection);

function playGame(){
    
}
