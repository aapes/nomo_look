import React from 'react';
import Image from 'next/image';

const Cphotoe = () => {
  return (
    <div className="flex flex-col flex-grow h-full bg-background-300 border-solid border-0 border-background-200 dark:border-background-600 dark:bg-background-800 rounded-xl px-6 lg:px-10 py-8 pt-12" style={{ opacity: 1 }}>
      <div className="float-left">
        <a href="https://example.com">
          <Image
            alt="Hotels"
            src="/images/hotels_b_.png?w=256&q=75"
            width={118}
            height={38}
            decoding="async"
            data-nimg="1"
            className="block dark:hidden"
            loading="lazy"
            style={{ outline: 'none', color: 'transparent' }}
          />
        </a>
        <a href="https://example.com">
          <Image
            alt="Hotels"
            src="/images/hotels_b_dark.png?w=256&q=75"
            width={118}
            height={38}
            decoding="async"
            data-nimg="1"
            className="hidden dark:block" 
            loading="lazy"
            style={{ outline: 'none', color: 'transparent' }}
          />
        </a>
      </div>
      <div className="w-full lg:w-4/5 xl:w-11/12 text-font-900 dark:text-font-100 tracking-wide text-xl lg:text-2xl leading-tight font-light pt-12">
        <span className="font-bold">Domestic hotels </span>  
      </div>
      <div className="pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
         in the design!
      </div>
      <div className="flex justify-between pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light text-black">
        <span className="flex items-center">
          <Image
            alt="Beijing"
            src="/images/home_d_.svg"
            width={28}
            height={28}
            className="mr-2"
          />
          <a href="ai">Beijing</a>
        </span>
        <span className="flex items-center">
          <Image
            alt="Shanghai"
            src="/images/home_d_.svg"
            width={28}
            height={28}
            className="mr-2"
          />
          <a href="ai">Shanghai</a>
        </span>

        <span className="flex items-center">
          <Image
            alt="Shanghai"
            src="/images/home_d_.svg"
            width={28}
            height={28}
            className="mr-2"
          />
          <a href="ai">Shanghai</a>
        </span>
        <span className="flex items-center">
          <Image
            alt="Shanghai"
            src="/images/home_d_.svg"
            width={28}
            height={28}
            className="mr-2"
          />
          <a href="ai">Shanghai</a>
        </span>
      </div>
      <div className="flex justify-between pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
        
      </div>
    </div>
  );
};

export default Cphotoe;
