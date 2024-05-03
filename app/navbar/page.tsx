import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
     <nav className="mt-4 fixed w-full z-1 bg-indigo-500">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex space-x-4">
                <Link href="/"> 
                    <Image
                      className="h-12 w-12"
                      src="/icon.png"
                      alt="Logo"
                      width={48}
                      height={48}
                    />
                  </Link>        
                <Link legacyBehavior href="/">
                  <a className="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link legacyBehavior href="./about">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                </Link>
                <Link legacyBehavior href="./contacts">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </Link>
                <Link legacyBehavior href="./services">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                </Link>
                <Link legacyBehavior href="./characters">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Characters</a>
                </Link>
                <Link legacyBehavior href="./weapons">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Weapons</a>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link legacyBehavior href="/login">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login/Signup</a>
                </Link>
                <Link legacyBehavior href="/logout">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</a>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-indigo-500 text-center p-4 mt-12">
        <p className="text-white">© {new Date().getFullYear()} Joart. All rights reserved.</p>
      </footer>
    </nav>
      );
    }

export default Navbar;