let gussedInput = document.getElementById("input_number");

let randomNumber = Math.floor(Math.random()*20 ) + 1;
// console.log("randomnumber", randomNumber)

let checkButton = document.getElementsByClassName("check_button")[0]

let statusElement = document.getElementById("status")

let scoreElement = document.getElementById("score")

let highScoreElement = document.getElementById("highscore")

let gussedNumber = document.querySelector("#gussed_number")

// let resetButtonElement = document.querySelector(".again")

let score = 20;

function check(){
    let value = gussedInput.value;
    console.log("value", value)
    

    if(value == randomNumber){
        document.querySelector("body").style.backgroundColor = "green";
        statusElement.textContent = "Correct answer";
        highScoreElement.textContent = score;
        gussedNumber.textContent= randomNumber;
    }
    else if(value < randomNumber){
        statusElement.textContent = "too low";
        score= score-1;
        scoreElement.textContent = score;
    }
    else if(value > randomNumber){
        statusElement.textContent = "too high";
        score= score-1;
        scoreElement.textContent = score;
    }
}


// function reset(){
//     document.querySelector("body").style.backgroundColor = "rgb(80, 80, 80)";
//     gussedInput.value = "";
//     statusElement.textContent = "Start Guessing....";
//     gussedNumber.textContent = "?";
//     scoreElement.textContent = 20;
    
// }

checkButton.addEventListener("click", check)

// resetButtonElement.addEventListener("click", reset)
