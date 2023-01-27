/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
    const projectsTitle = document.querySelector("#project-main h1");
    const projectsSubtitle = document.querySelector(".subheading");
    const projectsContent = document.querySelector(".project-content");

    const projectsTitleTwo = document.querySelector("#project-main-two h1");
    const projectsSubtitleTwo = document.querySelector(".subheading-two");
    const projectsContentTwo = document.querySelector(".project-content-two");

    const projectsTitleThree = document.querySelector("#project-main-three h1");
    const projectsSubtitleThree = document.querySelector(".subheading-three");
    const projectsContentThree = document.querySelector(".project-content-three");

    console.log(projectsTitleTwo,projectsTitleThree,projectsSubtitleTwo, projectsContentThree)
// console.log(projectsTitle)
// console.log(projectsSubtitle)
// console.log(projectsContent)

let loremContent = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        // console.log(res)
        
        if(projectsTitle){
          projectsTitle.innerText = res[0].title.substring(0, 20);
          projectsSubtitle.innerHTML = res[0].title;
          projectsContent.innerText = res[0].body;
        } 
        
        if (projectsTitleTwo){
          projectsTitleTwo.innerText = res[1].title.substring(0, 20);
          projectsSubtitleTwo.innerHTML = res[1].title;
          projectsContentTwo.innerText = res[1].body;
        }
        if (projectsContentThree){
          projectsTitleThree.innerText = res[2].title.substring(0, 20);
          projectsSubtitleThree.innerHTML = res[2].title;
          projectsContentThree.innerText = res[2].body;          
        }     

      
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
        // console.log(res)
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
