'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) alert('Email sent!');
    else alert('Error sending email');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-4xl m-auto py-[5rem]'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
          Contact Us!
        </h2>
        <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      <div className='py-[1rem]'>
        <div className=''>
          <label className='text-sm font-bold' htmlFor='full-name'>
            Full Name:
          </label>
        </div>
        <div className=''>
          <input
            className='border-2 w-full rounded-lg p-2'
            id='full-name'
            type='text'
            name='name'
            placeholder='Your Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className='py-[1rem]'>
          <div className=''>
            <label className='text-sm font-bold' htmlFor='email'>
              Email:
            </label>
          </div>
          <div className=''>
            <input
              className='border-2 w-full rounded-lg p-2'
              id='email'
              type='email'
              name='email'
              placeholder='Your Email'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='py-[1rem]'>
          <div className='text-sm'>
            <label className='text-sm font-bold' htmlFor='phone'>
              Phone:
            </label>
          </div>
          <div className=''>
            <input
              id='phone'
              className='border-2 w-full rounded-lg p-2'
              type='phone'
              name='phone'
              placeholder='(555) 555-5555'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='py-[1rem]'>
          <div className=''>
            <label className='text-sm font-bold' htmlFor='message'>
              Message:
            </label>
          </div>
          <div className=''>
            <textarea
              id='message'
              className='border-2 w-full rounded-lg p-2'
              name='message'
              placeholder='What can we help you with?'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='py-[1rem]'>
          <div className=''></div>
          <div className=''>
            <button
              className='flex bg-blue-500 text-white px-12 py-3 hover:bg-white hover:text-black transition-colors duration-300 font-bold rounded-full'
              type='submit'>
              SEND
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
