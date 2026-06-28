"use client";
import React, { useState, useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";

const words: string[] = [
  "AFFORDABLE",
  "SUSTAINABLE",
  "ACHIEVABLE",
  "ACCESSIBLE",
  "PRACTICAL",
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

  const fadeBase = "transition-all duration-700 ease-out";

  return (
    <main
      id="main-content"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Decorative dot pattern — hidden from assistive tech */}
      <div
        aria-hidden="true"
        className="absolute h-full w-full bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)] [background-size:16px_16px]"
      />

      <div className="flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12">
        <p
          className={`${fadeBase} delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          } text-center text-lg font-bold md:text-2xl`}
        >
          BRING YOUR COMPANY FORWARD
        </p>

        <h1
          className={`${fadeBase} delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          } text-slate-750 flex flex-col text-center text-4xl font-bold tracking-tighter md:text-7xl lg:text-8xl`}
        >
          {/* aria-live announces the changing word to screen readers */}
          <span
            aria-live="polite"
            aria-atomic="true"
            key={index}
            className={`inline-block text-blue-500 transition-all duration-500 ease-out ${
              wordVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            {words[index]}
          </span>{" "}
          DIGITAL <br /> SOLUTIONS
        </h1>

        <p
          className={`${fadeBase} delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          } mx-auto max-w-3xl text-center text-base leading-tight font-bold md:text-2xl`}
        >
          We solve your digital challenges providing thoughtful solutions that
          drive real results. At Black Wren Digital we&apos;re dedicated to
          helping your business thrive in the digital age.
        </p>

        <div className="z-40 flex w-full justify-center gap-x-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${fadeBase} ${
              mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            } flex items-center bg-blue-500 px-10 py-2 font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none`}
          >
            Get Started{" "}
            <HiArrowSmRight
              className="ml-1 size-5 rotate-45"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
