/* eslint-disable react/prop-types */
import clsx from "clsx"

export default function InputArea({ currentWord, guessedLetters, gameOver }) {
    const letters = currentWord.toUpperCase().split("").map((letter, index) => (
        <span className={clsx(
            "w-12 h-12 rounded text-center py-2 text-2xl font-semibold border-b bg-light-secondaryBackground dark:bg-dark-secondaryBackground border-light-borderSubtle dark:border-dark-borderSubtle shadow-light-strong dark:shadow-dark-strong",
            gameOver && !guessedLetters.includes(letter) && "text-red-500"
        )}
            key={index}>
            {
                !gameOver ?
                    (guessedLetters.includes(letter) && letter) :
                    letter
            }
        </span>
    ))
    return (
        <div className="flex gap-1 justify-center">
            {letters}
        </div>
    )
}