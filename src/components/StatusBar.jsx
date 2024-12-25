/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useEffect, useState } from "react";
import languages from "../languages";
import { getFarewellText } from "../utils";

export default function StatusBar({ gameWon, gameOver, wrongGuessCounter, wordHint }) {
    const [exitMsg, setExitMsg] = useState(null);

    useEffect(() => {
        if (wrongGuessCounter > 0) {
            const language = languages[wrongGuessCounter - 1].name
            setExitMsg(getFarewellText(language))
        } else {
            setExitMsg(null);
        }
    }, [wrongGuessCounter])

    return (
        <div className={clsx(
            "h-20 my-9 rounded-md flex items-center justify-center",
            gameOver ? (gameWon ? "bg-light-statusSuccess dark:bg-dark-statusSuccess" : "bg-light-statusError dark:bg-dark-statusError") :
                wrongGuessCounter > 0 && 'bg-light-statusHint dark:bg-dark-statusHint outline-2 outline-black outline-dashed -outline-offset-1'
        )}>
            <span>
                {
                    gameOver ?
                        <>
                            <h2 className="">
                                {gameWon ? "You Win" : "Game Over"}
                            </h2>
                            <p>
                                {gameWon ? "Well done! 🎉" : "You lose! You better start learning Assembly 😭"}
                            </p>
                        </> : (
                            wrongGuessCounter === 0 ?
                                <p className="text-lg italic">{wordHint && `A hint for you "${wordHint}"`}</p> :
                                <p className="text-lg italic">{exitMsg && `"${exitMsg}"`}</p>)
                }
            </span>
        </div>
    )
}