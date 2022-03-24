const player1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const player2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

player1.button.addEventListener('click', function() {
  updateScore(player1,player2);
})

player2.button.addEventListener('click', function() {
  updateScore(player2,player1);
})

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function updateScore(player, opponent) {
  if(winningScore - player.score === 1 && winningScore - opponent.score === 1) {
    winningScore += 1;
  }
  if(!isGameOver) {
    player.score++;
    if(player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

function reset(){
  isGameOver = false;
  winningScore = parseInt(winningScoreSelect.value);
  for(let p of [player1,player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}