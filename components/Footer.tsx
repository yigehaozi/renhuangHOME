import React from 'react';
import { DOMAIN_NAME } from '../constants';
import { Content } from '../types';

interface FooterProps {
  content: Content;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-900 mt-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-zinc-500 dark:text-zinc-600 text-sm">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} {DOMAIN_NAME}. {content.footer.rights}</p>
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer transition-colors">{content.footer.contact}</span>
          <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer transition-colors">{content.footer.terms}</span>
          <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer transition-colors">{content.footer.privacy}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;