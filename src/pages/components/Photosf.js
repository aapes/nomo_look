import React from "react";
import Image from "next/image";

const Photosf = () => {
  return (
    <div className="flex justify-between px-6 py-6 lg:px-12 xl:px-24 lg:py-24 2xl:py-32">
      <div className="flex flex-col">
        <div className="py-8">
          <Image
            src="/images/yuque_logo.svg"
            alt="yuque"
            width={80}
            height={43}
          />
        </div>

        <div className="text-font-900 w-full dark:text-font-900 tracking-wide text-xl lg:text-2xl leading-tight font-light pb-10">
          <span className="font-bold">Happy Travel</span>  is dedicated to providing global luxury travel services. We have established deep collaborations with numerous high-end hotel brands worldwide and offer competitive international flight options. Our goal is to provide the most cost-effective accommodation and flight services, ensuring that your travel experience is seamless and enjoyable. Travel with ease and happiness with Xichu Luxe Travel!
        </div>
        <div>
          <div className="pb-4 w-full font-light tracking-wide leading-relaxed antialiased text-font-900 dark:text-font-900">
          禧出乐行（HAPPY TRAVEL） 致力于全球高奢旅游服务。与全球众多高奢酒店品牌深度合作，同时拥有国际机票竞争力。提供最具性价比的住宿+机票服务，让您轻松、快乐出行！
          </div>
          
          <div className="flex items-center py-8">
            <div className="pr-4">
            <Image
        alt="alipay"
        src="/images/wechat_logo_dark.png"
        width={34}
        height={34}
        decoding="async"
        data-nimg="1"
        className="block dark:hidden"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
            </div>

            <div className="pr-4">
      <Image
        alt="alipay"
        src="/images/wechat_logo_.png"
        width={34}
        height={34}
        decoding="async"
        data-nimg="1"
        className="hidden dark:block"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
      </div>

            <div className="text-base w-full lg:w-1/3 font-light tracking-wide leading-relaxed antialiased text-font-700 dark:text-font-800">
              联系我们:
            </div>
            <div className="pr-4">
            <Image
        alt="logo"
        src="/images/avatar_img.png"
        width={34}
        height={34}
        decoding="async"
        data-nimg="1"
        className="block dark:hidden"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
            </div>
            <div className="pr-4">
           
      <Image
        alt="logo"
        src="/images/avatar_img.png"
        width={34}
        height={34}
        decoding="async"
        data-nimg="1"
        className="hidden dark:block"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
</div>
            <div className="text-base w-full lg:w-1/2 font-light tracking-wide leading-relaxed antialiased text-font-700 dark:text-font-800">
              客服电话:18046309515
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photosf;
