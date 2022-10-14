import './TranslatorPol.css';
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
      const polishWord = lesson1file.lesson1[i].polish;
      // console.log('słowo: ', englishWord);
      return polishWord;
    }
  }
}

const chooseEnglishWord = (choose) => {
  for (let i = 0; i < lesson1file.lesson1.length; i++) {
    const polishWord = lesson1file.lesson1[i].polish;
    // console.log('petla wordID: ', wordID);
    if (polishWord === choose) {
      const englishWord = lesson1file.lesson1[i].english;
      // console.log('słowo polskie: ', polishWord);
      return englishWord;
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
                <div>CHOOSE A POLISH WORD</div>
                <button className="noselect" onClick={() => setChoose(chooseNumber)}></button>
                <div>POLISH WORD: {choose}</div>
                <button className="select" onClick={() => setWord(chooseEnglishWord(choose))}></button>
                <div>ENGLISH WORD: {word}</div>
            </div>
        </main>
      </div>
    );
  }
  
  export default TranslatorEng;