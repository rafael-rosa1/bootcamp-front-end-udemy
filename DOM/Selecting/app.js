document.getElementById('chicken'); //null - inexisting ID
const banner = document.getElementById('banner');
const tableOfContents = document.getElementById('toc');

const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
// }

const squareImages = document.getElementsByClassName('square');
for (let img of squareImages) {
    img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

//querySelector
document.querySelector('p'); //select tags (the first p tag encountered)
document.querySelector('#banner'); //select ids
document.querySelector('.square'); //select classes (the first element with the class encountered)
document.querySelector('img:nth-of-type(2)'); //select the second element with the img tag
document.querySelector('a[title="Java"]'); //select also by atribute

//querySelectorAll
document.querySelectorAll('p'); //select ALL p tags
document.querySelectorAll('img'); //select ALL images
const links = document.querySelectorAll('p a')
for (let link of links) {
    console.log(link.href);
}

