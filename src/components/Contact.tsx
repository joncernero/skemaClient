"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const services = [
  "Website Package",
  "App Development",
  "API & Data Feeds",
  "Monthly Retainer",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="grid min-h-screen w-full place-items-center border-t border-gray-100 bg-white px-4 py-10 sm:py-16 lg:py-24 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Left — Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-gray-400 uppercase">
              Get In Touch
            </p>
            <h2 className="text-3xl leading-tight font-bold text-slate-800 md:text-4xl dark:text-white">
              Let&apos;s talk about{" "}
              <span className="text-blue-500">your project.</span>
            </h2>
            <div className="mt-6 h-1 w-10 rounded bg-blue-500"></div>
          </div>

          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Whether you have a clear vision or just an idea, we&apos;d love to
            hear from you. Fill out the form and we&apos;ll get back to you
            within one business day to set up a free consultation.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-900">
                <FiMail className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                  Email
                </p>
                <a
                  href="mailto:contact@blackwrendigital.com"
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-500 dark:text-white"
                >
                  contact@blackwrendigital.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-900">
                <FiMapPin className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                  Location
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-white">
                  Indianapolis, IN
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-900">
                <FiClock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                  Response Time
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-white">
                  Within 1 business day
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
            >
              <BsLinkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
            >
              <FaGoogle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <FiSend className="h-6 w-6 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Message Sent!
              </h3>
              <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
                Thanks for reaching out. We&apos;ll be in touch within one
                business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-blue-500 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-gray-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-gray-300">
                  Phone{" "}
                  <span className="font-normal text-gray-400 normal-case">
                    (optional)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(317) 555-0100"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-gray-300">
                  I&apos;m interested in *
                </label>
                <select
                  name="service"
                  required
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-gray-300">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you looking to build? Any details about your timeline or budget are helpful too."
                  className="resize-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  aria-live="assertive"
                  className="text-center text-sm text-red-500"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-600 disabled:opacity-60"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="h-4 w-4" aria-hidden="true" /> Send
                    Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                No spam. No commitments. Just a conversation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
