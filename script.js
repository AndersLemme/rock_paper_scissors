
getHumanChoise();
console.log("Computer chise: ",getComputerChoise());


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
    if(hum_choice == "Rock" || hum_choice == "rock" || hum_choice == "paper" || hum_choice == "Paper" || hum_choice == "scissors" || hum_choice == "Scissors"){
        console.log("You choose: ", hum_choice);
    }else{
        console.log("Your choise was invalid. Please enter rock, paper or scissors!");
        getHumanChoise();
    }

 
}