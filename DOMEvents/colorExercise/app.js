const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const body = document.querySelector('body');



button.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const totalRGB = r + g + b;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    if ( totalRGB < 390) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})