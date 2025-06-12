'use client';
import React, { useState, useEffect } from 'react';
import * as BsIcons from 'react-icons/bs';
// import Image from 'next/image';
import { HiArrowSmRight } from 'react-icons/hi';

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
    <main className='relative mx-6 h-[800px] flex items-center justify-center overflow-hidden'>
      <div className='relative z-40 w-full'>
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
            className={`${fadeBase} delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } flex justify-center border-2 border-blue-500 w-[150px] lg:w-[250px] px-2 py-2 lg:py-4 rounded-lg hover:bg-black hover:text-white text-center font-bold`}>
            START HERE <HiArrowSmRight className='rotate-45 size-5 ml-1' />
          </button>

          <button
            className={`${fadeBase} delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } flex justify-center border-2 border-blue-500 w-[150px] lg:w-[250px] px-2 py-2 lg:py-4 rounded-lg bg-blue-500 hover:bg-transparent hover:text-blue-500 text-black font-bold`}>
            LOGIN <HiArrowSmRight className='rotate-45 size-5 ml-1' />
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
