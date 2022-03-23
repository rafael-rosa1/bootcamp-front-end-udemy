const playTo = document.querySelector('#play-until');
const player1Score = document.querySelector('#score1');
const player2Score = document.querySelector('#score2');
const buttons = document.querySelectorAll('button');

let player1 = '0';
let player2 = '0';

for (let i = 0; i < 3; i++) {
	if(i === 0) {
		buttons[i].addEventListener('click', () => {
			player1++;
			player1Score.innerText = `${player1}`;
			if(player1 == playTo.value) {
				player1Score.style.color = 'green';
				player2Score.style.color = 'red';
				buttons[0].setAttribute('disabled','');
				buttons[1].setAttribute('disabled','');
			}
		})
	} else if (i === 1) {
		buttons[i].addEventListener('click', () => {
			player2++;
			player2Score.innerText = `${player2}`;
			if (player2 == playTo.value){
				player2Score.style.color = 'green';
				player1Score.style.color = 'red';
				buttons[0].setAttribute('disabled','');
				buttons[1].setAttribute('disabled','');
			}
		})
	} else if(i === 2) {
		buttons[i].addEventListener('click', () => {
			player1Score.innerText = '0';
			player1Score.style.color = 'black';
			player2Score.innerText = '0';
			player2Score.style.color = 'black';
			buttons[0].removeAttribute('disabled');
			buttons[1].removeAttribute('disabled');
			player1 = '0';
			player2 = '0';
		})
	}
}





