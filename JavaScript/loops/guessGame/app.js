let inputMaxValue = parseInt(prompt('Choose a Max value and guess the number!'));
while (!inputMaxValue) {
    inputMaxValue = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * inputMaxValue) + 1;

let inputGuess = prompt(`Guess the number between 1 and ${inputMaxValue}`);

let attempts = 1;
while (inputGuess != targetNum) {
    attempts++;
    if (inputGuess > targetNum) {
        inputGuess = prompt(`Too HIGH try a smaller number`);
    } else if (inputGuess < targetNum) {
        inputGuess = prompt(`Too LOW try a bigger number`);
    } else if (inputGuess === 'q') {
        break;
    } else {
        inputGuess = prompt(`Please try a valid number`);
    }
}

if (inputGuess === 'q') {
    console.log(`You quit !!`);
} else {
    console.log(`Congratulations, you won in ${attempts} attempts`);
}
