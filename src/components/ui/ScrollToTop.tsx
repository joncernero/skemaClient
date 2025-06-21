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
      className={`${
        visible ? 'visible' : 'invisible'
      } fixed bottom-10 right-10 z-50 rounded-full`}>
      <a
        href='#'
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          scrollToTop();
        }}
        className='p-4 rounded-full flex justify-center items-center transition-opacity duration-300'>
        <FaChevronUp className='text-lg' />
      </a>
    </motion.div>
  );
};

export default ScrollToTop;
