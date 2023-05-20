import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="md:px-6 md:py-8 bg-dark-grey-sisfor ">
        <div className="container mx-auto flex justify-between">
          <div>
            <span className="block text-sm text-white sm:text-left">
              Created with Love by{' '}
              <Link href="https://flowbite.com/" className="hover:underline text-light-blue-sisfor">
                Webdev Team 2022
              </Link>
            </span>
            <span className="block text-sm text-white sm:text-left dark">Copyright © Sepuluh Nopember Institute of Technology, Information Systems Department 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/instagram.svg" width={24} height={24} alt="Picture of the author" />
            <p className="text-white text-sm ">@sisforits22</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
