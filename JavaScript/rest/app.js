//just an example that doesnt work
// function sum() {
//     return arguments.reduce((total, element) => total + element);
// }

// function sum(...nums) {
//     return nums.reduce((total, element) => total + element);
// }

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVEW MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
