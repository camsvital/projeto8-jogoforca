
export default function Jogo({
  mistake,
  wordLetters,
  setChosenWord,
  colorState,
  word,
}) {
  return (
    <div className="jogo">
      <div className="top">
        <div className="forca">
          <img src={`./assets/forca${mistake}.png`} />
        </div>
        <button
          data-test="choose-word"
          onClick={setChosenWord}
          className="button"
        >
          Escolher Palavra
        </button>

        <div className={`word ${colorState}`}>
          <span data-test="word" data-answer={word}>
            {wordLetters}
          </span>
        </div>
      </div>
    </div>
  );
}
