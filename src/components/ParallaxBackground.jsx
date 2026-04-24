import React from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = ({ darkTheme, weatherCondition }) => {
    return (
        <div className={`parallax-container ${darkTheme ? 'dark' : 'light'} weather-${weatherCondition}`}>
            {/* Deep space nebula layers (Dark Mode Only) */}
            <div className={`nebula-layer nebula-1 ${!darkTheme ? 'hidden' : ''}`} />
            <div className={`nebula-layer nebula-2 ${!darkTheme ? 'hidden' : ''}`} />
            <div className={`nebula-layer nebula-3 ${!darkTheme ? 'hidden' : ''}`} />

            {/* Star fields at different depths */}
            <div className={`stars-layer-1 ${!darkTheme ? 'hidden' : ''}`} />
            <div className={`stars-layer-2 ${!darkTheme ? 'hidden' : ''}`} />
            <div className={`stars-layer-3 ${!darkTheme ? 'hidden' : ''}`} />

            {/* Shooting stars - only show if clear and dark mode */}
            {darkTheme && weatherCondition === 'clear' && (
                <>
                    <div className="shooting-star shooting-star-1" />
                    <div className="shooting-star shooting-star-2" />
                    <div className="shooting-star shooting-star-3" />
                </>
            )}

            {/* Cosmic dust */}
            <div className={`cosmic-dust ${!darkTheme ? 'hidden' : ''}`} />

            {/* Light Mode Specific Elements (Fluid Glass Morphing) */}
            {!darkTheme && (
                <>
                    <div className="light-blob light-blob-1" />
                    <div className="light-blob light-blob-2" />
                    <div className="light-blob light-blob-3" />
                </>
            )}

            {/* Dynamic Weather Elements (Universal for both modes) */}
            {weatherCondition === 'rain' && <div className="weather-effect rain" />}
            {weatherCondition === 'snow' && <div className="weather-effect snow" />}
            {weatherCondition === 'cloudy' && <div className="weather-effect cloudy" />}
            {weatherCondition === 'thunderstorm' && (
                <>
                    <div className="weather-effect rain" />
                    <div className="weather-effect lightning" />
                </>
            )}
        </div>
    );
};

export default ParallaxBackground;
