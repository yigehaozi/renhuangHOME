import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [displayText, setDisplayText] = React.useState('');

  React.useEffect(() => {
    let currentIndex = 0;
    const text = content.role;
    setDisplayText(''); // Reset on content change

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, [content.role]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-200/40 dark:bg-zinc-800/10 rounded-full blur-[160px] transition-colors duration-500" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-200/40 dark:bg-blue-900/10 rounded-full blur-[100px] transition-colors duration-500" />
      </div>

      <div className="z-10 text-center space-y-8 animate-slide-up relative">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-600 transition-all duration-500">
            {content.nickname}
          </span>
        </h1>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent mx-auto my-8 transition-colors duration-500" />

        <p className="max-w-lg mx-auto text-zinc-600 dark:text-zinc-500 leading-relaxed font-light pt-2 transition-colors duration-500 text-lg min-h-[1.75rem]">
          {displayText}
          <span className="animate-pulse border-r-2 border-zinc-400 dark:border-zinc-500 ml-1">&nbsp;</span>
        </p>
      </div>

      <div className="absolute bottom-12 z-10 animate-bounce text-zinc-400 dark:text-zinc-700 transition-colors duration-500">
        <ArrowDown className="w-5 h-5 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;