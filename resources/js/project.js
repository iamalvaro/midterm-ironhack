/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
    const projectsTitle = document.querySelector("#project-main h1");
    const projectsSubtitle = document.querySelector(".subheading");
    const projectsContent = document.querySelector(".project-content");
// console.log(projectsTitle)
// console.log(projectsSubtitle)
// console.log(projectsContent)

let loremContent = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        // console.log(res)
        projectsTitle.innerText = res[3].title;
        projectsSubtitle.innerHTML = res[2].title;
        projectsContent.innerText = res[33].body;    
      })
      .catch((error) => console.log(error));
    }
    loremContent();


    
const cardTitle = document.querySelectorAll(".api-card h3");
let titleMaxLength = 20;
// console.log(cardTitle);
let loremContentTitle = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        console.log(res)
        for (i = 0; i < cardTitle.length; i++) {
            cardTitle[i].innerText = res[i].title.substring(0, 20);
                // console.log(res[i].title)
                     
        } 
      })
      .catch((error) => console.log(error));
    }
    loremContentTitle();


    //Fetch content for project cards 

  const cardContent = document.querySelectorAll(".api-card p");

    let loremCardContent = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        // console.log(res[1].title)
        for (i = 0; i < res.length; i++) {
            cardContent[i].innerText = res[i].body;               
         
        } 
      })
      .catch((error) => console.log(error));
    }
    loremCardContent();
