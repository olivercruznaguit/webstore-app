import { useEffect, useState } from "react";
import logo from "../../assets/rfg_logo2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Element } from "react-scroll";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHoverIn = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };

  return (
    <Element name="home">
      <div className="relative">
        <div
          className={`transition-all duration-300 ${
            isHover ? "blur-sm brightness-75" : ""
          }`}
        >
          <img src={logo} alt="red blue logo of refuge" />
        </div>
        <div
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          className="shopNowBtn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-7 xl:py-4 xl:px-8 cursor-pointer"
        >
          Shop Now! <FaArrowRightLong className="ml-2 inline-block w-5 h-5" />
        </div>
      </div>
    </Element>
  );
};

export default Home;
