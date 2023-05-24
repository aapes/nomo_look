import React from 'react';
import Image from 'next/image';

const Mtestz = () => {
  return (
    <div style={{ opacity: 1 }}>
      <div className="flex justify-center gap-4" style={{ marginLeft: '24px', marginRight: '24px' }}>
        {/* Image Grid */}
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center relative mb-20">
        
        <Image 

            alt="Hotels"
            src="/images/home_kuda_b.png"
            width="1920"
            height="2888"
            className="duration-700 bg-transparent ease-in-out scale-100 blur-0 grayscale-0"
            loading="lazy"
          />
          <div className="w-full lg:w-4/5 xl:w-11/12 text-4vw lg:text-3vw xl:text-2.5vw 2xl:text-2vw text-font-700 pt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-right">
            <span className="text-white">在岛上水下5.8米处有一间餐厅 享受美味佳肴的同时，海底世界尽收眼底</span>
          </div>
          <div className="pt-0 pb-4 w-full lg:w-4/5 xl:w-11/12 text-5vw lg:text-4vw 2xl:text-3vw 3xl:text-2.5vw text-font-700 pt-2 absolute top-4/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-right">
            满足你一切浪漫
          </div>
        </div>
        {/* Add more image components as needed */}
      </div>
    </div>
  );
};

export default Mtestz;
