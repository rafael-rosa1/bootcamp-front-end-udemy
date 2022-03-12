const nums = [4, 7, 1, 3, 10, 12, 54, 23, 57, 87, 53, 12, 3, 18]

Math.max(nums); //NaN
Math.max(...nums); //87

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

const stringToArray = [...'hello'];

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canidae' };

const feline2 = { ...feline, color: 'black' };

const catDog = { ...feline, ...canine };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 234, isAdmin: false };