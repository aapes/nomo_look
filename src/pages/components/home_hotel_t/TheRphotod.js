import React from "react";
import Image from 'next/image';


function TheRphotod() {
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
            马尔代夫法里群岛丽思卡尔顿酒店2021年6月1日开业，位于马尔代夫北马累环礁North Male Atoll的法里群岛Fari lslands， 距离马累机场50分钟快艇或水飞10分钟路程。           
             </p>
            <p className="text-justify text-gray-900 flex font-light mt-10">
            有100间别墅，从一居室到三居室面积150平米＋均配备私人泳池，每间别墅提供24小时管家服务，水屋由长长的栈桥与主岛相连，两个主岛之问有一个小岛相连。           
            
             </p>

            <p className="text-justify text-gray-900 flex font-light mt-10">
            岛上一共七个餐厅及酒吧，分别提供意大利餐、中国菜、日本铁板烧等。岛上还有设计一个具有体验性等的儿童俱乐部、休闲俱乐 部以及spa中心。     
            
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

export default TheRphotod;
