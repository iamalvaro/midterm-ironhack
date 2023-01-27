/* Crea tu propia lógica para cambiar la info de About Page a través de DOM manipulation */

const beerTitle = document.querySelector("#card-title-one");
const beerContent = document.querySelector("#card-content-one");
const beerQuote = document.querySelector("#quote-one");
const beerAuthor = document.querySelector("#author-one");

const skateTitle = document.querySelector("#card-title-two");
const skateContent = document.querySelector("#card-content-two");
const skateQuote = document.querySelector("#quote-two");
const skateAuthor = document.querySelector("#author-two");
console.log(skateAuthor, beerAuthor);

let aboutUsContent = () => {
    fetch('/aboutUs.json')
          .then(response => response.json())
          .then((res) => {
            console.log(res[0].quoteAuthor);
            beerTitle.innerHTML = res[0].title;
            beerContent.innerHTML = res[0].content;
            beerQuote.innerHTML = res[0].quote;  
            beerAuthor.innerHTML = res[0].quoteAuthor; 

            skateTitle.innerHTML = res[1].title;
            skateContent.innerHTML = res[1].content;
            skateQuote.innerText = res[1].quote;  
            skateAuthor.innerText = res[1].quoteAuthor;  
         })
          .catch((error) => console.log(error));
        }
        aboutUsContent();