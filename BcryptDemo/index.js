const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
// 	const salt = await bcrypt.genSalt(12);
// 	const hash = await bcrypt.hash(pw, salt);
// 	console.log(salt);
// 	console.log(hash);
// };

const hashPassword = async (pw) => {
	const hash = await bcrypt.hash(pw, 12);
	console.log(hash);
};

const login = async (pw, hashedPw) => {
	const result = await bcrypt.compare(pw, hashedPw);
	if (result) {
		console.log('LOGGED YOU IN SUCCESSFULL MATCH');
	} else {
		console.log('INCORRECT!');
	}
};

// hashPassword('monkey');
login('monkey', '$2b$12$pkYyKxeTU6z5xJR1.xmFB.F1DQtDGD2Q7SOipi11Ij0gLQpT8FMve');
