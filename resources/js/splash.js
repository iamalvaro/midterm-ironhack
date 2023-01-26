/* Crea tu propia lógica para hacer una splash page que desaparezca */

window.onload = setTimeout(function(){
    
    window.scrollTo({
        top: 0
    })
    
}, 500);

window.onload = setTimeout(function(){
    
     let loaderContainer = document.querySelector("#loader-container");
    

     loaderContainer.style.visibility = "hidden";
    //  loaderContainer.style.opacity = "0";
    
     
 }, 2000);

 window.onload = setTimeout(function(){
    
    let siteContent = document.querySelector("#site-content")

    siteContent.style.visibility = "visible";
    
}, 2500)