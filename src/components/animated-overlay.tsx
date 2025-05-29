import React from 'react';

const AnimatedOverlay = () => {
    return (
        <>
            {/* Background Light Effects */}
            <div className="absolute inset-0 pointer-events-none  overflow-hidden">
                {/* Main ambient glow with random floating animation */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    style={{
                        animation: 'randomFloat1 12s ease-in-out infinite, colorShift 8s linear infinite, randomScale1 15s ease-in-out infinite'
                    }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
                    style={{
                        animation: 'randomFloat2 18s ease-in-out infinite, colorShift2 10s linear infinite, randomRotate1 25s linear infinite'
                    }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 via-transparent to-transparent rounded-full"
                    style={{
                        animation: 'randomOrbit 30s linear infinite, pulse 4s ease-in-out infinite, randomScale2 20s ease-in-out infinite'
                    }}></div>

                {/* Accent lights with random movement */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"
                    style={{
                        animation: 'randomBounce 7s ease-in-out infinite, colorShift3 6s linear infinite, randomDrift1 14s ease-in-out infinite'
                    }}></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500/15 rounded-full blur-2xl"
                    style={{
                        animation: 'randomFloat3 16s ease-in-out infinite, randomScale3 11s ease-in-out infinite, randomRotate2 22s linear infinite'
                    }}></div>

                {/* Additional random floating lights */}
                <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"
                    style={{
                        animation: 'randomSpiral1 20s linear infinite, colorShift4 9s linear infinite'
                    }}></div>
                <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-green-400/12 rounded-full blur-3xl"
                    style={{
                        animation: 'randomWave 13s ease-in-out infinite, randomScale4 17s ease-in-out infinite'
                    }}></div>

                {/* Subtle grid overlay with breathing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5"
                    style={{
                        animation: 'breathe 12s ease-in-out infinite, randomShift 25s ease-in-out infinite'
                    }}></div>
            </div>
        </>
    );
};

export default AnimatedOverlay;
