import React from "react";
import Image from 'next/image';


function Vphotoc() {
  return (
    <div className="flex justify-center items-center h-screen mt-0" style={{marginLeft: '24px', marginRight: '24px'}}>
      <div className="text-center">
        <div className="page-title font-bold text-3xl text-gray-900">
        The Romantic Guide to Life
        </div>
        <div className="w-full lg:w-8/12 mx-auto">
          <p className="page-dec text-black">
            
          </p>
          <div className="w-full lg:w-4/20 text-left md:text-justify ...">
            <p className="text-base md:text-lg ... text-gray-900 flex font-light mt-20 md:my-20">
            维拉私人岛设计了沙滩泳池别墅、豪 华海滩泳池别墅、日出水上泳池别墅、日落豪华 水上泳池别墅、海洋泳池别墅、海滩泳池别墅 沙滩泳池观海阁、浪漫的水上泳池别墅、维拉私 人住宅9种房型，数量却只有45间，房型面积在 260平方到1280平方不等，奢华程度可见一斑， 维拉私人岛能为客人提供一个真正的隐私空间， 来这里，只会享受一流的服务。
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
    <p className="break-normal md:break-all ... hover:font-normal">环岛用时：20分钟</p>
    <p className="font-light ... text-current hover:underline">
      
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-current hover:underline hover:font-normal"
      >
        岛屿大小：小型
      </a>
    </p>
  </div>
  <div className="w-1/3">
    {/* Second column */}
    <p className="break-words ... hover:font-normal">开业时间:2013年</p>
    <p className="break-words ... hover:font-normal">沙屋数量：30间</p>
  </div>
  <div className="w-1/3">
    {/* Third column */}
    <p className="break-words ... hover:font-normal">房间数量：47间</p>
    <p className="break-words ... hover:font-normal">餐厅:4间</p>
  </div>
</div>





      
    </div>
    </div>
    </div>
    
  );
}

export default Vphotoc;