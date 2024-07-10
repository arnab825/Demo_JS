function switch_mode() {
    let bodytag = document.body;
    let buttontag = document.querySelector(".action-button");
    let resetbuttontag = document.querySelector(".reset-button");

    // Check if the button currently contains the ri-toggle-line icon
    let isDarkMode = buttontag.querySelector("i").classList.contains("ri-toggle-line");

    if (isDarkMode) {
        // Switch to light mode
        buttontag.querySelector("i").classList.remove("ri-toggle-line");
        buttontag.querySelector("i").classList.add("ri-toggle-fill");

        buttontag.style.backgroundColor = 'black';
        buttontag.style.color = 'white';

        bodytag.style.backgroundColor = "black";
        bodytag.style.color = "white";

        if (resetbuttontag) {
            resetbuttontag.style.backgroundColor = "black";
            resetbuttontag.style.color = "white";
        }
    } else {
        // Switch to dark mode
        buttontag.querySelector("i").classList.remove("ri-toggle-fill");
        buttontag.querySelector("i").classList.add("ri-toggle-line");

        buttontag.style.backgroundColor = 'white';
        buttontag.style.color = 'black';

        bodytag.style.backgroundColor = "white";
        bodytag.style.color = "black";

        if (resetbuttontag) {
            resetbuttontag.style.backgroundColor = "white";
            resetbuttontag.style.color = "black";
        }
    }
}
