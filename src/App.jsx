import React, { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function App() {
  const [mistake, setMistake] = useState(0);
  const [wordLetters, setWordLetters] = useState([]);
  const [gameWord, setgameWord] = useState([]);
  const [letterClick, setletterClick] = useState([]);
  const [arrayLetters, setArrayLetters] = useState([]);
  const [keyboardState, setKeyboardState] = useState("disabled");
  const [lookState, setLookState] = useState("disabled");
  const [keyState, setKeyState] = useState(true);
  const [buttonState, setButtonState] = useState(false);
  const [finalWord, setFinalWord] = useState("");
  const [colorState, setColorState] = useState("");
  const [word, setWord] = useState("");
  const chooseWord = "";
  const newWord = [];

  function setChosenWord() {
    setButtonState(true);
    setKeyState(false);
    setMistake(0);
    setletterClick([]);
    setColorState("");
    setLookState("able");

    const chooseWord = palavras[Math.floor(Math.random() * palavras.length)];

    setWord(chooseWord);

    setgameWord([...chooseWord])

    const newWord = [...chooseWord]

    let gap = []

    newWord.forEach(() => {
      gap.push(" _")
    })
    setWordLetters(gap);

    setKeyboardState("letter");
  }

  return (
    <>
      <Jogo
        mistake={mistake}
        wordLetters={wordLetters}
        colorState={colorState}
        setChosenWord={setChosenWord}
        word={word}
      />
      <Letras
        letterClick={letterClick}
        gameWord={gameWord}
        wordLetters={wordLetters}
        setWordLetters={setWordLetters}
        mistake={mistake}
        setMistake={setMistake}
        keyState={keyState}
        setKeyState={setKeyState}
        arrayLetters={arrayLetters}
        setArrayLetters={setArrayLetters}
        setColorState={setColorState}
        lookState={lookState}
        setLookState={setLookState}
        setButtonState={setButtonState}
      />
    </>
  );
}
