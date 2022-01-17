function colourGen() {
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

export default colourGen
