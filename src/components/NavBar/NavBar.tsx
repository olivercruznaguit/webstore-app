import logo from "../../assets/rfg_logo.jpg";
import { BiShoppingBag } from "react-icons/bi";
const NavBar = () => {
  return (
    <div 
    // className="fixed top-0 left-0 w-full"
    >
      <nav className="flex justify-between items-center px-80 py-5">
        <img src={logo} alt="refuge logo" className="w-20 h-10 rounded-xl" />
        <ul className="flex gap-14 cursor-pointer text-sm items-center">
          <li>Home</li>
          <li>Shop</li>
          <li>Size Chart</li>
          <li >
            Contact Us
          </li>
        </ul>
        <div>
        <BiShoppingBag className="text-black w-6 h-6 cursor-pointer" />
        </div>
      </nav>
      <div className="text-center bg-black text-white py-1">
        <span className="font-medium text-app-red">20% </span> off on first purchase
      </div>
    </div>
  );
};

export default NavBar;
