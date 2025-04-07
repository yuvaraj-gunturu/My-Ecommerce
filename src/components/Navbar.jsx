import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext.jsx";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const { setShowSearch, getCartCounter } = useContext(Shopcontext);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-30 border-rounded" />
      </Link>
      {/* <p className='w-1vw h-20'>LOGO</p> */}

      <ul className="hidden sm:flex text-sm ">
        <NavLink to="/" className="flex flex-col items-center p-6">
          <p className="text-gray-700 hover:text-black-700">Home</p>

          <hr className="bg-black-700 " />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center p-6 gap-1"
        >
          <p className="text-gray-700 hover:text-black-700">Collection</p>

          <hr className="bg-black-700 " />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center p-6 gap-1">
          <p className="text-gray-700 hover:text-black-700">About</p>

          <hr className="bg-black-700 " />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center p-6 gap-1">
          <p className="text-gray-700 hover:text-black-700">Contact</p>

          <hr className="bg-black-700 " />
        </NavLink>
      </ul>

      <div className="flex items-center  p-6">
        <div className="w-5 cursor-pointer">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt=""
          />
        </div>

        <div className="group relative p-6">
          <Link to="/login">
            <div className="w-5 cursor-pointer">
              <img src={assets.profile_icon} alt="" />
            </div>
          </Link>

          <div className="hidden group-hover:block absolute dropdown-menu top-10 right-0 bg-white shadow-md p-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">MY PROFILE</p>
              <p className="cursor-pointer hover:text-black">ORDERS</p>
              <p className="cursor-pointer hover:text-black">LOGOUT</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative ">
          <div className="w-5">
            <img src={assets.cart_icon} alt="" />
          </div>

          <p className="absolute rigth-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCounter()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 m-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hiddeen bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div
          onClick={() => setVisible(false)}
          className="flex flex-col text-gray-600 cursor-pointer hidden"
        >
          <div className="flex text-center gap-4 p-3">
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink to="/" className="py-4 pl-6 border">
            Home
          </NavLink>
          <NavLink to="/collection" className="py-4 pl-6 border">
            Collection
          </NavLink>
          <NavLink to="/about" className="py-4 pl-6 border">
            About
          </NavLink>
          <NavLink to="/contact" className="py-4 pl-6 border">
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
