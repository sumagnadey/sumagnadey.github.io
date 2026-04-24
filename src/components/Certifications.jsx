import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Certifications.css';

const certifications = [
  { image: "/assets/PML.jpg", title: "Professional Machine Learning Engineer", category: "Google Cloud" },
  { image: "/assets/Google_Architact.jpg", title: "Professional Cloud Architect", category: "Google Cloud" },
  { image: "/assets/ACE.jpg", title: "Associate Cloud Engineer", category: "Google Cloud" },
  { image: "/assets/Udacity.jpg", title: "Deep Learning Nanodegree", category: "Courses" },
  { image: "/assets/HSBC_PB.jpg", title: "PAT on the Back Award (HSBC Technology India)", category: "Awards" },
  { image: "/assets/Bengalathon.jpg", title: "Grand Finale Qualifier (Bengalathon)", category: "Awards" },
  { image: "/assets/IITInternship.jpg", title: "Summer Research Intern in AI (IIT Kharagpur)", category: "Awards" },
  { image: "/assets/AIForMed.jpeg", title: "AI For Medicine", category: "Courses" },
  { image: "/assets/MLStanford.jpeg", title: "Machine Learning (Stanford)", category: "Courses" },
];

const AUTOPLAY_INTERVAL = 6000;

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      cancelAnimationFrame(progressRef.current);
      return;
    }
    let startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(updateProgress);
      }
    };
    progressRef.current = requestAnimationFrame(updateProgress);
    timerRef.current = setTimeout(() => { nextSlide(); }, AUTOPLAY_INTERVAL);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(progressRef.current);
    };
  }, [currentIndex, isPaused, nextSlide]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.92 }),
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
          <div className="cert-carousel-card">
            {/* Progress bar */}
            <div className="cert-progress-track">
              <div className="cert-progress-bar" style={{ width: `${progress}%` }} />
            </div>

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
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="cert-slide"
                >
                  <img
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].title}
                    className="cert-slide-img"
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

          {/* Indicator dots */}
          <div className="cert-indicators">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`cert-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
