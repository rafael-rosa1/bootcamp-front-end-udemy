// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'duck'; //global scope
// function birdWatch() {
//     // let bird = 'chicken'; //function scope
//     console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }
// console.log(radius);
// console.log(PI);
// console.log(msg);

// for (var i = 0; i < 5; i++) { // var has global scope
//     let msg = 'oskaoaksoska'; // let has 'local' scope
//     console.log(msg);
// }
// console.log(i);
// console.log(msg);

function bankRobbery() {
    const heroes = ['Spiderman', 'She-Hulk', 'Black Panther', 'Saitama'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()} `);
            }
        }
        inner();
    }
    cryForHelp();
}