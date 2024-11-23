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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-0">
        {/* Kolom Kiri */}
        <div className="space-y-4">
          {/* Dropdown Nature of Enquiry */}
          <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} className="w-full bg-gray-700/80 text-white placeholder-gray-300 px-4 py-2.5 rounded-md" required>
            <option value="">Nature of Enquiry</option>
            <option value="customer">Customer's Inquiry</option>
            <option value="business">Business Collaboration</option>
            <option value="product">Product Inquiry</option>
            <option value="careers">Careers</option>
          </select>

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
