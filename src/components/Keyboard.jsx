/* eslint-disable react/prop-types */
import clsx from "clsx"

export default function Keyboard({ handleKeyPress, guessedLetters, currentWord, gameOver }) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz"

    const keyElements = alphabets.toUpperCase().split("").map(alpha => {
        const isGuessed = guessedLetters.includes(alpha)
        const isCorrect = isGuessed && currentWord.includes(alpha)
        const isWrong = isGuessed && !isCorrect
        return (
            <button className={clsx(
                "w-12 h-12 rounded-md border font-semibold cursor-pointer border-light-borderSubtle dark:border-dark-borderSubtle text-light-textKeyboard dark:text-dark-textKeyboard shadow-light-subtle dark:shadow-dark-subtle",
                isCorrect ? 'bg-light-buttonCorrect dark:bg-dark-buttonCorrect' : isWrong ? 'bg-light-buttonIncorrect dark:bg-dark-buttonIncorrect' : 'bg-light-buttonDefault dark:bg-dark-buttonDefault',
                gameOver && "opacity-40 cursor-not-allowed"
            )}
                key={alpha} onClick={() => handleKeyPress(alpha)} disabled={gameOver}>{alpha}</button>
        )
    })

    return (
        <div className="m-auto mt-16 w-5/6 max-w-4xl py-2 flex flex-wrap justify-center gap-4">
            {keyElements}
        </div>
    )
}