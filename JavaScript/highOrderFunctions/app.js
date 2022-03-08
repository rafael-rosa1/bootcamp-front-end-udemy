// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// const rollDie = function () {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie)

function makeMysteryFunc() {
    const rand = Math.random()
    if (rand > 0.5) {
        return function () {
            console.log('CONGRATS, I AM A GOOD FUNCTION');
            console.log('YOU WIN A MILLION DOLLARS');
        }
    } else {
        return function () {
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);

const isAdult = makeBetweenFunc(19, 60);

const isSenior = makeBetweenFunc(61, 120);
//we just generate three different functions


isChild(10); //true
isAdult(10); //false
isSenior(10); //false

// makeBetweenFunc(5,10) 

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

