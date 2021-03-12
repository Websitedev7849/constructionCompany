const menu = document.querySelector(".menu");
const navLinksContainer = document.querySelector('.navLinksContainer');
var navLinks = document.querySelectorAll('.navLinks li a');
var sections = document.querySelectorAll('section');
var btns = document.querySelectorAll('button');
var page = document.querySelector('.page');
var nav = document.querySelector('.nav');
var close = document.querySelector('.close');
var imageContainer = document.querySelector('.imageContainer');

class Projects{
    constructor(src){
        this.src = src;
    }
    title(){
        let div = document.createElement('div');
        div.setAttribute('class' , 'title');
        div.innerText = this.src.slice(0, this.src.lastIndexOf('.'));
        return div;
    }
    image(){
        let img = document.createElement('img');
        img.setAttribute('src' , 'images/' + this.src);
        return img;
    }
}

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
sections.forEach(element=>{
    element.addEventListener('touchmove',()=> closeList());
});

btns = Array.from(btns);
btns.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        let siblingSrc = btn.previousElementSibling.src.slice();
        siblingSrc = siblingSrc.slice(siblingSrc.lastIndexOf('/') + 1);
        
        let project = new Projects(siblingSrc);
        nav.appendChild(project.title());
        imageContainer.appendChild(project.image());
        page.style.top = "0%";
    });
});

close.addEventListener('click' , ()=>{
    page.style.top = "100%";
    nav.removeChild(nav.children[1]);
    imageContainer.removeChild(imageContainer.children[0]);
});