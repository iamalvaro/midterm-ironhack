/* Crea tu propia lógica para hacer scroll */
const scrollBar = document.querySelector(".scroller"); 

// const revealScrollBar = () => {
//     let windowHeight = window.innerHeight;
//     let revealPoint = 150;

//     if (windowHeight > revealPoint) {
//         scrollBar.classList.remove("hidden");
//         scrollBar.classList.add("active");
//     } else {
//         scrollBar.classList.remove("active");
//         scrollBar.classList.remove("hidden");
//     }
// }

// scrollBar.addEventListener("scroll", revealScrollBar);

const scrollToTop = () => {
    let scrollDestiny = document.querySelector("nav");
    scrollDestiny.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}
scrollBar.addEventListener("click", scrollToTop);


// scrollBar.addEventListener("scroll", () => {
//     scrollBar.classList.remove("hidden");
//     scrollBar.classList.add("block");
// });
