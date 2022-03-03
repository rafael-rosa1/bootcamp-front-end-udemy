// const fitBitData = {
//     totalSteps: 308727,
//     totalMiles: 211.7,
//     avgCalorieBurn: 5755,
//     workoutsThisWeek: '5 of 7',
//     avgGoodSleep: '2:13' 
// };

// console.log(fitBitData.totalSteps);

const person = {
    firstName: 'Valentina',
    lastName: 'Rosa'
};

const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ['red', 'orange']
};

let fullName = `${person.firstName} ${person.lastName}`;
console.log(fullName);

const midterms = {
    danielle: 96,
    thomas: 78
};  

//change a value inside an object
midterms.thomas = 79;
//can change to other types
midterms.thomas = 'C+';
midterms['danielle'] = 'A';
//can create new key/value properties
midterms.romario = 'B+';
midterms['antonio'] = 'A-';
