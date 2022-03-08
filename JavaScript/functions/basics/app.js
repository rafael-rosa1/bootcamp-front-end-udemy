// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

// let die1 = rollDie(6);
// let die2 = rollDie(20);
// let die3 = rollDie(20);
// let die4 = rollDie(12);
// let die5 = rollDie();
// let die6 = rollDie();

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// //no arguments
// function greet() {
//     console.log('Hi!');
// }
// //one argument
// function greet(person) {
//     console.log(`Hi, ${person}!`)
// }

//multiple arguments
function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.!`);
}

function repeat(msg, reps) {
    let result = '';
    for (let i = 0; i < reps; i++) {
        result += msg;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}