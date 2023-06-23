//game logic

function startNewGame () {     // dont show the board if there arent valid names
    if (players[0].name === '' || players[1].name === '') {
        alert("please set the player names for both players!");
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col -1;  //rows/col on board start from 1 string
    const selectedRow = selectedField.dataset.row -1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('please select and empty field!')
        return;
    }
    event.target.textContent = players[activePlayer].symbol;  //where the click occured, player[0]
    event.target.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1; // players are 1 and 2 , 0 is for none  
    console.log(gameData);

    switchPlayer();
}