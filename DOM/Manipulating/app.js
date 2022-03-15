const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK !!!';
}

const h1 = document.querySelector('h1');
h1.innerHTML = '<i>Testing123</i>'