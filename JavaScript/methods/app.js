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