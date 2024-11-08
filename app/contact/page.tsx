'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/partials/ContactForm/ContactForm';

export default function page() {
  return (
    <main className="">
      {/* section 1 */}
      <section className="relative w-full h-[110vh]] py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/contact/assets-contact-hero.webp')] bg-cover bg-center bg-no-repeat min-h-screen justify-center items-center overflow-x-hidden ">
        <div className="container flex flex-col lg:flex-row justify-between gap-x-16 max-w-[99rem] w-full items-center">
          <div className="flex flex-col gap-y-4 lg:w-[50%]">
            <h1 className="text-5xl font-bold text-gray-600">Contact Us</h1>
            <p className="text-xl text-gray-600 text-justify">
              All your feedback and comments are important as they help us develop the best service we possibly can. If you are looking to pop by for a visit, make a comment, or give us any feedback, you can find all the relevant details
              below. You may also write to us directly at admin@gainmax.net
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-4 lg:w-[70%]">
            {/* form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
