// Side-Menu Height

function setHeight() {
    let body = document.querySelector('body');
    let bodyheight = body.offsetHeight;
    document.querySelector('.menu-items').style.height = bodyheight + "px";
}

setHeight()

window.addEventListener('resize', function(event) {
    setHeight()
    }, true);


// Dark Mode

var checkbox = document.querySelector(".dark-checkbox");

function DarkMode() {
    if (checkbox.checked == true) {
        var link = document.querySelector('link[href$="dark_mode.css"]')
        link.removeAttribute('disabled')

    } else {
        var link = document.querySelector('link[href$="dark_mode.css"]')
        link.setAttribute('disabled', 'true')}   
};


// localStorage

var i, checkboxes = document.querySelectorAll(".dark-checkbox");

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); 
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
    DarkMode()
} 

// firstLoad

load_()