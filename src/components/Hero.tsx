'use client';
import React, { useState, useEffect } from 'react';
import * as BsIcons from 'react-icons/bs';
// import Image from 'next/image';
import { HiArrowSmRight } from 'react-icons/hi';
// import { cn } from '@/lib/utils';

const words: string[] = [
  'AFFORDABLE',
  'SUSTAINABLE',
  'ACHIEVABLE',
  'ACCESSIBLE',
  'PRACTICAL',
];

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [wordVisible, setWordVisible] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setWordVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  const fadeBase = 'transition-all duration-700 ease-out';

  return (
    <main className='relative w-full h-[45rem] flex items-center justify-center overflow-hidden mt-8'>
      <div className='relative h-full w-full'>
        <div className='absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]'></div>
        <p
          className={`${fadeBase} delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } mb-2 font-bold text-center text-lg md:text-3xl`}>
          BRING YOUR COMPANY FORWARD
        </p>

        <h1
          className={`${fadeBase} delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tighter text-center flex flex-col text-slate-750`}>
          <span
            key={index}
            className={`inline-block text-blue-500 transition-all duration-600 ease-out ${
              wordVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}>
            {words[index]}
          </span>{' '}
          DIGITAL <br /> SOLUTIONS
        </h1>

        <p
          className={`${fadeBase} delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } text-center text-md md:text-lg text-blue-400 max-w-2xl mx-auto leading-relaxed mb-6`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          harum odio blanditiis eaque, ratione recusandae ex ducimus rem, ut
          porro dignissimos laudantium, sunt consequuntur natus!
        </p>

        <div className='z-40 flex w-full gap-x-2 justify-center mb-6'>
          <button
            className={`${fadeBase}  ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } flex border-solid border-blue-500 bg-blue-500 border-2 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 font-bold`}>
            START HERE <HiArrowSmRight className='rotate-45 size-5 ml-1' />
          </button>
        </div>

        <div
          className={`${fadeBase} delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } flex flex-row gap-3 items-center justify-center z-40`}>
          <BsIcons.BsFacebook className='hover:text-slate-500 w-5 h-5' />
          <BsIcons.BsLinkedin className='hover:text-slate-500 w-5 h-5' />
          <BsIcons.BsInstagram className='hover:text-slate-500 w-5 h-5' />
          <BsIcons.BsTwitterX className='hover:text-slate-500 w-5 h-5' />
        </div>
      </div>

      {/* <div className='absolute inset-0 h-screen w-full overflow-hidden'>
        <Image
          src='/assets/img/PineTreesEdited.png'
          alt='pineforestimage'
          sizes='100vw'
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
          priority
          className='object-cover'
        />
      </div> */}

      {/* <div className='absolute inset-0 bg-gradient-to-tr from-white from-60% opacity-70 z-10'></div> */}
    </main>
  );
};

export default Hero;
