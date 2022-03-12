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
// only works if there is only one statement/expressions on the body of a function
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

//usefull for making oneline functions
const add = (a, b) => a + b;

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// })

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`)
)

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        }, 3000)
    }
}