const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;
		const camp = new Campground({
			author: '629e9bedfb2479d2d7605ec2',
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			images: [
				{
					url: 'https://res.cloudinary.com/sant1/image/upload/v1654816619/YelpCamp/jyknefru75qllyh1ubkf.jpg',
					filename: 'YelpCamp/jyknefru75qllyh1ubkf'
				},
				{
					url: 'https://res.cloudinary.com/sant1/image/upload/v1654949729/YelpCamp/em1rowwqdarzavogoqhy.jpg',
					filename: 'YelpCamp/em1rowwqdarzavogoqhy'
				}
			],
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima, eligendi cupiditate quam aperiam quasi! Nulla eos expedita corrupti provident sequi vero inventore. Esse doloremque dolorum labore provident minima a!',
			price
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
