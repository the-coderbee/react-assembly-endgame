/* eslint-disable react/prop-types */
import clsx from "clsx";

export default function Timer({ minutes, seconds }) {

    return (
        <div className="w-2/6 m-auto my-4 rounded-md flex justify-center items-center bg-light-timerBackground dark:bg-dark-timerBackground text-light-timerText dark:text-dark-timerText">
            {/* Minutes */}
            <div className="relative h-12 w-10 overflow-hidden text-2xl font-semibold">
                {
                    [...Array(10)].map((_, i) => (
                        <span className={clsx(
                            "absolute left-1/2 -translate-x-1/2 top-2 transform transition-transform duration-700 ease-in-out",
                            i === minutes % 10 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        )}
                            key={i}>{i}</span>
                    ))
                }
            </div>

            <div className="colon text-3xl font-bold">:</div>

            {/* Seconds (Tens) */}
            <div className="relative h-12 w-10 overflow-hidden text-2xl font-semibold">
                {
                    [...Array(6)].map((_, i) => (
                        <span className={clsx(
                            "absolute left-1/2 -translate-x-1/2 top-2 transform transition-transform duration-700 ease-in-out",
                            i === Math.floor(seconds / 10) ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        )}
                            key={i}>{i}</span>
                    ))
                }
            </div>

            {/* Seconds (Ones) */}
            <div className="relative h-12 w-10 overflow-hidden text-2xl font-semibold">
                {
                    [...Array(10)].map((_, i) => (
                        <span className={clsx(
                            "absolute left-1/2 -translate-x-1/2 top-2 transform transition-transform duration-700 ease-in-out",
                            i === seconds % 10 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        )}
                            key={i}>{i}</span>
                    ))
                }
            </div>
        </div>

    )
}
