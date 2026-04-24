import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Github, MapPin, Atom, Zap, Sun, CloudRain, Snowflake, Cloud, CloudLightning } from 'lucide-react';
import './Hero.css';

const WeatherAnimation = ({ condition }) => {
  const getIcon = () => {
    switch (condition) {
      case 'rain': return <CloudRain size={120} className="weather-bio-icon rain" />;
      case 'snow': return <Snowflake size={120} className="weather-bio-icon snow" />;
      case 'cloudy': return <Cloud size={120} className="weather-bio-icon cloud" />;
      case 'thunderstorm': return <CloudLightning size={120} className="weather-bio-icon storm" />;
      default: return <Sun size={120} className="weather-bio-icon clear" />;
    }
  };

  return (
    <div className="weather-bio-container">
      {getIcon()}
    </div>
  );
};

const Hero = ({ darkTheme, weatherCondition }) => {
  const [greeting, setGreeting] = useState('');
  const location = 'Hyderabad, India';

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 5) setGreeting("Hello !");
    else if (hours < 12) setGreeting("Hi, Good Morning !");
    else if (hours === 12) setGreeting("Hi, Good Noon !");
    else if (hours < 16) setGreeting("Hi, Good Afternoon !");
    else if (hours < 18) setGreeting("Hi, Good Evening !");
    else if (hours < 21) setGreeting("Hi, Good Evening !");
    else setGreeting("Bonjour !");
  }, []);

  const roles = ["Quantum AI Engineer", "ML Researcher", "Published Researcher"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[currentRoleIndex];
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullRole.substring(0, currentText.length + 1));
      }, 80);
    }
    if (!isDeleting && currentText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle-dot" style={{
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 6}s`,
          }} />
        ))}
      </div>
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-container">
        {/* Profile Card — Clean & Minimal */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className={`hero-profile-card weather-card-${weatherCondition}`}>

          <div className="profile-img-container">
            <div className="profile-ring" />
            <div className="profile-ring-inner" />
            <img src="/assets/profile_pic.jpg" alt="Sumagna Dey" className="profile-img" />
          </div>

          <h2 className="profile-name">Sumagna Dey</h2>

          <div className="typewriter-container">
            <span className="typewriter-prompt">{'>'} </span>
            <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }} className="status-chip">
            <span className="status-dot" /><Atom size={14} /><span>HSBC Quantum Lab</span>
          </motion.div>

          <div className="social-links">
            <a href="https://www.facebook.com/sumagnadey/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="https://www.instagram.com/sumagnadey/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.linkedin.com/in/sumagnadey/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://github.com/sumagnadey" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><Github size={17} /></a>
          </div>
        </motion.div>

        {/* Bio Card */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="hero-bio-card">
          
          <WeatherAnimation condition={weatherCondition} />
          <h1 className="hero-greeting">{greeting}</h1>
          <p className="hero-text">
            I'm <strong>Sumagna Dey</strong> — a Quantum AI Engineer & ML Researcher at <strong>HSBC Quantum Lab</strong>. I specialize in the intersection of quantum computing and deep learning, building scalable AI pipelines and exploring quantum algorithms. With 14+ published research papers, I bring a unique blend of theoretical depth and engineering rigor to solving complex problems.
          </p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="location-info">
            <MapPin size={15} className="location-icon" /><span>{location}</span>
          </motion.div>
          
          <div className="hero-stats">
            <div className="hero-stat"><span className="stat-number">14+</span><span className="stat-label">Publications</span></div>
            <div className="stat-divider" />
            <div className="hero-stat"><span className="stat-number">5+</span><span className="stat-label">Prof Certs</span></div>
            <div className="stat-divider" />
            <div className="hero-stat"><span className="stat-number">4+</span><span className="stat-label">Years Exp</span></div>
          </div>
          <div className="hero-actions">
            <a href="https://drive.google.com/file/d/1wJ2gQfLC_L56hPMt1Izb2OTj-1Ey-ofc/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary"><Zap size={18} />View Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
