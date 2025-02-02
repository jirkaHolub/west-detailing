"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('Failed to send email');
      }
    } catch (error) {
      setSuccessMessage('Failed to send email');
    }
  };

  return (
    <div className="bg-dark text-white relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative w-full h-full lg:h-auto lg:w-auto">
          <div className="absolute inset-0">
            <Image
              src="/Web-89.jpg"
              alt="Form"
              layout="fill"
              objectFit="cover"
              className="w-full h-full lg:w-auto lg:h-auto"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 sm:pb-32 lg:px-8 py-20"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div>West detailing</div>
            <div className="text-h2 font-extrabold pb-10">NAPIŠTE NÁM</div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6"
                >
                  JMÉNO
                </label>
                <div className=" mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-ferrariYellow sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  E-MAIL
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-ferrariYellow sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  ZPRÁVA
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-ferrariYellow sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-start">
              <Button type="submit" size="large">
                ODESLAT
              </Button>
            </div>
            {successMessage && (
              <div className="mt-4 text-sm font-semibold text-green-500">
                Zprává úspěšně odeslána. Co nejdříve se Vám ozveme.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}