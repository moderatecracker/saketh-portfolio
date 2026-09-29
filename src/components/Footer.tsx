import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/setusairam' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/setusairam-y/' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/itsSSR_10' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com' },
    // { name: 'Dev.to', icon: 'mdi:dev-to', url: 'https://dev.to' },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            {/* Currently working on Advanced Portfolio Management System */}
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                aria-label={link.name}
              >
                <Icon icon={link.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ by Setu Sai Ram Yarlagadda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;