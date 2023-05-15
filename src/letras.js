export default function letters(
    {
        letterClick,
        gameWord,
        wordLetters,
        setWordLetters,
        setMistake,
        mistake,
        setButtonState,
        keyState,
        setKeyState,
        arrayLetters,
        setArrayLetters,
        setColorState,
        lookState,
        setLookState,
        
    }
) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const newGame = [...gameWord]
    const newGameString = newGame.join("")

    function letterState(letter) {
        setArrayLetters([...arrayLetters, letter])
        letterClick.push(letter)
        if (gameWord.includes(letter)) {
            for (let i = 0; i < gameWord.length; i++) {

                if (gameWord[i] === letter) {
                    wordLetters[i] = letter
                }
            }
        } else if (mistake < 6 && !gameWord.includes(letter)) {
            setMistake(mistake + 1)
        }

        if (mistake === 5) {
            setWordLetters(newGameString)
            setColorState("wrong")
            setKeyState(true)
            setButtonState(false)
            setLookState("disabled")
            
        } else if (gameWord.toString() === wordLetters.toString()) {
            setColorState("right")
            setKeyState(true)
            setButtonState(false)
            setLookState("disabled")
        }
    }

    return (
        <div className="letters">
            {alphabet.map((letter) => (
                <button data-test="letter" className={`letter ${letterClick.includes(letter) ? "disabled" : lookState}`}
                    id={letter}
                    disabled={!letterClick.includes(letter) ? keyState : true}
                    onClick={() => letterState(letter)}
                    key={letter}
                >
                    <span>
                        {letter.toUpperCase()}
                    </span>
                </button>
            ))}
        </div>
    )

}