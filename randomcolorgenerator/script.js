let currentColor = document.querySelector('.current-color');
let bodyElem = document.querySelector('body');
let generateBtn = document.querySelector('.generate-btn');

bodyElem.style.backgroundColor = currentColor.innerText;

generateBtn.addEventListener('click', ()=> {
    let randomColor = "";
    let charactors = "0123456789abcdcdef"

    /*
    The for loop is very useful in JavaScript syntax:
    for (initialiser; condition; increment) {
        code
    }
*/

    for(let i = 0; i < 6; i++) {
        randomColor = randomColor + charactors[Math.floor(Math.random() *16)];
    }
    currentColor.innerText = "#" + randomColor;
    bodyElem.style.backgroundColor = "#" + randomColor;
    } ) 

    

