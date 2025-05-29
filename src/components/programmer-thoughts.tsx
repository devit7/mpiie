'use client';

import { useState, useEffect } from 'react';

export default function ProgrammerThoughts() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [, setCurrentThoughtIndex] = useState(0);

    const programmerThoughts = [
        "// TODO: Fix this later... (6 months ago)",
        "99 little bugs in the code, 99 little bugs...",
        "It works on my local ¯\\_(ツ)_/¯ lol",
        "Console.log() or die()",
        "Ctrl+C, Ctrl+V - or nothing!",
        "Coding at 3 AM hits different",
        "When your code works but you don't know why",
        "/* This code is cursed, touch at your own risk */",
        "Stack Overflow: The real MVP",
        "Brain.exe has stopped working",
        "Debugging 9 hours only to find a missing semicolon",
        "When the client says 'just a small change' >//<",
        "React hooks got me hooked",
        "Git commit -m 'fixing: this mess'",
        "Responsive design? More like expensive design",
        "When you open your own code from 6 months ago"
    ];

    useEffect(() => {
        const startNewCycle = () => {
            // Set random position
            const x = Math.random() * (window.innerWidth - 400);
            const y = Math.random() * (window.innerHeight - 50);
            setPosition({ x, y });

            // Select random thought
            const randomIndex = Math.floor(Math.random() * programmerThoughts.length);
            setCurrentThoughtIndex(randomIndex);
            const currentThought = programmerThoughts[randomIndex];

            setDisplayedText('');
            setIsVisible(true);

            // Start typing animation
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex <= currentThought.length) {
                    setDisplayedText(currentThought.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    // Show completed text for 2 seconds, then hide and start new cycle
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(() => {
                            startNewCycle();
                        }, 800); // Wait for fade out transition
                    }, 2000); // Show completed text for 2 seconds
                }
            }, 80); // Type one character every 80ms
        };

        // Start the first cycle after a delay
        const initialDelay = setTimeout(() => {
            startNewCycle();
        }, 1500);

        return () => clearTimeout(initialDelay);
    }, []);

    return (
        <div
            className={`fixed z-20 text-green-400  text-lg font-semibold transition-opacity duration-700 pointer-events-none select-none ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                textShadow: '0 0 80px rgba(34, 197, 94, 1), 0 0 30px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.6)',
                maxWidth: '400px',
                wordWrap: 'break-word',
            }}
        >
            {displayedText}<span className="animate-pulse text-green-500">_</span>
        </div>
    );
}
