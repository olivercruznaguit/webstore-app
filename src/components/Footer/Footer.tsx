import { PiTiktokLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-20 pt-20 pb-10">
      <div className="flex flex-row mb-10 justify-between flex-wrap">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <ul className="text-xs gap-5 flex flex-col">
            <li className="cursor-pointer uppercase font-bold tracking-wide">
              student discount
            </li>
            <li className="cursor-pointer uppercase font-bold tracking-wide">
              send us feedback
            </li>
          </ul>
          <ul className="font-semibold text-xs gap-5 flex flex-col justify-evenly">
            <li className="cursor-pointer uppercase font-bold tracking-wide">
              help
            </li>
            <li className="cursor-pointer capitalize">get help</li>
            <li className="cursor-pointer capitalize">delivery</li>
            <li className="cursor-pointer capitalize">contact us</li>
          </ul>
          <ul className="font-semibold text-xs gap-5 flex flex-col justify-evenly">
            <li className="cursor-pointer uppercase font-bold tracking-wide">
              company
            </li>
            <li className="cursor-pointer capitalize">about Refuge</li>
            <li className="cursor-pointer capitalize">news</li>
            <li className="cursor-pointer capitalize">careers</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 text-app-red mt-5 sm:mt-0">
          <PiTiktokLogo className="w-7 h-7" />
          <PiFacebookLogo className="w-7 h-7" />
          <PiInstagramLogo className="w-7 h-7" />
        </div>
      </div>

      <hr />
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 text-white">
        <div>© 2024, Refuge Co. All rights reserved</div>
        <ul className="flex flex-row text-xs gap-5 text-gray-400 mt-5 sm:mt-0">
          <li className="cursor-pointer capitalize">terms of sale</li>
          <li className="cursor-pointer capitalize">refuge privacy policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
