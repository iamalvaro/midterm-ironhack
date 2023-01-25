/* Crea tu propia lógica para hacer scroll */
const scrollBar = document.querySelector(".scroller"); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollBar.style.display = "block";
    } else {
        scrollBar.style.display = "none";
}
}

const scrollToTop = () => {
    let scrollDestiny = document.querySelector("nav");
    console.log(scrollDestiny)
    scrollDestiny.scrollIntoView({
        behavior: "smooth",
        block: "center",
    })
}
scrollBar.addEventListener("click", scrollToTop);

