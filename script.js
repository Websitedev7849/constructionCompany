const menu = document.querySelector(".menu");
const navLinksContainer = document.querySelector('.navLinksContainer');
var navLinks = document.querySelectorAll('.navLinks li a');
var sections = document.querySelectorAll('section');

window.addEventListener('resize',()=>{
    loadAndResize();
});
window.addEventListener('load',()=>{
    loadAndResize();
});
function loadAndResize() {
    (window.innerWidth < 550)?
    navLinksContainer.style.transform = "translateX(40vw)"
    :
    navLinksContainer.style.transform = "";
}
function closeList() {
        if (navLinksContainer.style.transform == "translateX(0vw)") {
            menu.children[1].style.display = "flex";
            menu.children[0].style.transform = menu.children[2].style.transform = "";
            menu.children[0].style.backgroundColor = menu.children[2].style.backgroundColor = "black";
            navLinksContainer.style.transform = "translateX(40vw)";
        }
}

menu.addEventListener('click', function(e) {
    if (navLinksContainer.style.transform == "translateX(40vw)") {
        menu.children[0].style.transform = "rotate(51deg) translate(7px,5px)";
        menu.children[1].style.display = "none";
        menu.children[2].style.transform = "rotate(-50deg)";
        menu.children[0].style.backgroundColor = menu.children[2].style.backgroundColor = "white";
        navLinksContainer.style.transform = "translateX(0vw)"; 
    } else {
        closeList();
    }
});

navLinks = Array.from(navLinks);
navLinks.forEach(element=>{
    element.addEventListener('click',()=> closeList());
});

sections = Array.from(sections);
sections.forEach(element=>{
    element.addEventListener('click',()=> closeList());
});