// const add = function (x, y) {
//     return x + y;
// }

// function add(x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const square = (x) => {
    return x * x;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// implicit returns: using return without typing it
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

//usefull for making oneline functions
const add = (a, b) => a + b;