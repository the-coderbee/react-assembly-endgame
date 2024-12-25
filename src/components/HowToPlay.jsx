/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function HowToPlay({ howToModalShown, toggleHowToModal }) {
    return (
        <>
            {howToModalShown && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="rounded-lg px-8 py-6 w-5/6 max-w-xl text-left bg-light-secondaryBackground dark:bg-dark-secondaryBackground">
                        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
                        <h2>Welcome to Assembly Endgame! 🎮</h2>
                        <section className="my-4">
                            <p>
                                Your goal is to guess the hidden word letter by letter. Each incorrect guess removes one programming language from the list. Be careful once you're left with only Assembly, you lose the game! (Assembly is scary TBH)
                            </p>
                        </section>
                        <section className="my-4">
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Step 1:</span> Start by selecting a letter from the keyboard below.</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Step 2:</span> Use the "Hint" button for help (available only once per game).</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Step 3:</span> Keep guessing until you win or lose!</p>
                        </section>
                        <p>Good luck!</p>
                        <section className="my-4">
                            <h2 className="font-semibold text-lg mb-1">Game Rules</h2>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Objective:</span> Guess the hidden wordbefore you lose all but one programming language.</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Timer:</span> You have limited time to finish the game.</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Hint:</span> You can use the "Hint" button once per game to reveal a letter.</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Winning:</span> Reveal the entire word before time runs out or languages are lost.</p>
                            <p><span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Losing:</span> Lose the game if only Assembly is left or the timer runs out.</p>
                        </section>

                        <button
                            onClick={toggleHowToModal}
                            className="px-4 py-2 outline-none border rounded mt-4 bg-light-buttonHowToPlay border-light-borderSubtle hover:bg-light-buttonHowToPlayHover text-light-textHowToPlay dark:bg-dark-buttonHowToPlay dark:border-dark-borderSubtle dark:hover:bg-dark-buttonHowToPlayHover dark:text-dark-textHowToPlay shadow-light-subtle dark:shadow-dark-subtle"
                        >
                            Got It!
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}