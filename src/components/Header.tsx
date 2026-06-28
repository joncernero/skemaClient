"use client";

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import SideBar from "@/components/Sidebar";
import { ModeToggle } from "@/components/ModeToggle";

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
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="absolute z-50 h-auto w-full py-4 font-bold lg:px-10 xl:px-5">
      {isDesktop ? (
        <nav className="animate-slide animate-appear mx-auto flex max-w-7xl items-center justify-between transition-opacity duration-500">
          <div className="z-50 flex items-center gap-x-2">
            <h2 className="z-50 text-lg leading-[0.85]">
              BLACK
              <br />
              WREN
              <br />
              DIGITAL
            </h2>
          </div>

          <div className="z-50 flex flex-row items-center gap-x-8">
            <ul className="flex gap-x-6">
              <li className="flex items-center gap-x-2 text-sm hover:text-slate-500">
                <Link href="/" className="flex items-center gap-x-2">
                  HOME
                </Link>
              </li>
              <li className="text-sm hover:text-slate-500">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ABOUT US
                </a>
              </li>
              <li className="text-sm hover:text-slate-500">
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  PRICING
                </a>
              </li>
              <li className="text-sm hover:text-slate-500">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <button className="flex bg-blue-500 px-8 py-1 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black">
              START HERE
              <HiArrowSmRight className="ml-2 size-5 rotate-45" />
            </button>
            <ModeToggle />
          </div>
        </nav>
      ) : (
        <nav className="animate-slide animate-appear flex items-center justify-between px-4 py-2 transition-opacity duration-500">
          <div className="flex items-center">
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
            <h2 className="z-40 ml-2">BUSINESS NAME</h2>
          </div>

          <FaBars onClick={toggle} className="h-auto w-8 cursor-pointer" />
        </nav>
      )}

      {open && <SideBar toggle={toggle} />}
    </div>
  );
};

export default Header;
