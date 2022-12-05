import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-[#161616]">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created with Love by{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Webdev Team 2022
          </Link>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark">
          Copyright © Sepuluh Nopember Institute of Technology, Information
          Systems Department 2022
        </span>
      </div>
    </>
  );
}

export default Footer;
