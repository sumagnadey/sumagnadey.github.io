import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Home, Briefcase, GraduationCap, Code, Award, Mail, BookOpen, Layers } from 'lucide-react';
import clsx from 'clsx';
import './Navbar.css';

const navLinks = [
  { name: 'Home', id: 'hero', icon: <Home size={16} /> },
  { name: 'Experience', id: 'experience', icon: <Briefcase size={16} /> },
  { name: 'Education', id: 'education', icon: <GraduationCap size={16} /> },
  { name: 'Skills', id: 'skillset', icon: <Layers size={16} /> },
  { name: 'Projects', id: 'projects', icon: <Code size={16} /> },
  { name: 'Research', id: 'research', icon: <BookOpen size={16} /> },
  { name: 'Awards', id: 'certifications', icon: <Award size={16} /> },
  { name: 'Contact', id: 'contact', icon: <Mail size={16} /> },
];

const Navbar = ({ darkTheme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar — wrapped in a centering div to avoid transform conflict */}
      <div className="floating-nav-desktop">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        >
          <div className="nav-pill">
            <ul className="nav-items">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={clsx('nav-link-item', { active: activeSection === link.id })}
                    aria-label={link.name}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-text">{link.name}</span>

                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="active-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
              <li className="theme-toggle-container">
                <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
                  <motion.div
                    key={darkTheme ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkTheme ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navbar Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={clsx('mobile-nav-header', { 'mobile-scrolled': isScrolled })}
      >
        <div className="mobile-nav-container">
          <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
            <img src="/assets/favicon.ico" alt="SD" className="mobile-header-logo" />
          </a>
          <span className="mobile-nav-title">Sumagna Dey</span>
          <div className="mobile-controls">
            <button onClick={toggleTheme} className="theme-btn-mobile" aria-label="Toggle Theme">
              {darkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mobile-menu-overlay"
            >
              <ul className="mobile-menu-items">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${link.id}`}
                      className={clsx('mobile-menu-link', { active: activeSection === link.id })}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      <span className="mobile-icon">{link.icon}</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
