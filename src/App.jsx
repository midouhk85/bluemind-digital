import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-deepBlue min-h-screen text-black dark:text-textLight selection:bg-accent selection:text-deepBlue">
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <ScrollProgressBar />
            <Header />
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <About />
            <Contact />
            <WhatsAppButton />
            <Chatbot />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
