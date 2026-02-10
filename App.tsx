import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import GlobalNetwork from './components/GlobalNetwork';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import News from './components/News';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <GlobalNetwork />
        <Testimonials />
        <Process />
        <News />
      </main>
      <Footer />
      
      <button 
        className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-xl rounded-full flex items-center justify-center z-50 text-slate-800 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        <i className="material-icons">{darkMode ? 'light_mode' : 'dark_mode'}</i>
      </button>
    </div>
  );
};

export default App;