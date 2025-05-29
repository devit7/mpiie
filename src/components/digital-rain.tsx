"use client";

import {  useEffect, useRef } from "react";

const DigitalRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const characters = "田由甲申电甴男甸町画甶界畀畎畋畈畚畛畜畟畦畲畴畹畿疁疃疄疅疇疉疊疋疌疍疎疏";
        const fontSize = 16;
        let columns = Math.floor(window.innerWidth / fontSize);
        let drops: number[] = Array(columns).fill(1);

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(window.innerWidth / fontSize);
            drops = Array(columns).fill(1);
        };

        updateCanvasSize();

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#1e3a8a";
            ctx.font = `${fontSize}px `;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const handleResize = () => {
            updateCanvasSize();
        };

        window.addEventListener('resize', handleResize);
        const intervalId = setInterval(draw, 50);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-[#050516] ">
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>
        </>
    );
};

export default DigitalRain;
