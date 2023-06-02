// initalize the game
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const editPlayer1ButtonElement = document.getElementById('edit-player-1-btn');
const editPlayer2ButtonElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');


editPlayer1ButtonElement.addEventListener('click', openPlayerConfig);
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);