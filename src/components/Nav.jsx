import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md fixed w-full top-0 left-0 py-5 bg-primary">
      <div className="flex justify-between items-center mx-20 relative max-[768px]:mx-4">

        <h2 className="font-priFont tracking-wider text-3xl font-bold text-white">ARJAY</h2>
        <ul className="flex gap-8 capitalize max-[768px]:hidden text-white">
          <li className="cursor-pointer hover:underline underline-offset-8">
            home
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8">
            about
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8">
            services
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8">
            contact
          </li>
        </ul>

        {/* Mobile view menu */}
        <div className={`fixed top-0 left-0 h-screen bg-primary text-white max-w-64 w-64 pl-12 pt-8 capitalize transition-transform duration-300 ${ isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}>
            <ul>
                <li
                onClick={toggleMenu}
                className="py-6 cursor-pointer hover:underline underline-offset-8"
                >
                home
                </li>
                <li
                onClick={toggleMenu}
                className="py-6 cursor-pointer hover:underline underline-offset-8"
                >
                about
                </li>
                <li
                onClick={toggleMenu}
                className="py-6 cursor-pointer hover:underline underline-offset-8"
                >
                services
                </li>
                <li
                onClick={toggleMenu}
                className="py-6 cursor-pointer hover:underline underline-offset-8"
                >
                contact
                </li>
            </ul>
            <div className="absolute bottom-24">
                <p>Copyright &copy;. 2024<span className="block">Arjay Altamera</span></p>
            </div>
        </div>

        <button
          onClick={toggleMenu}
          className={`p-2 md:hidden transform transition-transform duration-300 ${
            isMenuOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* Conditionally render the icons based on state */}
          {isMenuOpen ? (
            <IoClose className="text-white w-6 h-6" />
          ) : (
            <RxHamburgerMenu className="text-white w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
