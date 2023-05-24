import React from "react";
import Image from 'next/image';


function Mtext() {
  return (
    <div className="flex justify-center items-center h-screen mt-20" style={{marginLeft: '24px', marginRight: '24px'}}>
      <div className="text-center">
        <div className="page-title font-normal text-3xl text-gray-900">
        The Romantic Guide to Life
        </div>
        <div className="w-full lg:w-8/12 mx-auto">
          <p className="page-dec text-black">
            
          </p>
          <div className="w-full lg:w-4/20 text-base">
            <p className="text-justify text-gray-900 flex font-light mt-20">
            库达度私人岛属于马尔代夫国有制酒店集团Crown Champa Resorts，与芙拉瓦丽岛共同打造的天堂之地。作为一个小型土豪岛，我们汇聚了奢华生活的精髓，为您带来无与伦比的体验。
            </p>
            <p className="text-justify text-gray-900 flex font-light mt-10">
            我们热衷于为您提供无微不至的服务。每间别墅都配备专属私人管家，为您量身定制岛上生活的方方面面。您将享受到个性化的烹饪创作、海洋探险和健康活动，让您尽情沉浸其中。
            </p>

            <p className="text-justify text-gray-900 flex font-light mt-10">
            为远离日常束缚而打造的灵魂避难所，为您提供无缝连接的奢华时光和空间。度假村由建筑大师山崎裕治（Yuji Yamazaki）设计，将生态意识融入其中。我们引以为傲的可持续性理念，100%依靠太阳能供电，为您创造一种轻松奢华的体验。
            </p>
            
          </div>

          <p class="font-extralight hover:font-normal text-black text-2xl pt-20">
入住库达度岛可游览芙拉瓦丽岛Hurawalhi，实现双岛游
</p>   
<p class="font-extralight hover:font-normal text-black text-2xl py-10">
共享芙拉瓦丽岛Hurawalhi上的一切，包括网球场、足球场、羽毛球场和水下餐厅；
</p>        


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
    </div>
    </div>
    
  );
}

export default Mtext;
