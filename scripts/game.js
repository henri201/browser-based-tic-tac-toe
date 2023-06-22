//game logic

function startNewGame () {     // dont show the board if there arent valid names
    if (players[0].name === '' || players[1].name === '') {
        alert("please set the player names for both players!");
        return;
    }
    gameAreaElement.style.display = 'block';
}

function selectGameField(event) {
    event.target.textcontent;   //where the click occured on teh field
}