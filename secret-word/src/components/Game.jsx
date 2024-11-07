import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points">
        Pontuação: <span>{score}</span>
      </p>
      <h1 id="guess">Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica: <span>{pickedCategory}</span>
      </h3>
      <p className="guesses">
        Você ainda tem <span id="try">{guesses}</span> tentativa(s).
      </p>
      <div className="word-container">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blank-square"></span>
          )
        )}
      </div>
      <div className="letter-container">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button id="play-button">Jogar!</button>
        </form>
      </div>
      <div className="wrong-letters-container">
        <p id="letters-used">Letras já utilizadas:</p>

        {wrongLetters.map((letter, i) => (
          <span className="wrong-letter" key={i}>
            {letter},{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
