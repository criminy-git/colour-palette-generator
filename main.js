

import * as colourGen from './colourGen.js';


button.addEventListener("click",colourGen);

window.onkeyup = (e)=> {
    if (e.which||e.keycode == 33) {
        colourGen();
    }
}
