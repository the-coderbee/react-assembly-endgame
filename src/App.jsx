import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import MainGame from './MainGame';
import HowToPlay from './components/HowToPlay';
import { useState } from 'react';

const App = () => {
  const [howToModalShown, setHowToModalShown] = useState(false)

  function toggleHowToModal() {
    setHowToModalShown(prev => !prev)
  }
  return (
    <ThemeProvider>
      <div className="relative min-h-screen font-mono transition duration-300 ease-in-out bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
        <HowToPlay howToModalShown={howToModalShown} toggleHowToModal={toggleHowToModal} />
        <Header toggleHowToModal={toggleHowToModal} />
        <MainGame />
      </div>
    </ThemeProvider>
  );
};

export default App;
