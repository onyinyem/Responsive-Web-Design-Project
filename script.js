// toggle for navbar

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};

// typing animation
var typed = new Typed("#auto-type", {
    strings: [
        " Onyinye <br /> Muogilim.^350",
        " a CS Student.^370",
        " a Photographer.^300"],
    typeSpeed: 50,
    backSpeed: 90,
    loop: true
});

