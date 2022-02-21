import React from 'react';
import ColourBox from './ColourBox';

class App extends React.Component {

    //not sure where this goes yet, onChange?
    window.onkeyup = (e) => {
        if (e.which||e.keycode ==33) {
            generateColours();
        }

        state = {
            hashtag: "#4cae3a"
        }

        generateColours = () => {
            let hexElements = "0123456789abcdef";
            let hashtag = ["#", "#", "#", "#", "#", "#"];
            for (let i = 0; i < 6; i++) {
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
                hashtag[i] += hexElements[Math.floor(Math.random() * 16)];
            }
            for (let i = 0; i < code.length; i++) {
                // code[i].innerHTML = hashtag[i];
                colour[i].style.backgroundColor = hashtag[i];
            }
            this.setState = ({ hastag : hashtag[i]}) // ??
        }//generateColours
    

    // now pass state as props to child components ColourBox! but how?
        render() {
            return (
                <>
                    <h1>Colour Palette Generator</h1>
                    <ColourBox />
                    <ColourBox />
                    <ColourBox />
                    <ColourBox />
                    <ColourBox />
                    <ColourBox />
                    <p>Press Space or Click on Generate Button</p>
                    <button onClick={this.generateColours}>Generate Colours</button>
                </>
            )
        } //render
}//App

export default App;