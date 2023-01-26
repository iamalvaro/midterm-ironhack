/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//crear links the nav con scroll suave a las seccion marcadas!!!!


//Fetch titles for project cards

const cardTitle = document.querySelectorAll(".api-card h3");
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

    let loremContent = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        // console.log(res[1].title)
        for (i = 0; i < cardContent.length; i++) {
            cardContent[i].innerHTML = res[i].body;               
         
        }; 
      })
      .catch((error) => console.log(error));
    }
    loremContent();

    //Question form

    let mailSub = (event) => {
      console.log("Helloo");
      event.preventDefault();
      let email = document.querySelector("#email-sub").value;
      console.log(email);
    }

    document.querySelector("#sub-button").addEventListener("click", mailSub);







//     const cardOneTitle = document.querySelector(".card1 h3");
//     const cardTwoTitle = document.querySelector(".card2 h3");
//     const cardThreeTitle = document.querySelector(".card3 h3");

// let loremContent = () => {
// fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
//       .then(response => response.json())
//       .then((res) => {
//         console.log(res[1].title)
//         cardOneTitle.innerText = res[1].title;
//         cardTwoTitle.innerText = res[2].title;
//         cardThreeTitle.innerText = res[3].title;    
//       })
//       .catch((error) => console.log(error));
//     }
//     loremContent();

    