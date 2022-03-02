// const password = prompt("Enter your Password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD !");
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!");
// }

// 0-5 free 
// 5-18 $10 
// 18-65 $20
// 65+ free

const age = prompt("Enter your age");
if(age >= 0 && age <= 5 || age > 65 && age < 100) {
    console.log("Enter for free my friend.");
} else if(age > 5 && age < 18) {
    console.log("Kids pay half entry. Give me $10.")
} else if(age >= 18 && age <= 65) {
    console.log("Adults pay $20.")
} else {
    console.log("Invalid age")
}