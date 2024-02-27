'use client';

import React from 'react';
import toast from 'react-hot-toast';

export default function ContactUs() {
  return (
    <div className="mt-auto flex flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-bold text-gray-700">Contact Us</h1>
      <form className="w-64">
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="message"
            placeholder="Your message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => toast.success('Message sent!')}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
