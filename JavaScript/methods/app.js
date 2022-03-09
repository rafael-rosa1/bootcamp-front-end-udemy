// const myMath = {
//     PI: 3.14159,
//     square: function(num) {
//         return num * num;
//     },
//     cube: function(num) {
//         return num ** 3;
//     }
// }

//new shorthand same result
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Zezinho',
    color: 'grey',
    breed: 'vira-lata',
    meow() {
        console.log('THIS IS:', this);
        console.log(`${this.name} says MEOWWW`);
    }
}

const meow2 = cat.meow;