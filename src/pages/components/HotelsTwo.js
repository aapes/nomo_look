
import React from 'react';

const HotelsTwo = () => {
  return (
    <div className="flex flex-col flex-grow h-full bg-background-300 border-solid border-0 border-background-200 dark:border-background-600 dark:bg-background-800 rounded-xl px-6 lg:px-10 py-8 pt-12" style={{ opacity: 1 }}>
      <div className="float-left">
        
      </div>
      <div className="w-full lg:w-4/5 xl:w-11/12 text-font-900 dark:text-font-100 tracking-wide text-xl lg:text-2xl leading-tight font-light pt-12">
        <span className="font-bold">国内酒店 </span>  
      </div>
      <div className="pt-0 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
      Domestic hotels
      </div>
      <div className="flex justify-between pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
        <span><a href="https://example.com">北京</a></span>
        <span><a href="https://example.com">上海</a></span>
        <span><a href="https://example.com">三亚</a></span>
        <span><a href="https://example.com">厦门</a></span>
      </div>
      <div className="flex justify-between pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
        <span style={{ display: 'block' }}><a href="https://example.com">杭州</a></span>
        <span style={{ display: 'block' }}><a href="https://example.com">广州</a></span>
        <span style={{ display: 'block' }}><a href="https://example.com">深圳</a></span>
        <span style={{ display: 'block' }}><a href="https://example.com">南京</a></span>
      </div>
      <div className="flex justify-between pt-8 pb-4 w-full text-base dark:text-font-500 text-font-500 font-light">
        <span style={{ display: 'block' }}><a href="https://example.com">西安</a></span>
        <span style={{ display: 'block' }}><a href="https://example.com">青岛</a></span>
      </div>
    </div>
  );
};

export default HotelsTwo;  