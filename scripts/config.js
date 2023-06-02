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
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername');
}