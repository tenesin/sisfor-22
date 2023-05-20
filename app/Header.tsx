import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <nav className="bg-dark-grey-sisfor">
      <div className="container mx-auto flex justify-between">
        <Link href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SISFOR 22</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=" flex flex-col md:flex-row  md:text-sm md:font-medium md:border-0 md:bg-white  md:dark:bg-dark-grey-sisfor">
            <Link href="/" className="block font-bold  md:text-light-blue-sisfor md:p-0" aria-current="page">
              <li className="py-6 px-6">Home</li>
            </Link>
            <Link
              href="/isoturusangar"
              className="block text-white rounded hover:bg-light-blue-sisfor md:hover:bg-transparent md:border-0 md:hover:text-light-blue-sisfor md:p-0 dark:text-white md:dark:hover:text-light-blue-sisfor dark:hover:bg-gray-700 dark:hover:text-light-blue-sisfor md:dark:hover:bg-transparent"
            >
              <li className="py-6 px-6 dark:hover:bg-light-grey-sisfor">Iso Turu Sangar</li>
            </Link>
            <Link
              href="/kami"
              className="block text-white rounded hover:bg-light-blue-sisfor md:hover:bg-transparent md:border-0 md:hover:text-light-blue-sisfor md:p-0 dark:text-white md:dark:hover:text-light-blue-sisfor dark:hover:bg-gray-700 dark:hover:text-light-blue-sisfor md:dark:hover:bg-transparent"
            >
              <li className="py-6 px-6 dark:hover:bg-light-grey-sisfor ">Kami</li>
            </Link>
            <Link
              href="/team"
              className="block text-white rounded hover:bg-light-blue-sisfor md:hover:bg-transparent md:border-0 md:hover:text-light-blue-sisfor md:p-0 dark:text-white md:dark:hover:text-light-blue-sisfor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              <li className="py-6 px-6 dark:hover:bg-light-grey-sisfor">The Team</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
