import React from 'react'
import Image from 'next/image'
import { FiMonitor, FiDatabase, FiCode } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about' className='about grid place-items-center h-screen py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-[#439cfb] via-[#f187fb] to-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
            WHAT CAN WE BUILD FOR YOU?
          </h2>
          <p className='max-w-5xl mx-auto mt-4 text-base leading-relaxed'>
           At Black Wren Digital we help businesses build scalable web solutions that make your vision a reality.  Whether you need help setting up a website, bridging systems with an API, or looking to launch a custom web application Black Wren Digital can help.  We work with you to understand your needs and goals, and then we build a custom solution that meets those needs and exceeds your expectations.
          </p>
        </div>
        <div className='relative mt-12 lg:mt-20'>
          <div className='absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28'>
            <Image
              className='w-full'
              src='https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg'
              alt=''
              role='presentation'
              width={0}
              height={0}
              priority
            />
            {/* <Image
          src='/assets/img/PineTreesEdited.png'
          alt='pineforestimage'
          sizes='100vw'
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
          priority
          className='object-cover'
        /> */}
          </div>

          <div className='relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12'>
            <div>
              <div className='flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow'>
                <FiMonitor className='w-10 h-10 text-blue-500' aria-hidden='true' />
              </div>
              <h3 className='mt-6 text-xl font-semibold leading-tight text-slate-800 dark:text-white md:mt-10'>
                BUILD A WEBSITE
              </h3>
              <p className='mt-4 text-base text-gray-600'>
                Your online presence starts with a great website. We design and build fast, modern, mobile-friendly sites that reflect your brand and turn visitors into customers — from simple landing pages to full multi-page experiences.
              </p>
            </div>

            <div>
              <div className='flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow'>
                <FiDatabase className='w-10 h-10 text-blue-500' aria-hidden='true' />
              </div>
              <h3 className='mt-6 text-xl font-semibold leading-tight text-slate-800 dark:text-white md:mt-10'>
                API&apos;s &amp; DATA FEEDS
              </h3>
              <p className='mt-4 text-base text-gray-600'>
                Connect your tools, automate your workflows, and unlock the power of your data. We build and integrate APIs that let your systems talk to each other seamlessly — saving you time and eliminating manual work.
              </p>
            </div>

            <div>
              <div className='flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow'>
                <FiCode className='w-10 h-10 text-blue-500' aria-hidden='true' />
              </div>
              <h3 className='mt-6 text-xl font-semibold leading-tight text-slate-800 dark:text-white md:mt-10'>
                CUSTOM APPLICATIONS
              </h3>
              <p className='mt-4 text-base text-gray-600'>
                When off-the-shelf software doesn&apos;t cut it, we build something made for you. From internal business tools to customer-facing platforms, we create scalable web applications tailored to how your business actually operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
