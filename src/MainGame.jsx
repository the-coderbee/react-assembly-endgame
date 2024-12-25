import { useEffect, useState } from "react";
import GameHeader from "./components/GameHeader";
import InputArea from "./components/InputArea";
import Keyboard from "./components/Keyboard";
import LanguageList from "./components/LanguageList";
import StatusBar from "./components/StatusBar";
import languages from "./languages";
import { getRandomWord } from "./utils";
import GameFooter from "./components/GameFooter";
import axios from "axios";
import JSConfetti from "js-confetti";


export default function MainGame() {
    // state variables
    const [currentWord, setCurrentWord] = useState(() => getRandomWord().toUpperCase())
    const [wordHint, setWordHint] = useState("")
    const [hintUsed, setHintUsed] = useState(false)
    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongGuessCounter, setWrongGuessCounter] = useState(0)

    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)

    // game state variables
    const gameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const gameLost = wrongGuessCounter >= languages.length - 1
    const gameOver = gameWon || gameLost || minutes === 0 && seconds === 0
    const gameStarted = guessedLetters.length > 0

    const jsConfetti = new JSConfetti()

    useEffect(() => {
        async function fetchWordAndHint() {

            // Hint using the Datamuse API
            const hintResponse = await axios.get(`https://api.datamuse.com/words?ml=${currentWord}`);
            if (hintResponse.data.length > 0) {
                setWordHint(hintResponse.data[0].word); // First related word
            }
        }

        fetchWordAndHint();
    }, [currentWord]);

    useEffect(() => {
        const count = guessedLetters.filter(letter => !currentWord.includes(letter)).length
        setWrongGuessCounter(count)
    }, [guessedLetters, currentWord])

    useEffect(() => {
        if (gameOver) return
        if (!gameStarted) return
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    setMinutes((min) => min - 1);
                    return 59;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [minutes, gameOver, gameStarted]);

    // functions
    function handleKeyPress(key) {
        setGuessedLetters(prev => (
            guessedLetters.includes(key) ? prev : [...prev, key]
        ))
    }

    function getHint() {
        if (hintUsed) return console.log(hintUsed)
        let hintLetter = null
        const unguessedLetters = currentWord.split("").filter(letter => !guessedLetters.includes(letter))
        if (unguessedLetters.length > 0) {
            const randomIndex = Math.ceil(Math.random() * unguessedLetters.length - 1)
            hintLetter = unguessedLetters[randomIndex]
            if (hintLetter) {
                setGuessedLetters(prev => [...prev, hintLetter])
                setHintUsed(true)
            }
        } else {
            window.prompt('All letters are already guessed!')
        }
    }

    function resetTimer() {
        setMinutes(1)
        setSeconds(0)
    }

    function displayConfetti() {
        jsConfetti.addConfetti()
    }

    function newGame() {
        setCurrentWord(getRandomWord().toUpperCase())
        setGuessedLetters([])
        setWrongGuessCounter(0)
        resetTimer()
    }

    return (
        <div className="relative text-center">
            {gameOver && gameWon && displayConfetti()}
            <div className="max-w-md m-auto mt-4 text-center">
                <GameHeader minutes={minutes} seconds={seconds} />
                <StatusBar gameWon={gameWon} gameOver={gameOver} wrongGuessCounter={wrongGuessCounter} wordHint={wordHint} />
                <LanguageList wrongGuessCounter={wrongGuessCounter} />
                <InputArea guessedLetters={guessedLetters} currentWord={currentWord} gameOver={gameOver} />
            </div>
            <Keyboard handleKeyPress={handleKeyPress} guessedLetters={guessedLetters} currentWord={currentWord} gameOver={gameOver} />
            <GameFooter newGame={newGame} gameOver={gameOver} gameStarted={gameStarted} getHint={getHint} hintUsed={hintUsed} />
        </div>
    )
}
