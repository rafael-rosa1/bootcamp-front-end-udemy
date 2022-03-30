// axios.get('https://swapi.dev/api/people/18/')
//   .then(res => {
//     console.log('RESPONSE:', res);
//   })
//   .catch(err => {
//     console.log('ERROR!!', err);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch(e) {
    console.log('ERROR !!', e);
  }
}

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement('li');
  newLi.append(jokeText);
  jokes.append(newLi);
}

const getDadJoke = async () => {
  try {
    const config = {headers: { Accept: 'application/json' }}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch(e) {
    return 'NO JOKES AVAILABLE! SORRY! :(';
  }
  
}

button.addEventListener('click', addNewJoke);