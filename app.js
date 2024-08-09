const aside = document.getElementsByTagName('aside')[0];
const leftBtns = aside.getElementsByTagName('a'); 
const hide_menu = document.querySelector(".hide-menu");
// console.log(leftBtns);
hide_menu.addEventListener("click", closeNav);
// for (let i = 0; i < leftBtns.length; i++) {
//     const el = leftBtns[i];
//     el.addEventListener("click", closeNav);
// }
function openNav() {
    document.querySelector("aside")
        .style.width = "300px";
}

function closeNav() {
    // aside.style.width = "0";
    console.log(aside.children);
    aside.style.transition = "opacity 1s";
}