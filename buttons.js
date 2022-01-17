
export button.addEventListener("click",colourGen);

export window.onkeyup = (e)=> {
    if (e.which||e.keycode == 33) {
        colourGen();
    }
}
