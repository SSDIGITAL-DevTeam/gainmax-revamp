'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    enquiryType: '',
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-0">
        {/* Kolom Kiri */}
        <div className="space-y-4">
          {/* Dropdown Nature of Enquiry */}
          <div className="relative">
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md appearance-none pr-10" // Tambahkan padding kanan
              required
            >
              <option value="">Nature of Enquiry</option>
              <option value="customer">Customer's Inquiry</option>
              <option value="business">Business Collaboration</option>
              <option value="product">Product Inquiry</option>
              <option value="careers">Careers</option>
            </select>
            <span className="absolute right-3 top-3.5 text-white pointer-events-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </div>

          {/* Input untuk Nama */}
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md" required />

          {/* Input untuk Company Name */}
          <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md" required />

          {/* Input untuk Phone */}
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md" required />

          {/* Input untuk Email */}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md" required />
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-4">
          {/* Textarea untuk Message */}
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md h-[105px]" required />

          {/* Teks Persetujuan */}
          <div className="text-xs bg-gray-700/80 text-white p-2 rounded-md flex flex-row items-start gap-x-3">
            <input type="checkbox" />
            <p>
              By providing the information required in this form and clicking "Submit", you hereby consent to the collection, use, disclosure and/or processing of your personal data by Semicorp Industries Limited and its affiliates for
              purposes which are reasonably specified given the circumstances.
            </p>
          </div>

          {/* Tombol Submit */}
          <button type="submit" className="w-full bg-white text-gray-800 py-2 rounded-md hover:bg-gray-100 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
