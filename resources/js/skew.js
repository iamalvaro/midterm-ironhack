/* Crea tu propia lógica para hacer un efecto de tilting o skew cuando se hace scroll en pantalla */

//Container that holds all the visible content on page
const wholePage = document.querySelector("#site-content");
const maxSkew = 20;
const maxRotate= 10;
//start Y axis position 
let currentPosition = window.pageYOffset;

const skewEffect = () => {
    //new y axis position established as you scroll down
    const newPosition = window.pageYOffset;
    //difference between current position and new position
    const dif =  newPosition - currentPosition;
    //skew effect calculated with position difference
    let skew = dif * 0.04;
    //rotation of skew effect
    let rotate = dif * 0.02;

    //Apply max and min values to skew effect
    if (skew > maxSkew || skew < - maxSkew){
        if (skew > 0) {
            skew = maxSkew;
        }else if (skew < 0) {
            skew = -maxSkew;
        }
    }

    //Same for rotation effect
    if (rotate > maxRotate || rotate < - maxRotate){
            if (rotate > 0) {
                rotate = maxRotate;
            }else if (rotate < 0) {
                rotate = -maxRotate;
            }          
    }

    //Apply effect to content
    wholePage.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
    //update current position
    currentPosition = newPosition;
    requestAnimationFrame(skewEffect);
};

skewEffect();