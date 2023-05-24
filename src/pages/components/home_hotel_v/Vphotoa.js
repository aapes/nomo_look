import React from "react";
import Image from 'next/image';


function Vphotoa() {
  return (
    <div className="flex justify-center items-center h-screen" style={{marginLeft: '24px', marginRight: '24px'}}>
      <div className="text-center">
        <div className="page-title font-extralight text-5xl text-green-400">
        维拉私人岛 - 马尔代夫
        </div>
        <div className="w-full lg:w-8/12 mx-auto">
          <p className="page-dec text-black mt-10">
          Velaa Private Island Maldives
          </p>
          <div className="w-full lg:w-4/20 text-left md:text-justify ...">
            <p className="text-base md:text-lg ... text-gray-900 flex font-light mt-20 md:my-20">
            这个椭圆形的小岛占地面积16公顷，于2013年对外营业。维拉私人岛是极少数真正私有的岛屿之一，在众多私人岛屿中独树一帜。这里为客人提供真正的隐私空间，让您在灵活的时间安排下尽情享受一流的服务。一踏上维拉私人岛，仿佛来到了世外桃源，与世隔绝，心旷神怡。在这里，您将体验前所未有的度假享受：生态时尚的豪华别墅、美味可口的国际美食、丰富多样的活动、贴心至尊的服务，以及独一无二的美景。
            </p>
          </div>
          
    

            <div className="pt-4 pb-2 text-sm font-light flex justify-between text-black flex-wrap-reverse">
  <div className="w-1/3">
    {/* First column */}
    <p className="break-normal md:break-all ... hover:font-normal">酒店电话:+960 6565 000</p>
    <p className="font-light ... text-current hover:underline">
      
      <a
        href="https://www.velaaprivateisland.com"
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
    <p className="break-words ... hover:font-normal">酒店星级:奢华六星</p>
    <p className="break-words ... hover:font-normal">中文服务：支持</p>
  </div>
  <div className="w-1/3">
    {/* Third column */}
    <p className="break-words ... hover:font-normal">上岛时长：45分钟</p>
    <p className="break-words ... hover:font-normal">沙滩浮潜等级：A级</p>
  </div>
</div>





      
    </div>
    </div>
    </div>
    
  );
}

export default Vphotoa;