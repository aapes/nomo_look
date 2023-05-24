import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col flex-grow h-full bg-background-300 border-solid border border-background-200 dark:border-background-600 dark:bg-background-800 rounded-xl px-6 lg:px-10 py-8 pt-12" style={{ opacity: 1 }}>
      <Image
        alt="alipay"
        src="/images/yuque_logo.svg"
        width={118}
        height={38}
        decoding="async"
        data-nimg="1"
        className="block dark:hidden"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
      <Image
        alt="alipay"
        src="/images/home_logo_dark.svg"
        width={118}
        height={38}
        decoding="async"
        data-nimg="1"
        className="hidden dark:block"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
      <div className="w-full lg:w-4/5 xl:w-11/12 text-font-900 dark:text-font-100 tracking-wide text-xl lg:text-2xl leading-tight font-light pt-12">
        <span className="font-bold">McDonald&apos;s </span> french fries are really delicious. I love them so much!
      </div>
      <div className="pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
        in the design!
      </div>
      <div className="flex pt-8 justify-between items-center">
        <div className="flex items-end">
          <Image
            alt="twitter"
            src="/images/home_alipay.jpg?w=1080&q=75"
            width={100}
            height={38}
            decoding="async"
            data-nimg="1"
            className="rounded-xl w-full"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </div> 
      </div>
    </div>
    
    

  );
};

export default Hero;



