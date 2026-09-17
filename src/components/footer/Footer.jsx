import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 px-6 py-5 text-center backdrop-blur-xl">
      <div className="border-t border-gray-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:px-6 md:flex-row lg:px-8">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} QuoteFlow. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            Made for quote lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;