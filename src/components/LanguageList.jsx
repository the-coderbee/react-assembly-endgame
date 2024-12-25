/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import languages from "../languages"
import clsx from "clsx"

export default function LanguageList({ wrongGuessCounter }) {
    const [lostLanguages, setLostLanguages] = useState(languages.map(() => false))

    useEffect(() => {
        setLostLanguages(prev => (
            prev.map((_, index) => index < wrongGuessCounter)
        ))
    }, [wrongGuessCounter])

    const languageElements = languages.map((lang, index) => {
        const isLost = lostLanguages[index]
        return (
            <span className={clsx(
                "relative px-4 py-1 rounded shadow-light-strong dark:shadow-dark-strong",
                lang.color,
                isLost && "opacity-40",
                isLost && "after:content-['💀'] after:absolute after:left-1/2 after:-translate-x-1/2 after:opacity-100"
            )}
                key={lang.name}>{lang.name}</span>
        )
    })

    return (
        <div className="flex flex-wrap justify-center gap-1 my-12">
            {languageElements}
        </div>
    )
}