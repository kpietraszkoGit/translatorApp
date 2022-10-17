import './Translator.css';
import logo from '../../logolang.png';
import React, { useState } from 'react';
const engpolfile = require('../../resources/engpol.json');

function Translator(props) {
    const {lang1, lang2} = props;
    // console.log('lang1:', lang1);
    const lang1Upper = lang1.toUpperCase();
    const lang2Upper = lang2.toUpperCase();
    // console.log('lang2:', lang2);
    const [choose, setChoose] = useState('?');
    let [word, setWord] = useState('?');

    const chooseNumber = (word) => {
      word = '?';//zmienić kolor tego ja na taki jak tło i się nie będzie ruszać polish word
      setWord(word);
      const numberOfWords = engpolfile.engpol[engpolfile.engpol.length-1].id;
      const randomNumber = Math.floor(Math.random()*numberOfWords+1);
      for (let i = 0; i < engpolfile.engpol.length; i++) {
        const wordID = engpolfile.engpol[i].id;
        if (wordID === randomNumber) {
          const word1 = engpolfile.engpol[i][lang1];
          let word12;
          let word123 = null;
          console.log('word12: ', word12);
          console.log('word123null: ', word123);
          return word1;
        }
      }
    }
    
    const chooseWord = (choose) => {
      for (let i = 0; i < engpolfile.engpol.length; i++) {
        const word1 = engpolfile.engpol[i][lang1];
        if (word1 === choose) {
          const word2 = engpolfile.engpol[i][lang2];
          return word2;
        }
      }
    }

    //zrobić funkcje która bierze choose dzieli go na elmenty tablicy, po dwóch słowach dodaje <br> i potem koleje słowa
    // const shorteningString = (choose) => {
      const shortString = choose.split(" ");
      console.log('shortString', shortString);
      const newString = `${shortString[0]} ${shortString[1]} \n ${shortString[2]}`;
      console.log('newString: ', newString);
      // const ostatnielement = engpolfile.engpol[engpolfile.engpol.length-1].id
      // console.log('ostatnielement: ', ostatnielement);
    // }

    return (
      <div className="App">
        <main>
          <section className="App-section">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="mainParagraph">CHOOSE {lang1Upper} WORD</div>
            <div className="col">
                <div className="row">
                  <div className="spaceButton"><button className="noselect" onClick={() => setChoose(chooseNumber(word))}></button></div>
                </div>
                <div className="row">
                  <div className="translateButton"><button className="select" onClick={() => setWord(chooseWord(choose))}></button></div>
                </div>
            </div>
          </section>
          <div className="container">
            <div className="colLeft">
              <div className="topic">{lang1Upper} WORD</div>
              <div className="word">{choose}</div>
            </div>
            <div className="colRight">
              <div className="topic">{lang2Upper} WORD</div>
              <div className="word">{word}</div>
            </div> 
          </div>
        </main>
      </div>
    );
}
  
export default Translator;