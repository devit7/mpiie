'use client';

import { useState, useEffect } from 'react';

export default function RandomText() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Devit Erlingga🚩';

    useEffect(() => {
        const startNewCycle = () => {
            // Set random position
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 50);
            setPosition({ x, y });
            setDisplayedText('');
            setIsVisible(true);

            // Start typing animation
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                    setDisplayedText(fullText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    // Show completed text for 1 second, then hide and start new cycle
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(() => {
                            startNewCycle();
                        }, 500); // Wait for fade out transition
                    }, 1000); // Show completed text for 1 second
                }
            }, 100); // Type one character every 100ms
        };

        // Start the first cycle
        startNewCycle();
    }, []);

    return (
        <div
            className={`fixed z-30 text-white  text-lg font-semibold transition-opacity duration-500 pointer-events-none select-none ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                textShadow: '0 0 80px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)',
            }}
        >
            {displayedText}<span className="animate-pulse">|</span>
        </div>
    );
}
