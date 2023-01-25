/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//crear links the nav con scroll suave a las seccion marcadas!!!!


//Fetch titles for project cards

const cardTitle = document.querySelectorAll(".api-card h3");
console.log(cardTitle);
let loremContentTitle = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        console.log(res[1].title)
        for (i = 0; i < res.length; i++) {
            cardTitle.forEach( e => {
                e.innerText = res[i].title;
                console.log(res[i].title)
            }) 
        } 
      })
      .catch((error) => console.log(error));
    }
    loremContentTitle();


  const cardContent = document.querySelectorAll(".api-card p");

    let loremContent = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((res) => {
        console.log(res[1].title)
        for (i = 0; i < res.length; i++) {
            cardContent.forEach( e => {
                e.innerText = res[i].body;               
            }) 
        } 
      })
      .catch((error) => console.log(error));
    }
    loremContent();



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

    