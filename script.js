console.log("test");

console.log("Computer chise: ",getComputerChoise());

function getComputerChoise(){
    let comp_chice =  Math.floor(Math.random()*3);
    if (comp_chice === 0) {
        comp_chice = "Rock";
    }else if( comp_chice === 1){
        comp_chice = "Paper";
    }else{
        comp_chice = "Scissors";
    }
    return comp_chice
}