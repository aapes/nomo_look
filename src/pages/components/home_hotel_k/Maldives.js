import React from 'react';
import Image from 'next/image';

const Maldives = () => {
  return (
    <div className="bg-gray-100 flex flex-col flex-grow h-full bg-background-100 border-solid border border-background-100 rounded-xl px-6 lg:px-10 py-8 pt-12" style={{ marginLeft: '24px', marginRight: '24px' }}>
      <Image
        alt="alipay"
        srcSet="/images/home_alipay_icon.png?w=128&q=50 1x, /images/home_alipay_icon.png?w=256&q=50 2x"
        src="/images/home_alipay_icon.png?w=256&q=50"
        width="70"
        height="70"
        decoding="async"
        data-nimg="1"
        className="block"
        loading="lazy"
        style={{ color: 'transparent' }}
      />

      <div className="w-full lg:w-4/5 xl:w-11/12 tracking-wide pt-14">
        <span className="font-light text-black text-xl">马尔代夫库达度私人岛</span>
        <p className="font-extralight text-gray-700 text-sm">Kudadoo Maldives Private Island</p>

        <div className="pt-4 pb-2 text-sm font-light flex justify-center text-black">
          <div className="w-1/3">
            {/* First column */}
            <p className="break-normal md:break-all text-left">
              <span> </span>
              <a href="mailto:reservations@kudadoo.com" className="hover:no-underline hover:text-black-500 hover:font-normal">
                联系酒店
              </a>
            </p>
            <p className="font-light text-current text-left hover:font-normal">
              <span className="hover:underline cursor-pointer" onClick={() => window.open('https://caicaicai.me')}>
                酒店官网
              </span>
            </p>
          </div>
          <div className="w-1/3">
            {/* Second column */}
            <p className="break-words hover:font-normal">酒店星级:奢华6星级</p>
            <p className="break-words hover:font-normal">中文服务：有</p>
          </div>
          <div className="w-1/3">
            {/* Third column */}
            <p className="break-words hover:font-normal">浮潜等级:A级</p>
            <p className="break-words hover:font-normal">上岛时长:水上飞机40分钟</p>
          </div>
        </div>
      </div>

              <div className="my-20 pt-4 pb-20 text-sm font-light flex justify-between text-black flex-wrap-reverse">
  <div className="w-1/3">
    {/* First column */}
    <p className="break-normal md:break-all ... hover:font-normal">私密等级:极佳</p>
    <p className="font-light ... text-current hover:font-normal">环岛一周:20分钟
      
    </p>
  </div>
  <div className="w-1/3">
    {/* Second column */}
    <p className="break-words ... hover:font-normal">沙滩等级:A级</p>
    <p className="break-words ... hover:font-normal">开业时间:2018年11月</p>
  </div>
  <div className="w-1/3">
    {/* Third column */}
    <p className="break-words ... hover:font-normal">私人管家：有</p>
    <p className="break-words ... hover:font-normal">水屋间数:15间</p>
  </div>
</div>

    </div>
  );
};

export default Maldives;
