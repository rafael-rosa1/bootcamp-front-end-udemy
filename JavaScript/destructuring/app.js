const scores = [961094, 930907, 892370, 827281, 728362, 526126, 213423, 123412];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'harvey@gmail.com',
    password: 'kashd871',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1980,
    bio: 'Harvey Milk was a milk seller from California',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacey@yahoo.com',
    firstName: 'Stacey',
    lastName: 'Gonzales',
    born: 1987,
    city: 'Tusla',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear } = user;

const { city, state, died: deathYear = 'N/A' } = user2;

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90);

// const goodMovies = movies.filter(({ score }) => score >= 90);

// const moviesRates = movies.map(movie => {
//     return `${movie.title}(${movie.year}) is rated ${movie.score}`
// })

const moviesRates = movies.map(({ title, score, year }) => {
    return `${title}(${year}) is rated ${score}`
})