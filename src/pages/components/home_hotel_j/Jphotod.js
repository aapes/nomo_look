import React from 'react';
import Image from 'next/image';
const Jphotod = () => {
  return (
    <div style={{ opacity: 1 }}>
      <div className="flex justify-center gap-4">
        {/* Image Grid */}
        <div
          className="aspect-w-1 aspect-h-1 w-1/2 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center"
        >
          <Image
            alt="Hotels"
            src="/images/home_kuda_d.jpg"
            width="1920"
            height="2888"
            className="duration-700 bg-transparent ease-in-out scale-100 blur-0 grayscale-0"
            loading="lazy"
          />
          <div className="text-sm text-font-700 dark:text-font-500 pt-2">
            <a href="https://" className="hover:underline">宝格丽</a>
          </div>
        </div>
        
        <div
          className="aspect-w-1 aspect-h-1 w-1/2 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center"
        >
          <Image
            alt="Hotels"
            src="/images/home_kuda_d.jpg"
            width="1920"
            height="2888"
            className="duration-700 bg-transparent ease-in-out scale-100 blur-0 grayscale-0"
            loading="lazy"
          />
          <div className="text-sm text-font-700 dark:text-font-500 pt-2">
            <a href="https://" className="hover:underline">第二张图片</a>
          </div>
        </div>
        
        {/* Add more image components as needed */}
      </div>
      
      <div className="flex justify-center gap-4"> {/* New parent container */}
        {/* Image Grid */}
        <div
          className="aspect-w-1 aspect-h-1 w-1/2 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center"
        >
          <Image
            alt="Hotels"
            src="/images/home_kuda_d.jpg"
            width="1920"
            height="2888"
            className="duration-700 bg-transparent ease-in-out scale-100 blur-0 grayscale-0"
            loading="lazy"
          />
          <div className="text-sm text-font-700 dark:text-font-500 pt-2">
            <a href="https://" className="hover:underline">第三张图片</a>
          </div>
        </div>
        
        <div
          className="aspect-w-1 aspect-h-1 w-1/2 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center"
        >
          <Image
            alt="Hotels"
            src="/images/home_kuda_d.jpg"
            width="1920"
            height="2888"
            className="duration-700 bg-transparent ease-in-out scale-100 blur-0 grayscale-0"
            loading="lazy"
          />
          <div className="text-sm text-font-700 dark:text-font-500 pt-2">
            <a href="https://" className="hover:underline">第四张图片</a>
          </div>
        </div>
        
        {/* Add more image components as needed */}
      </div>
      
      <div className="flex flex-col items-center py-10">
        {/* Rest of the content */}
      </div>
    </div>
  );
};

export default Jphotod;