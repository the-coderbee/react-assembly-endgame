/* eslint-disable react/prop-types */
import languages from "../languages";
import Timer from "./Timer";

export default function GameHeader({ minutes, seconds }) {
    return (
        <>
            <h2 className="text-3xl my-2">Assembly: Endgame</h2>
            <Timer minutes={minutes} seconds={seconds} />
            <p>
                Guess the word in under {languages.length - 1} atempts to keep the programming world safe
                from Assembly!
            </p>
        </>
    );
}