'use client'
import React, { useState, useEffect } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

const words: string[] = [
  'AFFORDABLE',
  'SUSTAINABLE',
  'ACHIEVABLE',
  'ACCESSIBLE',
  'PRACTICAL'
]

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [wordVisible, setWordVisible] = useState<boolean>(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const cycle = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length)
        setWordVisible(true)
      }, 600)
    }, 4000)
    return () => clearInterval(cycle)
  }, [])

  const fadeBase = 'transition-all duration-700 ease-out'

  return (
    <main id='main-content' className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* Decorative dot pattern — hidden from assistive tech */}
      <div
        aria-hidden='true'
        className='absolute h-full w-full bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]'
      />

      <div className='w-full max-w-7xl flex flex-col gap-6 md:gap-12 px-4'>
        <p
          className={`${fadeBase} delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } font-bold text-center text-lg md:text-2xl`}>
          BRING YOUR COMPANY FORWARD
        </p>

        <h1
          className={`${fadeBase} delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center flex flex-col text-slate-750`}>
          {/* aria-live announces the changing word to screen readers */}
          <span
            aria-live='polite'
            aria-atomic='true'
            key={index}
            className={`inline-block text-blue-500 transition-all duration-500 ease-out ${
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
          } text-center text-base md:text-2xl font-bold max-w-3xl mx-auto leading-tight`}>
          We solve your digital challenges providing thoughtful solutions that drive real results. At Black Wren Digital we&apos;re dedicated to helping your business thrive in the digital age.
        </p>

        <div className='z-40 flex w-full gap-x-2 justify-center'>
          <a
            href='#contact'
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`${fadeBase} ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } flex items-center bg-blue-500 text-white px-10 py-2 hover:bg-white hover:text-black transition-colors duration-300 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}>
            GET STARTED <HiArrowSmRight className='rotate-45 size-5 ml-1' aria-hidden='true' />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
