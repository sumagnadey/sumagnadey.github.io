import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Certifications.css';

const certifications = [
  { image: "/assets/QCTRL_Quantum_Professional.png", title: "Quantum Professional", category: "Q-CTRL" },
  { image: "/assets/Oracle_Generative_AI.png", title: "Oracle Generative AI", category: "Oracle" },
  { image: "/assets/PML.jpg", title: "Professional Machine Learning Engineer", category: "Google Cloud" },
  { image: "/assets/Google_Architact.jpg", title: "Professional Cloud Architect", category: "Google Cloud" },
  { image: "/assets/ACE.jpg", title: "Associate Cloud Engineer", category: "Google Cloud" },
  { image: "/assets/Udacity.jpg", title: "Deep Learning Nanodegree", category: "Courses" },
  { image: "/assets/HSBC_PB.jpg", title: "PAT on the Back Award (HSBC Technology India)", category: "Awards" },
  { image: "/assets/Bengalathon.jpg", title: "Grand Finale Qualifier (Bengalathon)", category: "Awards" },
  { image: "/assets/IITInternship.jpg", title: "Summer Research Intern in AI (IIT Kharagpur)", category: "Awards" },
  { image: "/assets/ICCE_Conference_Certificate.jpeg", title: "ICCE Conference Certificate", category: "ICCE" },
  { image: "/assets/AIForMed.jpeg", title: "AI For Medicine", category: "Courses" },
  { image: "/assets/MLStanford.jpeg", title: "Machine Learning (Stanford)", category: "Courses" },
];

const AUTOPLAY_INTERVAL = 5000;

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay with simple setTimeout (no rAF loop)
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Awards & <span className="text-gradient">Certifications</span></h2>
          <p className="section-subtitle">Professional achievements and learning milestones</p>
        </div>

        <div
          className="cert-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main carousel card */}
          <div
            className="cert-carousel-card"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation buttons */}
            <button className="cert-nav-btn cert-nav-prev" onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button className="cert-nav-btn cert-nav-next" onClick={nextSlide} aria-label="Next">
              <ChevronRight size={20} />
            </button>

            {/* Slide viewport */}
            <div className="cert-viewport">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="cert-slide"
                >
                  <img
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].title}
                    className="cert-slide-img"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title overlay */}
            <div className="cert-title-bar">
              <span className="cert-category-tag">{certifications[currentIndex].category}</span>
              <h3 className="cert-slide-title">{certifications[currentIndex].title}</h3>
            </div>

            {/* Counter */}
            <div className="cert-counter">
              {currentIndex + 1} / {certifications.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="cert-thumbnails">
            {certifications.map((cert, index) => (
              <button
                key={index}
                className={`cert-thumb ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${cert.title}`}
              >
                <img src={cert.image} alt="" loading="lazy" />
                <div className="cert-thumb-overlay" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
