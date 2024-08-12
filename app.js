const aside = document.getElementsByTagName('aside')[0];
const leftBtns = aside.getElementsByTagName('a'); 
const hide_menu = document.querySelector(".hide-menu");
const span = document.querySelector("span");
span.style.opacity = "0";
span.addEventListener("click", openNav);
aside.style.transition = "width 1s, margin-right 1s"; 
hide_menu.addEventListener("click", closeNav);
// for (let i = 0; i < leftBtns.length; i++) {
//     const el = leftBtns[i];
//     el.addEventListener("click", closeNav);
// }
function openNav() {

    span.style.transition = "opacity 1s";
    span.style.opacity = "0";

    setTimeout(function() {
        aside.style.width = "290px"; 
        aside.style.marginRight = "0";
    }, 1000);
}

function closeNav() {
    
    aside.style.width = "0"; 
    aside.style.marginRight = "290px";
    
    // console.log(aside.children);

    setTimeout(function() {
        span.style.transition = "opacity 1s";
        span.style.opacity = "1";
    }, 1000);

    
    // aside.style.transition = "opacity 1s";
    // aside.style.opacity = 0;
}