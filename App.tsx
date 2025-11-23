import React, { useState, useEffect } from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import DomainCard from './components/DomainCard';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import BackToTop from './components/BackToTop';
import ScrollReveal from './components/ScrollReveal';
import { DOMAINS, CONTENT, PROJECTS_DATA } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update HTML class and localStorage when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const content = CONTENT[lang];
  const projects = PROJECTS_DATA[lang];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-200 transition-colors duration-500 selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white">

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-[8px] bg-white/70 dark:bg-zinc-950/30 border-b border-transparent dark:border-transparent transition-all duration-500">
        <div className="text-2xl font-bold font-display tracking-tighter text-zinc-900 dark:text-white">
          {content.nickname}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8 text-sm font-medium opacity-70 tracking-wide text-zinc-800 dark:text-zinc-300">
            <a href="#domains" className="hover:opacity-100 hover:text-black dark:hover:text-white transition-all">
              {content.nav.collections}
            </a>
            <a href="#projects" className="hover:opacity-100 hover:text-black dark:hover:text-white transition-all">
              {content.nav.projects}
            </a>
            <a href="#contact" className="hover:opacity-100 hover:text-black dark:hover:text-white transition-all">
              {content.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all backdrop-blur-md"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'ZH' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all backdrop-blur-md"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero content={content} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-20">

        {/* Domain Collection Section */}
        <ScrollReveal>
          <section id="domains" className="space-y-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-900 pb-6">
              <div>
                <h2 className="text-3xl font-serif text-zinc-900 dark:text-white mb-2 tracking-wide">
                  {content.sections.assets.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-500 font-light">
                  {content.sections.assets.subtitle}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-zinc-500 dark:text-zinc-600 text-sm font-mono">
                {DOMAINS.length} ASSETS
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOMAINS.map((domain) => (
                <DomainCard
                  key={`${domain.name}.${domain.tld}`}
                  domain={domain}
                  lang={lang}
                />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal>
          <section id="projects" className="space-y-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-900 pb-6">
              <div>
                <h2 className="text-3xl font-serif text-zinc-900 dark:text-white mb-2 tracking-wide">
                  {content.sections.projects.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-500 font-light">
                  {content.sections.projects.subtitle}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-zinc-500 dark:text-zinc-600 text-sm font-mono">
                {projects.length} PROJECTS
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto">
              {projects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <section id="contact" className="space-y-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-900 pb-6">
              <div>
                <h2 className="text-3xl font-serif text-zinc-900 dark:text-white mb-2 tracking-wide">
                  {content.sections.contact.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-500 font-light">
                  {content.sections.contact.subtitle}
                </p>
              </div>
            </div>

            <ContactSection content={content} />
          </section>
        </ScrollReveal>

      </main>

      <BackToTop />
      <Footer content={content} />
    </div>
  );
};

export default App;