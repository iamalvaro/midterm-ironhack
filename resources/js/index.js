/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//crear links the nav con scroll suave a las seccion marcadas!!!!

const projectsLink = document.querySelector("#nav-link-project");
const servicesLink = document.querySelector("#nav-link-services");



//Scroll to projects section from navbar
const scrollToProjects = () => {
    console.log("something...");
    let projectContainer = document.querySelector("#project-container");
    projectContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}
projectsLink.addEventListener('click', scrollToProjects);


// const scrollToProjects = projectsLink.addEventListener("click", () => {
//     let projectSection = document.querySelector("#project-container");
//     projectSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//     });
// });

// const scrollToProject = () => {
//     let scrollDestiny = document.querySelector("#project-container");
//     scrollDestiny.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//     })
// }
// projectsLink.addEventListener("click", scrollToProject);



//Scroll to Services section from navbar



// const scrollToServices = () => {
//     let servicesContainer = document.querySelector("#services");
//     servicesContainer.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//     })
// }
// servicesLink.addEventListener('click', scrollToServices);