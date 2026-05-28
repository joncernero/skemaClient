'use client'

import React, { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoHomeSharp } from 'react-icons/io5'
import Link from 'next/link'

interface SideBarProps {
  toggle: () => void
}

const SideBar: React.FC<SideBarProps> = ({ toggle }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus the close button when sidebar opens
  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  return (
    <aside
      id='mobile-sidebar'
      role='dialog'
      aria-modal='true'
      aria-label='Navigation menu'
      className='container absolute top-0 left-0 flex justify-center py-5 bg-white dark:bg-gray-900 h-screen z-50 w-full transition-transform duration-300 ease-out transform translate-x-0'>
      <nav aria-label='Mobile navigation'>
        <ul className='relative mt-[100px] flex flex-col items-center gap-y-4 z-50 h-full w-full' role='list'>
          <li className='mb-[50px]'>
            <button
              ref={closeButtonRef}
              onClick={toggle}
              aria-label='Close navigation menu'
              className='z-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1'>
              <AiOutlineClose className='w-6 h-auto' aria-hidden='true' />
            </button>
          </li>

          <li className='hover:text-slate-500 text-black dark:text-white font-bold flex items-center gap-x-2 text-base z-50'>
            <Link
              href='/'
              onClick={toggle}
              className='flex items-center gap-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'>
              <IoHomeSharp className='w-5 h-auto' aria-hidden='true' /> HOME
            </Link>
          </li>
          <li className='hover:text-slate-500 text-black dark:text-white font-bold z-50'>
            <a
              href='#about'
              className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
              onClick={(e) => { e.preventDefault(); toggle(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              ABOUT US
            </a>
          </li>
          <li className='hover:text-slate-500 text-black dark:text-white font-bold z-50'>
            <a
              href='#pricing'
              className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
              onClick={(e) => { e.preventDefault(); toggle(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>
              PRICING
            </a>
          </li>
          <li className='hover:text-slate-500 text-black dark:text-white font-bold z-50'>
            <a
              href='#contact'
              className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
              onClick={(e) => { e.preventDefault(); toggle(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
