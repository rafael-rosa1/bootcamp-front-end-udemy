// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK !!!';
// }

// const h1 = document.querySelector('h1');
// h1.innerHTML = '<i>Testing123</i>'

//accessing attributes
const id = document.querySelector("#banner").id;

const firstLink = document.querySelector("a");
firstLink.href; //get from the JavaScript object
firstLink.getAttribute("href"); //here i get directly from the HTML itself
firstLink.setAttribute("href", "http://www.google.com");

const input = document.querySelector('input[type="text"]');
input.type = "password"; //change the attibute value
input.type = "color"; //change the attibute value
input.setAttribute("type", "text"); //change the attibute value

const h1 = document.querySelector("h1");
// h1.style.color = 'green';
// h1.style.fontSize = '3em';
// h1.style.border = '2px solid pink';

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "red";
  link.style.textDecorationColor = "green";
  link.style.textDecorationStyle = "wavy";
}

const h2 = document.querySelector("h2");
// h2.setAttribute('class', 'purple');
// h2.setAttribute('class', 'border');
//using this way the class border will erase the purple class
//if you want to use more than one class at the same time
//you should use classList
h2.classList.add("purple");
h2.classList.add("border");
//using classList you keep both
h2.classList.remove("purple");
h2.classList.toggle("purple"); //switch[on/off], if the class was there is removed, if it was not put the class there

const firstBold = document.querySelector("b");
const paragraph = firstBold.parentElement; //select the parent of the element
paragraph.childElementCount; // tell us how many child an element has
paragraph.children; //select all children of an element in an HTMLCollection

const squareImg = document.querySelector(".square");
squareImg.nextElementSibling; //select the next adjacent element ("brother element", same "level")
squareImg.previousElementSibling; //select the previous adjacent element ("brother element", same "level")

const newImage = document.createElement("img");
newImage.src = 'https://images.pexels.com/photos/8789666/pexels-photo-8789666.jpeg';
//after create an element for it shows in the screen i need to append to it
//appendChild will append the element last on its father
document.body.appendChild(newImage);
newImage.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I AM NEW!! ';
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('i am new text ! yaaaaaayyyy!!', 'adding two things at the same time');

const newB = document.createElement('b');
newB.append('Hi!');
p.prepend(newB);

const newH2 = document.createElement('h2');
newH2.append('New H2');
h1.insertAdjacentElement('afterend', newH2);

h1.after(newH3);