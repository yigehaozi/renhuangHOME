import React from 'react';
import { Hash } from 'lucide-react';
import { DomainItem, Language } from '../types';
import { TAG_TRANSLATIONS } from '../constants';

interface DomainCardProps {
  domain: DomainItem;
  lang: Language;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain, lang }) => {
  return (
    <div className="group relative p-6 bg-white/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-xl hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm dark:shadow-none">

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500 blur" />

      {/* Price Overlay */}
      <div className="absolute inset-0 bg-zinc-900/80 dark:bg-zinc-950/90 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">
            {lang === 'en' ? 'Asking Price' : '参考价格'}
          </p>
          <p className="text-3xl font-bold text-white">
            ¥ {domain.price?.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="relative flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors uppercase">
              {domain.name}
            </span>
            <span className="text-xl text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors uppercase">
              .{domain.tld}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {domain.tags?.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-colors">
                {TAG_TRANSLATIONS[tag]?.[lang] || tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-all">
          <Hash className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default DomainCard;