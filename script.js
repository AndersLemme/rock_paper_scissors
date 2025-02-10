let humanScore = 0, computerScore = 0;
console.log(humanScore);
console.log(computerScore);


let hum_choice = getHumanChoise();
let comp_choice = getComputerChoise();
console.log("Computer chise: ", comp_choice);
playRound(hum_choice, comp_choice);

function getComputerChoise(){
    let comp_choice =  Math.floor(Math.random()*3);
    if (comp_choice === 0) {
        comp_choice = "Rock";
    }else if( comp_choice === 1){
        comp_choice = "Paper";
    }else{
        comp_choice = "Scissors";
    }
    return comp_choice
}

function getHumanChoise(){
 let hum_choice = prompt("Please choose rock, paper or scissors!");
    if(  hum_choice.toLocaleLowerCase() == "rock" || hum_choice.toLocaleLowerCase() == "paper" || hum_choice.toLocaleLowerCase() == "scissors" ){
        console.log("You choose: ", hum_choice);
    }else{
        console.log("Your choise was invalid. Please enter rock, paper or scissors!");
        getHumanChoise();
    }
    return hum_choice
}
function playRound(h, c){
    /* Vrite draw as one line first*/
    if(h.toLocaleLowerCase() == "rock"){
        if(c.toLocaleLowerCase() == "paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore ++;
        }else if(c.toLocaleLowerCase() == "scissors"){
            console.log("You win! Rock beats Scissors!");
            humanScore ++;
        }else{ /*(c.toLocaleLowerCase() == "rock"){*/
            console.log("Draw! Both chose Rock!");
        };
    }
}
/*
    else if(h.toLocaleLowerCase() == "rock" && c.toLocaleLowerCase() == "paper"){
        console.log("You lose! Paper beats Rock!");
        computerScore ++;
*/