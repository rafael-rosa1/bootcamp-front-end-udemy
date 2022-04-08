const fs = require('fs');
const folderName = process.argv[2] || 'Project';
//async version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
// 	console.log('in the callback!!');
// 	if (err) throw err;
// });

//sync version
// fs.mkdirSync('Cats');
// console.log('i come after mkdir in the file!!');
try {
	fs.mkdirSync(folderName);
	fs.writeFileSync(`${folderName}/index.html`);
	fs.writeFileSync(`${folderName}/style.css`);
	fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
	console.log('SOMETHING WENT WRONG !!');
	console.log(e);
}
