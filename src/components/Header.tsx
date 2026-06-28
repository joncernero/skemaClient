"use client";

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import SideBar from "@/components/Sidebar";

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
    <div className="fixed top-0 left-0 z-50 h-auto w-full border-b border-slate-700 bg-[#030712] py-2 font-bold lg:px-2">
      {isDesktop ? (
        <nav className="animate-appear mx-auto flex max-w-7xl items-center justify-between transition-opacity duration-500">
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
                  Home
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
                  About Us
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
                  Pricing
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
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="animate-appear flex items-center justify-between px-4 py-2 transition-opacity duration-500">
          <div className="flex items-center">
            <h2 className="z-50 text-lg leading-[0.85]">
              BLACK
              <br />
              WREN
              <br />
              DIGITAL
            </h2>
          </div>

          <FaBars onClick={toggle} className="h-auto w-8 cursor-pointer" />
        </nav>
      )}

      {open && <SideBar toggle={toggle} />}
    </div>
  );
};

export default Header;
