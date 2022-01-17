var code = document.querySelectorAll('.code');
var colour = document.querySelectorAll('.colour');
var button = document.querySelector('button');

import colourGen from './colourGen.js'
colourGen()

button.addEventListener("click",colourGen);

window.onkeyup = (e)=> {
    if (e.which||e.keycode == 33) {
        colourGen();
    }
}
