const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numAttempts = 5;
let secretNumber;

function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil(Math.random() * (max - min + 1) + min)
}

function askLimit(){
    rl.question("How many Attempts would you like ? ",(answer)=>{
        if(answer){
            numAttempts = Number(answer);
            askrange();
        }

    })
}

function askrange(){
    rl.question("Enter min Number: ", (min) =>{
        if(min){
            rl.question("Enter max Number: ",(max)=>{
                console.log("I am thinking of a number between "+ min +" and "+ max);

                secretNumber = randomInRange(Number(min), Number(max));
                askGuess();
            })
        }
    })
}

// askrange();

function askGuess () {
    rl.question("Enter a guess: ", (num)=> {
        if(checkGuess(Number(num))){
            console.log("You win!");
            rl.close();
        } else {
            numAttempts--;
            // askGuess()
            if(numAttempts === 0){
                console.log("You lose!")
                rl.close()
            } else {
                askGuess()
            }
        }
    })

}


function checkGuess(num){
    if(num > secretNumber){
        console.log("Too high");
        return false;
    } else if( num < secretNumber){
        console.log("Too low");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}
askLimit()
