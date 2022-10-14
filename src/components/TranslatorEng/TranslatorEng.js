import './TranslatorEng.css';
import React, { useState } from 'react';
const lesson1file = require('C:/Users/kapietra/OneDrive - Capgemini/Desktop/Kamil/myProject/englishlangapp/src/resources/lesson1.json');

//console.log('lesson1file: ', lesson1file);
//console.log('lesson1: ', lesson1file.lesson1[0].id);
// alert(Math.floor(Math.random()*100+1));


const chooseNumber = () => {
  const randomNumber = Math.floor(Math.random()*4+1);
  for (let i = 0; i < lesson1file.lesson1.length; i++) {
    const wordID = lesson1file.lesson1[i].id;
    // console.log('petla wordID: ', wordID);
    // console.log('randomNumber: ', randomNumber);
    if (wordID === randomNumber) {
      const englishWord = lesson1file.lesson1[i].english;
      // console.log('słowo: ', englishWord);
      return englishWord;
    }
  }
}

const choosePolishWord = (choose) => {
  for (let i = 0; i < lesson1file.lesson1.length; i++) {
    const englishWord = lesson1file.lesson1[i].english;
    // console.log('petla wordID: ', wordID);
    if (englishWord === choose) {
      const polishWord = lesson1file.lesson1[i].polish;
      // console.log('słowo polskie: ', polishWord);
      return polishWord;
    }
  }
}

function TranslatorEng() {
    const [choose, setChoose] = useState('');
    const [word, setWord] = useState();
    return (
      <div className="App">
        <main className="App-header">
            <div>
                <div>CHOOSE AN ENGLISH WORD</div>
                <button className="noselect" onClick={() => setChoose(chooseNumber)}></button>
                <div>ENGLISH WORD: {choose}</div>
                <button className="select" onClick={() => setWord(choosePolishWord(choose))}></button>
                <div>POLISH WORD: {word}</div>
            </div>
        </main>
      </div>
    );
  }
  
  export default TranslatorEng;