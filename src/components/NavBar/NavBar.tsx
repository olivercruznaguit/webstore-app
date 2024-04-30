import { useState } from "react";
import logo from "../../assets/rfg_logo.jpg";
import { BiShoppingBag } from "react-icons/bi";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from 'react-scroll';


const NavBar = () => {
  const [burgerVisibility, setBurgerVisibility] = useState(false);

  const toggleVisibility = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.classList.toggle("menu-visible");
    }
    setBurgerVisibility(!burgerVisibility)
  }

  return (
    <div>
      <nav id="menu" className="sideNav flex justify-between items-center px-40 py-5 xl:px-80 ease-in duration-300">
        <img src={logo} alt="refuge logo" className="w-20 h-10 rounded-xl" />
        <ul className="flex gap-14 cursor-pointer text-sm items-center">
          <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
          <li><Link activeClass="active" to="shop" spy={true} smooth={true} duration={500} offset={-200} >Shop</Link></li>
          <li><Link activeClass="active" to="sizeChart" spy={true} smooth={true} duration={500} offset={-200}>Size Chart</Link></li>
          <li><Link activeClass="active" to="contactUs" spy={true} smooth={true} duration={500} offset={-200} >Contact Us</Link></li>
        </ul>
        <div>
          <BiShoppingBag className="bag text-black w-6 h-6 cursor-pointer" />
        </div>
      </nav>
      <div className="announcement text-center bg-black text-white py-2">
        <span className="font-medium text-app-red">20% </span> off on first
        purchase
      </div>
      <div className="menuButton">
        <RiMenu4Line className="bugerIcon fixed top-0 right-0 z-30 text-white mt-3 mr-10 w-10 h-10 bg-red-500" onClick={toggleVisibility}/>
      </div>
    </div>
  );
};

export default NavBar;
