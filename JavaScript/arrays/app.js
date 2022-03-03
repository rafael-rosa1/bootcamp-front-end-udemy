// // empty array
// let students = [];

// // an array of strings
// let colors = ["red", "green", "blue"];

// // an array of numbers
// let lotteryNums = [19,22,56,12,51];

// //a mixed array
// let stuff = [true, 68, "cat", null];

// colors[0] = "pink";

// let movieLine = ["rafael", "valentina"];
// //adiciona um elemtno ao final da array
// movieLine.push("pedro");

// //remove o ultimo elemento da array
// let lastMemberRemoved = movieLine.pop();
// console.log(lastMemberRemoved);

// let firstMemberRemoved = movieLine.shift();
// console.log(firstMemberRemoved);

// //concat method
// let carbo = ["arroz", "feijao", "legumes"];
// let prot = ["frango", "ovos"];
// let meal = carbo.concat(prot);
// console.log(meal);

// //reverse method
// meal.reverse();
// console.log(meal);

// //slice e splice
// let colors = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Pink', 'Purple'];
// let slice = colors.slice(3); //copia a partir do index definido até o final
// console.log(slice);
// let sliceTwoArgs = colors.slice(2, 4); //copia a partir do primeiro index até um antes do segundo
// console.log(sliceTwoArgs);

// colors.splice(5,1)
// console.log(colors);
// colors.splice(1,0,"Red-Blue");
// console.log(colors);

// //sort method
// let scores = [1,70,100,90,2500,-12,0,34];
// console.log(scores.sort());

//nested arrays
const gameBoard = [
    ['X','O','X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
]