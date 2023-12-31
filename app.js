const buttonOne = document.getElementById("btn-one");
const gameShow = document.querySelector("#game-box-show");
const btnQuitHide = document.querySelector("#hide-quit-btn");
const btnSumbit = document.getElementById("btn-submit")

buttonOne.addEventListener("click", startGame)
btnQuitHide.addEventListener("click", resetGame)

function startGame() {
    console.log("game started");
    buttonOne.style.display = "none";
    gameShow.style.display = "block";
    btnQuitHide.style.display = "block"
    const gameGoal = document.querySelector("#goal-change");
    gameGoal.textContent = "Please choose a number";
    btnSumbit.innerText = "Choose a maximum Number";
    playerChooseNumber()
}

function playerChooseNumber() {
    btnSumbit.addEventListener("click", function () {
        const display = document.getElementById("display");
        let maximum = parseInt(display.value);
        const youChose = document.querySelector("#guess-state-show");
        if (isNaN(maximum)) {
            youChose.textContent = "Please choose a number";
        } else {
            youChose.textContent = `the number you chose is ${maximum}`;
            gameChoseNumber()
            display.value = ""
        }
    })
}

function gameChoseNumber() {
    const display = document.getElementById("display");
    let maximum = +display.value;
    const targetNum = Math.floor(Math.random() * maximum) + 1;
    console.log(targetNum);
    const gameGoal = document.querySelector("#goal-change");
    gameGoal.textContent = "Guess which number was chosen";
    btnSumbit.innerText = "Enter Guess";
}




// btnSumbit.addEventListener("click", function () {
//     const display = document.getElementById("display");
//     let maximum = parseInt(display.value);
//     const gameStatus = document.querySelector("#guess-state-show");
//     gameStatus.innerHTML = `the number you chose is ${maximum}`;
// });






function resetGame() {
    buttonOne.style.display = "block";
    gameShow.style.display = "none";
    btnQuitHide.style.display = "none"
    const display = document.getElementById("display");
    display.value = "";
    const youChose = document.querySelector("#guess-state-show");
    youChose.textContent = "";
}

// function gameStarted() {
//     let maximum = parseInt(prompt("Enter the Maximun Number"));
//     while (!maximum) {
//         maximum = parseInt(prompt("Enter a valid number"));
//     }

//     const targetNum = Math.floor(Math.random() * maximum) + 1;

//     let guess = prompt("enter your first guess (type 'quit' to quit the game)");
//     let attempts = 1;
//     let highAtempts = 1;
//     let lowAtempts = 0;

//     while (parseInt(guess) !== targetNum) {
//         if (guess === "quit") break;
//         guess = parseInt(guess)
//         if (guess > targetNum) {
//             guess = prompt("too High, enter a new guess");
//             attempts++;
//             highAtempts++;
//         } else if (guess < targetNum) {
//             guess = prompt("To low! enter a new guess");
//             attempts++;
//             lowAtempts++;
//         } else {
//             guess = prompt("Invalid guess, Please enter a number or typr 'quit' to quit the game");
//         }
//     }
//     if (guess === "quit") {
//         console.log("you quit the game");
//         buttonOne.style.display = "block"
//     } else {
//         console.log(`It took you ${attempts} attempts to guess the correct number`);
//         console.log(`you had ${highAtempts} high attempts and ${lowAtempts} low attempts`);
//         buttonOne.style.display = "block"
//     }


// }



// let maximum = parseInt(prompt("Enter the Maximun Number"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("enter your first guess (type 'quit' to quit the game)");
// let attempts = 1;
// let highAtempts = 1;
// let lowAtempts = 0;

// while (parseInt(guess) !== targetNum) {
//     if (guess === "quit") break;
//     guess = parseInt(guess)
//     if (guess > targetNum) {
//         guess = prompt("too High, enter a new guess");
//         attempts++;
//         highAtempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("To low! enter a new guess");
//         attempts++;
//         lowAtempts++;
//     } else {
//         guess = prompt("Invalid guess, Please enter a number or typr 'quit' to quit the game");
//     }
// }
// if (guess === "quit") {
//     console.log("you quit the game");
// } else {
//     console.log(`It took you ${attempts} attempts to guess the correct number`);
//     console.log(`you had ${highAtempts} high attempts and ${lowAtempts} low attempts`);
// }

