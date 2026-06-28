"use client";

import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

interface SideBarProps {
  toggle: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ toggle }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the close button when sidebar opens
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <aside
      id="mobile-sidebar"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="absolute top-0 left-0 z-50 container flex h-screen w-full translate-x-0 transform justify-center bg-white py-5 transition-transform duration-300 ease-out dark:bg-gray-900"
    >
      <nav aria-label="Mobile navigation">
        <ul
          className="relative z-50 mt-[100px] flex h-full w-full flex-col items-center gap-y-4"
          role="list"
        >
          <li className="mb-[50px]">
            <button
              ref={closeButtonRef}
              onClick={toggle}
              aria-label="Close navigation menu"
              className="z-50 cursor-pointer rounded p-1 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <AiOutlineClose className="h-auto w-6" aria-hidden="true" />
            </button>
          </li>

          <li className="z-50 flex items-center gap-x-2 text-base font-bold text-black hover:text-slate-500 dark:text-white">
            <Link
              href="/"
              onClick={toggle}
              className="flex items-center gap-x-2 rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              HOME
            </Link>
          </li>
          <li className="z-50 font-bold text-black hover:text-slate-500 dark:text-white">
            <a
              href="#about"
              className="rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ABOUT US
            </a>
          </li>
          <li className="z-50 font-bold text-black hover:text-slate-500 dark:text-white">
            <a
              href="#pricing"
              className="rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              PRICING
            </a>
          </li>
          <li className="z-50 font-bold text-black hover:text-slate-500 dark:text-white">
            <a
              href="#contact"
              className="rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
