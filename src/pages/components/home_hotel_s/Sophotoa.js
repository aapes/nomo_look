import React from "react";
import Image from 'next/image';


function Sophotoa() {
  return (
    <div className="flex justify-center items-center h-screen" style={{marginLeft: '24px', marginRight: '24px'}}>
      <div className="text-center">
        <div className="page-title font-extralight text-5xl text-green-400">
        索尼娃贾尼
        </div>
        <div className="w-full lg:w-8/12 mx-auto">
          <p className="page-dec text-black">
          Soneva Jani Maldives 
          </p>
          <div className="w-full lg:w-4/20 text-left md:text-justify ...">
            <p className="text-base md:text-lg ... text-gray-900 flex font-light mt-20 md:mb-20">
            索尼娃贾尼岛，一个拥有奢华六星级设计和独特水滑梯的度假天堂。在这里，您将享受宽敞的房间和私人泳池，完善的设施和周到的服务，以及令人惊叹的沙滩和浮潜体验。无论是家庭度假还是蜜月旅行，这个岛屿都将为您提供难忘的假期
            </p>
          </div>
         

          <p class="font-extralight hover:font-normal text-black text-2xl">
满足你一切浪漫
</p>   
<p class="font-extralight hover:font-normal text-black text-2xl py-10">
在岛上水下5.8米处有一间餐厅
</p>        

<p class="font-extralight hover:font-normal text-black text-2xl">
享受美味佳肴的同时，海底世界尽收眼底
</p>  
    

            <div className="pt-4 pb-2 text-sm font-light flex justify-between text-black flex-wrap-reverse">
  <div className="w-1/3">
    {/* First column */}
    <p className="break-normal md:break-all ... hover:font-normal">酒店电话:+960 6566666</p>
    <p className="font-light ... text-current hover:underline">
      
      <a
        href="https://soneva.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-current hover:underline hover:font-normal"
      >
        访问酒店官网
      </a>
    </p>
  </div>
  <div className="w-1/3">
    {/* Second column */}
    <p className="break-words ... hover:font-normal">岛屿主题:蜜月、亲子</p>
    <p className="break-words ... hover:font-normal">中文服务：支持</p>
  </div>
  <div className="w-1/3">
    {/* Third column */}
    <p className="break-words ... hover:font-normal">上岛时间：水上飞机30分钟</p>
    <p className="break-words ... hover:font-normal">沙滩等级:A级</p>
  </div>
</div>


      
    </div>
    </div>
    </div>
    
  );
}

export default Sophotoa;