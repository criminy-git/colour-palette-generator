
import { button, colour, code } from "./selectors.js";

export const generateColours = () => {
    let hexElements = "0123456789abcdef";
    let hashtag = ["#","#","#","#","#","#"];
    for (let i=0; i<6; i++) {
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
        hashtag[i]+=hexElements[Math.floor(Math.random() *16)];
    }
    for (let i=0; i<code.length; i++){
        code[i].innerHTML = hashtag[i];
        colour[i].style.backgroundColor = hashtag[i];
    }
}

button.addEventListener("click", generateColours);

export const spacebarAction = (window.onkeyup = (e) => {
    if (e.which||e.keycode ==33) {
        generateColours();
    }
});

