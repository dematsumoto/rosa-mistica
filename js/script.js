// Change style of navbar on scroll
window.onscroll = function() {topNavbar()};
function topNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white" + " pink";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white pink", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollToAbout(){
    toggleFunction();
    elmnt = document.getElementById("about");
    scrollTo(document.documentElement, elmnt.offsetTop, 300);
}

function scrollToBrands(){
    toggleFunction();
    elmnt = document.getElementById("brands");
    scrollTo(document.documentElement, elmnt.offsetTop, 300);
}

function scrollToContact(){
    toggleFunction();
    elmnt = document.getElementById("contact");
    scrollTo(document.documentElement, elmnt.offsetTop, 300);
}

function scrollToHome(){
    toggleFunction();
    elmnt = document.getElementById("home");
    scrollTo(document.documentElement, elmnt.offsetTop, 300);
}