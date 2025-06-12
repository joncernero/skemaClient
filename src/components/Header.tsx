'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { HiArrowSmRight } from 'react-icons/hi';
import { IoHomeSharp } from 'react-icons/io5';
import SideBar from '@/components/Sidebar';
import { ModeToggle } from '@/components/ModeToggle';

const Header: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (): void => setOpen((prev) => !prev);

  useEffect(() => {
    // Check viewport width
    const checkWidth = (): void => {
      setIsDesktop(window.innerWidth >= 1064);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className='h-auto w-full z-50 py-6 lg:px-10 xl:px-5 relative font-bold'>
      {isDesktop ? (
        <nav className='flex justify-between items-center transition-opacity duration-500 animate-slide animate-appear'>
          <div className='z-50 flex items-center gap-x-2'>
            {/* <Image
              src='/assets/img/evergreen-jlbs-06 copy.png'
              alt='pineforestimage'
              sizes='10vw'
              width={0}
              height={0}
              style={{ width: '50px', height: '50px' }}
              priority
              className='z-40'
            /> */}
            <h2 className='z-50 text-xl'>SKEMA</h2>
          </div>

          <div className='z-50 flex flex-row items-center gap-x-8'>
            <ul className='flex gap-x-6 '>
              <li className='hover:text-slate-500 gap-x-2 flex items-center'>
                <IoHomeSharp className='size-4' /> HOME
              </li>
              <li className='hover:text-slate-500'>ABOUT US</li>
              <li className='hover:text-slate-500'>CONTACT</li>
            </ul>
            <button className='flex border-solid border-black border-2 px-10 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300'>
              START HERE
              <HiArrowSmRight className='rotate-45 size-5 ml-2' />
            </button>
            <ModeToggle />
          </div>
        </nav>
      ) : (
        <nav className='flex items-center py-2 px-4 justify-between transition-opacity duration-500 animate-slide animate-appear'>
          <div className='flex items-center'>
            {/* <Image
              src='/assets/img/evergreen-jlbs-06 copy.png'
              alt='evergreen_logo'
              sizes='10vw'
              width={0}
              height={0}
              style={{ width: '50px', height: '50px' }}
              priority
              className='z-40'
            /> */}
            <h2 className='z-40 ml-2'>SKEMA</h2>
          </div>

          <FaBars onClick={toggle} className='w-8 h-auto cursor-pointer' />
        </nav>
      )}

      {open && <SideBar toggle={toggle} />}
    </div>
  );
};

export default Header;
