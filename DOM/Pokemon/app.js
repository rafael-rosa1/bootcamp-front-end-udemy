// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 251; i++) {
    //creating elements
    const div = document.createElement('div');
    const img = document.createElement('img');
    const pokemonNumber = document.createElement('span');
    //adding content to elements
    div.classList.add('pokemon');
    img.src = `${baseURL}${i}.png`
    pokemonNumber.innerText =`#${i}`;
    //putting element on the screen      
    container.append(div);
    div.append(img);
    div.append(pokemonNumber);
}


