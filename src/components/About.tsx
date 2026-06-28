import React from "react";
import Image from "next/image";
import { FiMonitor, FiDatabase, FiCode } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="about grid h-screen place-items-center bg-gray-900 py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl leading-tight font-bold text-white md:text-4xl">
            What can we <span className="text-blue-500">build for you?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed">
            At Black Wren Digital we help businesses build scalable web
            solutions that make your vision a reality. Whether you need help
            setting up a website, bridging systems with an API, or looking to
            launch a custom web application Black Wren Digital can help. We work
            with you to understand your needs and goals, and then we build a
            custom solution that meets those needs and exceeds your
            expectations.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <Image
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
              role="presentation"
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

          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <FiMonitor
                  className="h-10 w-10 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl leading-tight font-semibold text-white md:mt-10">
                BUILD A WEBSITE
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Your online presence starts with a great website. We design and
                build fast, modern, mobile-friendly sites that reflect your
                brand and turn visitors into customers — from simple landing
                pages to full multi-page experiences.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <FiDatabase
                  className="h-10 w-10 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl leading-tight font-semibold text-white md:mt-10">
                API&apos;s &amp; DATA FEEDS
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Connect your tools, automate your workflows, and unlock the
                power of your data. We build and integrate APIs that let your
                systems talk to each other seamlessly — saving you time and
                eliminating manual work.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <FiCode
                  className="h-10 w-10 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl leading-tight font-semibold text-white md:mt-10">
                CUSTOM APPLICATIONS
              </h3>
              <p className="mt-4 text-base text-gray-600">
                When off-the-shelf software doesn&apos;t cut it, we build
                something made for you. From internal business tools to
                customer-facing platforms, we create scalable web applications
                tailored to how your business actually operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
