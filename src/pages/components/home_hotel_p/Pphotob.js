import React from 'react';
import Image from 'next/image';

const Pphotob = () => {
  return (
    <div style={{ opacity: 1 }}>
      <div className="flex justify-center gap-4" style={{ marginLeft: '24px', marginRight: '24px' }}>
        
        <div
          className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-background-500 dark:bg-background-700 flex flex-col items-center justify-center"
        >
          <Image 
            alt="Hotels"
            src="/images/home_kuda_c.webp"
            style={{ height: '800px', objectFit: 'cover', width: '100%' }}
            loading="lazy"
            width={1200} // 设置图像的宽度，可以根据需要调整具体的像素值
            height={800} // 设置图像的高度，可以根据需要调整具体的像素值
          />
          <div className="text-sm text-font-700 dark:text-font-500 pt-2">
            <a href="https://" className="hover:underline">宝格丽</a>
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

export default Pphotob;
