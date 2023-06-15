//take user input, validate, store

function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block'
    backDropElement.style.display = 'block'
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none'
    backDropElement.style.display = 'none'
}

function savePlayerConfig (event) {
    event.preventDefault();          //prevent the form from reloading the page
    const formData = new FormData(event.target); //takes a form and extracts values
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername) {   //extra restriction for name input
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
}