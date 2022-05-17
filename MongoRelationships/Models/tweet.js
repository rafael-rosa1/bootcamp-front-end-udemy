const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user = new User({ username: 'sant1', age: 31 });
    const user = await User.findOne({ username: 'sant1' });
    const tweet2 = new Tweet({ text: 'i need a job as a web developer', likes: 1 });
    tweet2.user = user;
    tweet2.save();
};

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user');
    console.log(t);
}
findTweet();