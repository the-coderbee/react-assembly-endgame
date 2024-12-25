/* eslint-disable react/prop-types */
import { useTheme } from './ThemeContext';
import { SunIcon, MoonIcon, QuestionMarkCircleIcon } from '@heroicons/react/16/solid';

const Header = ({ toggleHowToModal }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="flex items-center justify-between px-4 py-2 border-b border-light-borderStrong dark:border-dark-borderStrong">
            <h1 className="text-xl font-semibold">Assembly Endgame</h1>
            <section className="flex gap-4">
                <button className="flex justify-center items-center gap-2 px-2 py-2 outline-none border rounded-md text-lg bg-light-buttonHowToPlay border-light-borderSubtle hover:bg-light-buttonHowToPlayHover text-light-textHowToPlay dark:bg-dark-buttonHowToPlay dark:border-dark-borderSubtle dark:hover:bg-dark-buttonHowToPlayHover dark:text-dark-textHowToPlay shadow-light-subtle dark:shadow-dark-subtle"
                    onClick={() => toggleHowToModal()}>
                    How to Play
                    <QuestionMarkCircleIcon className="h-6 w-6" />
                </button>
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary"
                >
                    {theme === 'light' ? (
                        <MoonIcon className="h-6 w-6" />
                    ) : (
                        <SunIcon className="h-6 w-6" />
                    )}
                </button>
            </section>
        </header>
    );
};

export default Header;
