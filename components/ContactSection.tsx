import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check } from 'lucide-react';
import { Content } from '../types';
import { CONTACT_INFO } from '../constants';

interface ContactSectionProps {
  content: Content;
}

const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Email Card */}
      <div className="group relative p-8 bg-white/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-100/50 to-zinc-100/50 dark:from-red-900/20 dark:to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-400 group-hover:text-[#EA4335] transition-colors" />
            </div>
            <h3 className="text-lg font-serif text-zinc-900 dark:text-white mb-1">{content.sections.contact.emailLabel}</h3>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">{content.sections.contact.subtitle}</p>
          </div>

          <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-zinc-600 dark:text-zinc-300 font-mono hover:text-zinc-900 dark:hover:text-white transition-colors truncate mr-4">
              {CONTACT_INFO.email}
            </a>
            <button
              onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
              className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Copy Email"
            >
              {copied === 'email' ? <Check className="w-4 h-4 text-green-600 dark:text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* WeChat Card */}
      <div className="group relative p-8 bg-white/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-100/50 to-zinc-100/50 dark:from-green-900/20 dark:to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 text-zinc-400 dark:text-zinc-400 group-hover:text-[#07C160] transition-colors">
                <path fill="currentColor" d="M8.796 17.027H8.75c-1.153 0-2.254-.188-3.262-.53L2.65 17.92l.352-2.712C1.162 13.855 0 11.861 0 9.64c0-4.083 3.918-7.39 8.75-7.39c4.174 0 7.665 2.468 8.54 5.77a9 9 0 0 0-.6-.02c-4.364 0-8.19 3.037-8.19 7.11c0 .67.104 1.312.296 1.917M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5.5.007a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
                <path fill="currentColor" d="M21.874 19.52C23.187 18.405 24 16.863 24 15.16C24 11.758 20.754 9 16.75 9S9.5 11.758 9.5 15.161s3.246 6.161 7.25 6.161c.95 0 1.856-.155 2.686-.437l2.438 1.407zm-7.564-5.362a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4.88 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-zinc-900 dark:text-white mb-1">{content.sections.contact.wechatLabel}</h3>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">{content.sections.contact.subtitle}</p>
          </div>

          <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
            <span className="text-zinc-600 dark:text-zinc-300 font-mono select-all">
              {CONTACT_INFO.wechat}
            </span>
            <button
              onClick={() => handleCopy(CONTACT_INFO.wechat, 'wechat')}
              className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Copy WeChat ID"
            >
              {copied === 'wechat' ? <Check className="w-4 h-4 text-green-600 dark:text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;