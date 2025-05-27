let humanScore = 0, computerScore = 0;
//playGame()
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const output = document.querySelector("#output");

score.textContent= `Your score: ${humanScore} vs computer score: ${computerScore} `;
output.textContent = ' ';


rock.addEventListener( "click",() =>{
    playRound("rock", getComputerChoise())
});
paper.addEventListener( "click", () => {
    playRound("paper", getComputerChoise())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoise())
});


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
    
    function playRound(h, c){
        /* Write draw as one line first*/
        let msg = ""; //output messg instead of consoloe log
        if(h.toLocaleLowerCase() == c.toLocaleLowerCase()){
            console.log('Draw! Both chose', h);
            output.style.cssText = "color: white";
            output.textContent = `Draw! Both chose ${h}`;
            return
        }
        if(h.toLocaleLowerCase() == "rock"){
            if(c.toLocaleLowerCase() == "paper"){
                console.log("You lose! Paper beats Rock!");
                msg = "You lose! Paper beats Rock!";
                computerScore ++;
            }else if(c.toLocaleLowerCase() == "scissors"){
                console.log("You win! Rock beats Scissors!");
                msg = "You win! Rock beats Scissors!";
                humanScore ++;
            }
        }else if(h.toLocaleLowerCase() == "paper"){
            if(c.toLocaleLowerCase() == "scissors"){
                console.log("You lose! Scissors beats Paper!");
                msg = "You lose! Scissors beats Paper!";
                computerScore ++;
            }else if(c.toLocaleLowerCase() == "rock"){
                console.log("You win! Paper beats Rock!");
                msg = "You win! Paper beats Rock!";
                humanScore ++;
            }
        }else{ //h = scissors
            if(c.toLocaleLowerCase() == "rock"){
                console.log("You lose! Rock beats Scissors!");
                msg = "You lose! Rock beats Scissors!";
                computerScore ++;
            }else if(c.toLocaleLowerCase() == "paper"){
                console.log("You win! Scissors beats Paper!");
                msg = "You win! Scissors beats Paper!";
                humanScore ++;
            }
        }
        output.style.cssText = "color: white";
        if(humanScore == 5){
            msg = `GAME OVER! You Win! \nCompueter score: ${computerScore} vs Your score: ${humanScore}`;
            output.style.cssText = "color: lightgreen";
            humanScore = computerScore = 0;
        }
        if(computerScore == 5){
            msg = `GAME OVER! You lose! \nCompueter score: ${computerScore} vs Your score: ${humanScore}`;
            output.style.cssText = "color: salmon";
            humanScore = computerScore = 0;
        }

        score.textContent= `Your score: ${humanScore} vs computer score: ${computerScore} `;
        output.textContent = msg;
    }



/*
    else if(h.toLocaleLowerCase() == "rock" && c.toLocaleLowerCase() == "paper"){
        console.log("You lose! Paper beats Rock!");
        computerScore ++;
*/

/* --------------- OLD Code BELOW -------------*/
function getHumanChoise(){
    let hum_choice = prompt("Please choose rock, paper or scissors!");
       if(  hum_choice.toLocaleLowerCase() == "rock" || hum_choice.toLocaleLowerCase() == "paper" || hum_choice.toLocaleLowerCase() == "scissors" ){
           return hum_choice
           //console.log("You choose: ", hum_choice);
       }else{
           console.log("Your choise was invalid. Please enter rock, paper or scissors!");
           getHumanChoise();
       }
       return hum_choice
}


function playGame(){
    let humanScore = 0, computerScore = 0;
    
    for(let i = 0; i<5; i++){
        let hum_choice = getHumanChoise();
        let comp_choice = getComputerChoise();
        //console.log("Computer chose: ", comp_choice);
        playRound(hum_choice, comp_choice);
    }
    while(humanScore == computerScore){
        console.log(`SUDDEN DEATH!! \nOne more round!`)
        let hum_choice = getHumanChoise();
        let comp_choice = getComputerChoise();
        playRound(hum_choice, comp_choice);
    }
    if(humanScore < computerScore){
        console.log(`GAME OVER! You lose! \nCompueter score: ${computerScore} vs Your score: ${humanScore}`)
    }else if(humanScore > computerScore){
        console.log(`GAME OVER! You Win! \nCompueter score: ${computerScore} vs Your score: ${humanScore}`)
    }
}