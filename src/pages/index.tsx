import DigitalRain from '../components/digital-rain';
import RandomText from '../components/random-text';
import ProgrammerThoughts from '../components/programmer-thoughts';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function Home() {
  const [currentText, setCurrentText] = useState('This Web');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'This Web' ? 'I Am' : 'This Web');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .rotate-on-hover {
          transition: transform 0.6s ease-in-out;
        }
        .rotate-on-hover:hover {
          transform: rotate(360deg);
        }
      `}</style>
      <div className="fixed top-4 right-4 z-50 text-gray-200">
        <p className="text-lg font-medium">[ <span className='font-semibold text-blue-500'>{currentText}</span> Under Maintenance ]</p>
      </div>
      <div className="fixed bottom-4 left-4 z-50 text-gray-200">
        <p className="text-lg font-medium">[ 🚩 DEVIT ERLINGGA A ]</p>
      </div>
      <div className="fixed inset-0  z-10">
        <DigitalRain />
      </div>
      {/* <RandomText /> */}
      <ProgrammerThoughts />
      <div className="flex items-center justify-center min-h-screen relative z-40 ">
        <div className="flex flex-col items-center justify-center w-fit text-gray-200 z-20 relative">
          <h1 className="text-6xl font-bold mb-4 rotate-on-hover cursor-pointer">Welcome to My Web</h1>
          <p className="text-2xl mb-8 ">Explore my projects and skills</p>
          <Link href="/about" className="text-xl bounce-text text-cyan-100 font-semibold py-2 px-6 
                                      bg-white/5 backdrop-blur-sm border-b border-white/10
                                      hover:bg-white/10 hover:border-b-white/15 hover:scale-105
                                      transition-all duration-300 ease-in-out
                                      shadow-xl shadow-cyan-300/20
                                      active:scale-95">
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
}
