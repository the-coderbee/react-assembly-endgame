import clsx from "clsx";

/* eslint-disable react/prop-types */
export default function GameFooter({ newGame, getHint, hintUsed, gameOver, gameStarted }) {
    return (
        <div className="mt-8 w-3/6 m-auto flex justify-between px-8">
            <button onClick={getHint}
                className={clsx(
                    "px-6 py-2 text-xl rounded-md border relative bg-light-buttonHint dark:bg-dark-buttonHint border-light-borderSubtle dark:border-dark-borderSubtle shadow-light-subtle dark:shadow-dark-subtle",
                    hintUsed || gameOver ? "cursor-not-allowed opacity-30" : "cursor-pointer"
                )}
                disabled={hintUsed || gameOver}>
                <span className="absolute -top-3 -right-3 rounded-full w-6 h-6 text-sm py-0.5 bg-light-buttonIncorrect dark:bg-dark-buttonIncorrect">{hintUsed ? "0" : "1"}</span>
                Hint💡
            </button>
            <button onClick={newGame} className="px-6 py-2 text-xl rounded-md border cursor-pointer bg-light-buttonNewGame dark:bg-dark-buttonNewGame border-light-borderSubtle dark:border-dark-borderSubtle shadow-light-subtle dark:shadow-dark-subtle">{gameStarted && !gameOver ? "Restart" : "New Game"}</button>
        </div>
    )
}