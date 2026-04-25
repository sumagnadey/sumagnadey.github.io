import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, MapPin, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import ParallaxBackground from './components/ParallaxBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Hyderabad, India');
  const [weatherCondition, setWeatherCondition] = useState('clear');

  // Initialize theme based on local time (from Angular)
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 5 || hours >= 18) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  // Live clock (from Angular time component)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch weather for Hyderabad
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true&timezone=auto');
        const data = await res.json();
        const code = data.current_weather.weathercode;

        let condition = 'clear';
        if ([1, 2, 3, 45, 48].includes(code)) condition = 'cloudy';
        else if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) condition = 'rain';
        else if ([71, 73, 75, 77, 85, 86].includes(code)) condition = 'snow';
        else if ([95, 96, 99].includes(code)) condition = 'thunderstorm';

        setWeatherCondition(condition);
      } catch (e) {
        console.error("Weather fetch failed:", e);
      }
    };
    fetchWeather();
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Footer social links — using local asset sources for reliability
  const footerLinks = [
    { name: 'LeetCode', url: 'https://leetcode.com/Sumagna007/', icon: '/assets/leetcode.png' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/sumagna_dey/', icon: '/assets/hackerrank.png' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=iFBk_AIAAAAJ&hl=en', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Sumagna-Dey', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1280px-ResearchGate_icon_SVG.svg.png' },
    { name: 'ORCID', url: 'https://orcid.org/0000-0001-5739-722X', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg' }
  ];

  return (
    <div className="app-container">
      <ParallaxBackground darkTheme={darkTheme} weatherCondition={weatherCondition} />
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />

      <main>
        <Hero darkTheme={darkTheme} weatherCondition={weatherCondition} />
        <Experience darkTheme={darkTheme} />
        <Education darkTheme={darkTheme} />
        <Skillset darkTheme={darkTheme} />
        <Projects darkTheme={darkTheme} />
        <Research darkTheme={darkTheme} />
        <Certifications darkTheme={darkTheme} />
        <Contact darkTheme={darkTheme} />
      </main>

      {/* Live Time & Location Widget */}
      <div className="time-widget">
        <Clock size={16} />
        <span>{formatTime(currentTime)}</span>
        <span className="time-separator" />
        <span>{formatDate(currentTime)}</span>
        {location && (
          <>
            <span className="time-separator" />
            <MapPin size={14} />
            <span>{location}</span>
          </>
        )}
      </div>

      {/* Footer with Social Links */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-social-links">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                title={link.name}
              >
                {link.icon ? (
                  <img src={link.icon} alt={link.name} />
                ) : (
                  <span className="footer-emoji">{link.emoji}</span>
                )}
              </a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="footer-powered"
          >
            Crafted with ❤️ Sumagna
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
