'use client';
import { HomeIcon, File, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ModeToggle';
// import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className='animate-slide h-12 p-2 border-b sticky top-0 z-20'>
      <div className='flex h-8 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <NavButton href='/home' label='Home' icon={HomeIcon} />
          <Link
            href='/home'
            className='flex justify-center items-center gap-2 ml-0'
            title='Home'>
            <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>
              Skema
            </h1>
          </Link>
        </div>
        <div className='flex items-center'>
          <NavButton href='/about' label='About' icon={File} />
          <NavButton href='/contact' label='Contact' icon={UsersRound} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
