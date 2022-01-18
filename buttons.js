

export let keyAction = { 
    keyUpHandler:function(e) {
        if (e.which||e.keycode == 33) {
            colourGen();
            }
    }
}
