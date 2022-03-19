const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('YOU CLICKED ME!');
    console.log('i hope it worked');
}
function scream() {
    console.log('AHHHHHHHHHHHHHHHHH');
    console.log('STOP TOUCHING ME');
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED!');
})

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('SHOUT');
}

const tasButton = document.querySelector('#tas');
//using onclick only the last one will work
// tasButton.onclick = twist;
// tasButton.onclick = shout;

//using addEventListener both will work at the same time
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);