import React from "react";
import { Element } from "react-scroll";

const SizeChart = () => {
  return (
   <Element name="sizeChart">
     <div className="flex flex-col lg:flex-row items-center justify-center py-20 gap-20 bg-black">
        <div className="text-red-100 text-4xl hover:text-5xl ease-in duration-300 cursor-default shrink-0">
            REFUGE CO.
        </div>
        <img
            className="w-80 h-80 xl:w-[480px] xl:h-[480px] shrink"
            src="https://cdn.shopify.com/s/files/1/0693/6254/8948/files/SIZE_CHART_2023_NO_XS_480x480.jpg?v=1711997202"
            alt=""
        />
        <img
            className="w-80 h-80 xl:w-[480px] xl:h-[480px] shrink"
            src="https://cdn.shopify.com/s/files/1/0693/6254/8948/files/SIZE_CHART_MESH_OCT_2023_480x480.jpg?v=1712003031"
            alt=""
        />
    </div>
   </Element>
  );
};

export default SizeChart;
