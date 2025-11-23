import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
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
    <div className="bg-deepBlue min-h-screen text-textLight selection:bg-accent selection:text-deepBlue">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgressBar />
          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;
