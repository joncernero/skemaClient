'use client'

import { useState } from 'react'
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'

const services = [
  'Website Package',
  'App Development',
  'API & Data Feeds',
  'Monthly Retainer',
  'Not sure yet',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    // Replace 'YOUR_FORM_ID' with your Formspree form ID
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)
    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <section
      id='contact'
      className='w-full min-h-screen grid place-items-center bg-white dark:bg-gray-900 py-10 sm:py-16 lg:py-24 px-4 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>

        {/* Left — Contact Info */}
        <div className='flex flex-col gap-8'>
          <div>
            <p className='text-sm font-bold tracking-widest text-gray-400 uppercase mb-3'>Get In Touch</p>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white'>
              Let's talk about <span className='text-blue-500'>your project.</span>
            </h2>
            <div className='w-10 h-1 bg-blue-500 rounded mt-6'></div>
          </div>

          <p className='text-base text-gray-500 dark:text-gray-400 leading-relaxed'>
            Whether you have a clear vision or just an idea, we'd love to hear from you. Fill out the form and we'll get back to you within one business day to set up a free consultation.
          </p>

          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-500 shrink-0'>
                <FiMail className='w-4 h-4' />
              </div>
              <div>
                <p className='text-xs text-gray-400 font-medium uppercase tracking-wide'>Email</p>
                <a href='mailto:hello@blackwrendigital.com' className='text-sm font-semibold text-slate-700 dark:text-white hover:text-blue-500 transition-colors'>
                  hello@blackwrendigital.com
                </a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-500 shrink-0'>
                <FiMapPin className='w-4 h-4' />
              </div>
              <div>
                <p className='text-xs text-gray-400 font-medium uppercase tracking-wide'>Location</p>
                <p className='text-sm font-semibold text-slate-700 dark:text-white'>Indianapolis, IN</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-500 shrink-0'>
                <FiClock className='w-4 h-4' />
              </div>
              <div>
                <p className='text-xs text-gray-400 font-medium uppercase tracking-wide'>Response Time</p>
                <p className='text-sm font-semibold text-slate-700 dark:text-white'>Within 1 business day</p>
              </div>
            </div>
          </div>

          <div className='flex gap-4 pt-2'>
            <a href='#' target='_blank' rel='noreferrer' className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors'>
              <BsLinkedin className='w-4 h-4' />
            </a>
            <a href='#' target='_blank' rel='noreferrer' className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors'>
              <FaGoogle className='w-4 h-4' />
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700'>
          {submitted ? (
            <div className='flex flex-col items-center justify-center h-full gap-4 py-16 text-center'>
              <div className='w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center'>
                <FiSend className='w-6 h-6 text-blue-500' />
              </div>
              <h3 className='text-xl font-bold text-slate-800 dark:text-white'>Message Sent!</h3>
              <p className='text-gray-500 dark:text-gray-400 text-sm max-w-xs'>
                Thanks for reaching out. We'll be in touch within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className='mt-2 text-sm text-blue-500 hover:underline'>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs font-bold text-slate-600 dark:text-gray-300 uppercase tracking-wide'>Name *</label>
                  <input
                    type='text'
                    name='name'
                    required
                    placeholder='Jane Smith'
                    className='rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs font-bold text-slate-600 dark:text-gray-300 uppercase tracking-wide'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='jane@company.com'
                    className='rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-bold text-slate-600 dark:text-gray-300 uppercase tracking-wide'>Phone <span className='text-gray-400 normal-case font-normal'>(optional)</span></label>
                <input
                  type='tel'
                  name='phone'
                  placeholder='(317) 555-0100'
                  className='rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-bold text-slate-600 dark:text-gray-300 uppercase tracking-wide'>I'm interested in *</label>
                <select
                  name='service'
                  required
                  className='rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value=''>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-bold text-slate-600 dark:text-gray-300 uppercase tracking-wide'>Tell us about your project *</label>
                <textarea
                  name='message'
                  required
                  rows={5}
                  placeholder="What are you looking to build? Any details about your timeline or budget are helpful too."
                  className='rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                className='flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300'>
                {loading ? 'Sending...' : (
                  <><FiSend className='w-4 h-4' /> Send Message</>
                )}
              </button>

              <p className='text-xs text-gray-400 text-center'>
                No spam. No commitments. Just a conversation.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
