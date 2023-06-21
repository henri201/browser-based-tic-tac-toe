//take user input, validate, store

function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;  // + to make it into a int
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    document.getElementById('playername').value = '';
}

function savePlayerConfig (event) {
    event.preventDefault();          //prevent the form from reloading the page
    const formData = new FormData(event.target);   //takes a form and extracts values
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername) {     //extra restriction for name input, falsy value
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;     //nothing after executes if return is executed
    }

    const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;   //getting the right player

    closePlayerConfig();    //confirm closes the overlay
}