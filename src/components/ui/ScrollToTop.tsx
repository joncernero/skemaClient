'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      aria-hidden={!visible}
      className={`${
        visible ? 'visible' : 'invisible'
      } fixed bottom-10 right-10 z-50 rounded-full`}>
      <a
        href='#main-content'
        aria-label='Scroll to top'
        tabIndex={visible ? 0 : -1}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          scrollToTop();
        }}
        className='p-4 rounded-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500'>
        <FaChevronUp className='text-lg' aria-hidden='true' />
      </a>
    </motion.div>
  );
};

export default ScrollToTop;
