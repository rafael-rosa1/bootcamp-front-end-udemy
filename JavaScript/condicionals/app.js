// let random = Math.floor(Math.random() * 11);
// if (random < 5) {
//     console.log("your number is less than 5");
// } else {
//     console.log("your number is greater or equal than 5");
// }
// console.log(random);

// const DAYOFTHEWEEK = prompt("Enter a day:").toLowerCase();
// let isHoliday = true;

// if (DAYOFTHEWEEK === 'monday') {
//     console.log("I HATE MONDAYS");
//     if (isHoliday === true) {
//         console.log("BUT NOW I LOVE IT");
//     }
// } else if (DAYOFTHEWEEK === 'saturday') {
//     console.log("I LOVE SATURDAYS");
// } else if (DAYOFTHEWEEK === 'friday') {
//     console.log("FRIDAYS ARE GREAT AFTER 6PM");
// } else {
//     console.log("JUST ANOTHER DAY !");
// }

// const AGE = 99;

// if (AGE <= 5) {
//     console.log("You are a baby, enter for free.");
// } else if (AGE <= 10) {
//     console.log("You are a child, pay $10 and enter.");
// } else if (AGE <= 65) {
//     console.log("You are not a child, pay $20 and enter.");
// } else {
//     console.log("You are old, pay only $10 and enter.")
// }


// let isValid = false;
// while (isValid === false) {
//     let password = prompt("Enter a password:");
//     if (password.length >= 6) {
//         if (password.indexOf(" ") === -1) {
//             console.log("PASSWORD IS VALID!");
//             isValid = true;
//         } else {
//             console.log("DONT PUT BLANK SPACES");
//         }
//     } else {
//         console.log("PASSWORD IS TOO SHORT. MINIMUM 6 CHARACTERS");
//     }
// }

//SWITCH

const dayOfTheWeek = 7;

switch(dayOfTheWeek) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3: 
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("INVALID NUMBER");
}
