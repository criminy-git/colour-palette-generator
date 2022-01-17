

import colourGen from './colourGen.js'
colourGen()

button.addEventListener("click",colourGen);

window.onkeyup = (e)=> {
    if (e.which||e.keycode == 33) {
        colourGen();
    }
}
