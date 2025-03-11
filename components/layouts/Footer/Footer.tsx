import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 overflow-x-hidden py-[60px]">
      <div className="container p-4 md:p-8 w-full flex flex-col items-center justify-between gap-y-10">
        <div className="flex flex-col md:flex-row  gap-8 items-center justify-center">
          <h1 className="font-bold text-white text-2xl">Follow us:</h1>
          <div className="flex flex-row gap-x-5">
            <Link href="" passHref>
              <FaFacebook size={32} className="text-white" />
            </Link>
            <Link href="" passHref>
              <FaLinkedin size={32} className="text-white" />
            </Link>
          </div>
        </div>
        <Link
          href="https://maps.app.goo.gl/sRKzhhEgeYyMBJzq5"
          className="flex flex-col gap-y-3"
        >
          <h1 className="text-white text-center text-xl md:text-2xl font-semibold">
            Gainmax Group of Companies
          </h1>
          <h2 className="text-white text-center text-lg md:text-xl font-medium">
            246 Woodlands Industrial Park E5, Woodlands Bizhub Singapore 757305
          </h2>
        </Link>
        <div className="border-b-[2px] border-gray-300 w-full"></div>
        {/* Copyright */}
        <div className="flex flex-row ">
          <h1 className="text-white text-center text-lg md:text-xl font-medium">
            © 2021 Gainmax Group Pte Ltd All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
}
