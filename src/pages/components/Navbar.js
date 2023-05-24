


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center h-16 bg-white text-black relative shadow-sm font-mono border-0" role="navigation">
      <div className="inline-flex gap-16">
        <Link href="/">
          <span className="font-normal text-sm relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 after:opacity-100 hover:after:bg-black">About me</span>
        </Link>
        <Link href="/kudadoo">
          <span className="font-normal text-sm relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">Photos</span>
        </Link>
        <Link href="/cheval">
          <span className="font-normal text-sm relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">Hotels</span>
        </Link>
        <Link href="/TheRitzCarlton">
          <span className="font-normal text-sm relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">Air</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
