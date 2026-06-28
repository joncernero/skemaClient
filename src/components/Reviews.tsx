"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Review {
  name: string;
  company: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Alice Johnson",
    company: "Tech Innovations",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Bob Smith",
    company: "Health Solutions",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    name: "Carol Tan",
    company: "Educational Insights",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 3,
  },
];

const Reviews: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === reviews.length ? 1 : prevIndex + 1,
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = (n: number): void => {
    setSlideIndex(n);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden px-8 md:px-0">
      <div className="w-full max-w-7xl overflow-hidden">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-y-2 ${
              slideIndex === index + 1 ? "block" : "hidden"
            }`}
          >
            <p className="px-5 py-12 text-center text-2xl leading-normal font-bold tracking-tight md:text-3xl">
              &ldquo;{review.review}&rdquo;
            </p>
            <div className="group flex items-center">
              <Image
                src="/assets/img/keys.jpg"
                alt="reviewer picture"
                sizes="25px"
                width={50}
                height={50}
                priority
                className="h-12 w-12 shrink-0 rounded-full"
              />
              <div className="mx-3">
                <p className="text-sm font-semibold group-hover:text-slate-500 md:text-2xl">
                  {review.name}
                </p>
                <p className="text-sm font-semibold group-hover:text-slate-500 md:text-2xl">
                  {review.company}
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-500">{"★".repeat(review.rating)}</p>
          </div>
        ))}
        <div className="mt-5 flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                slideIndex === index + 1 ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => currentSlide(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
