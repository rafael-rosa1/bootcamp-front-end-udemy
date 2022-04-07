//how to get arguments from the command line
const args = process.argv.slice(2);
for (let arg of args) {
	console.log(`Hi there, ${arg}`);
}
