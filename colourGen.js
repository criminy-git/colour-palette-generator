
export const code = document.querySelectorAll('.code');
export const colour = document.querySelectorAll('.colour');
export const button = document.getElementById("button");


export const colourGen = () => {
    var letters = "0123456789abcdef";
    var hashtag = ["#","#","#","#","#","#"];
    for (let i=0; i<6; i++) {
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
        hashtag[i]+=letters[Math.floor(Math.random() *16)];
    }
    for (let i=0; i<code.length; i++){
        code[i].innerHTML = hashtag[i];
        colour[i].style.backgroundColor = hashtag[i];
    }
}
 

export const buttonAction = (e) => {
    if (e.which||button.addEventListener("click")) {
        colourGen();
    }
    
}

export const spacebarAction = window.onkeyup = (e) => {
    if (e.which||e.keycode ==33) {
        colourGen();
    }
}

