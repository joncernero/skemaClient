'use client'

import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoHomeSharp } from 'react-icons/io5'
import * as BsIcons from 'react-icons/bs'
// import Image from 'next/image';

interface SideBarProps {
  toggle: () => void
}

const SideBar: React.FC<SideBarProps> = ({ toggle }) => {
  return (
    <aside className='container absolute top-0 left-0 flex justify-center py-5 bg-white h-screen z-50 w-full transition-transform duration-300 ease-out transform translate-x-0'>
      <ul className='relative mt-[100px] flex flex-col items-center gap-y-4 z-50 h-full w-full'>
        <li className='mb-[50px]'>
          <AiOutlineClose
            onClick={toggle}
            className='z-50 w-6 h-auto cursor-pointer'
          />
        </li>

        <li className='mb-[50px]'>
          {/* <Image
            src='/assets/img/evergreen-jlbs-06 copy.png'
            alt='pineforestimage'
            sizes='10vw'
            width={100}
            height={100}
            priority
            className='z-40'
          /> */}
        </li>

        <li className='hover:text-slate-500 text-black font-bold flex items-center gap-x-2 text-base z-50'>
          <IoHomeSharp className='w-5 h-auto' /> HOME
        </li>
        <li className='hover:text-slate-500 text-black font-bold z-50'>
          ABOUT US
        </li>
        <li className='hover:text-slate-500 text-black font-bold z-50'>
          CONTACT
        </li>

        <div className='flex flex-row gap-x-4 mt-20'>
          <li className='z-50'>
            <BsIcons.BsFacebook className='hover:text-slate-500 w-5 h-auto' />
          </li>
          <li className='z-50'>
            <BsIcons.BsLinkedin className='hover:text-slate-500 w-5 h-auto' />
          </li>
          <li className='z-50'>
            <BsIcons.BsInstagram className='hover:text-slate-500 w-5 h-auto' />
          </li>
        </div>
      </ul>
    </aside>
  )
}

export default SideBar
