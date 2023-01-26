/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
//fetch post request
let postData = (event) => {
    event.preventDefault();
    let fullName = document.querySelector("#con-name").value;
    let email = document.querySelector("#con-email").value;
    let phone = document.querySelector("#con-phone").value;
    let msg = document.querySelector("#con-message").value;
    console.log(fullName);
    //API fetch to push data thorugh post request
    fetch('https://jsonplaceholder.typicode.com/todos/1/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            name: fullName,
            email: email,
            phone: phone,
            body: msg,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
        .then(response => response.json())
        .then((res) =>{
            console.log(`name: ${res.name}, email: ${res.email}, phone: ${res.phone}, message: ${res.msg}`);
        })
        .catch((err) => console.error(err)); 
   
};

document.querySelector("#contact-btn").addEventListener("click", postData);