import React from "react";
import gambar1 from "../assets/4.jpg";
import { IoMdMenu } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-sticky font-bold md:px-12 bg-[#021c1e]/90">
        <div className="navbar-start">
          <div className="avatar cursor-pointer">
            <img src={gambar1} alt="avatar" />
          </div>
          <a className="navbar-item text-white">Faresta</a>
        </div>
        <div className="hidden navbar-end md:flex">
          <a className="navbar-item text-white">Home</a>
          <a className="navbar-item text-white" href="#about">
            About
          </a>
          <a className="navbar-item text-white">Projects</a>
          <a className="navbar-item text-white">Layanan</a>
          <a className="navbar-item text-white">Textimoni</a>
        </div>
        <input type="checkbox" id="drawer-right" className="drawer-toggle" />

        <label htmlFor="drawer-right" className="md:hidden cursor-pointer">
          <IoMdMenu className="text-3xl text-white" />
        </label>
        <label className="overlay" htmlFor="drawer-right"></label>
        <div className="drawer max-w-64 drawer-right bg-[#2c7873] md:hidden">
          <div className="drawer-content pt-10 flex flex-col h-full">
            <label
              htmlFor="drawer-right"
              className="absolute right-2 top-2 text-2xl"
            >
              ✕
            </label>
            <div>
              <nav className="menu p-2 rounded-md">
                <section className="menu-section">
                  <ul className="menu-items font-bold ">
                    <li className="menu-item text-white hover:text-gray-700">
                      Home
                    </li>
                    <li className="menu-item text-white hover:text-gray-700">
                      About
                    </li>
                    <li className="menu-item text-white hover:text-gray-700">
                      Projects
                    </li>
                    <li className="menu-item text-white hover:text-gray-700">
                      Layanan
                    </li>
                    <li className="menu-item text-white hover:text-gray-700">
                      Testimoni
                    </li>
                  </ul>
                </section>
              </nav>
            </div>
            <div className="h-full flex flex-row justify-center items-end gap-4">
              <button className="bg-white rounded-full p-1">
                <FaFacebook className="text-2xl text-blue-500" />
              </button>
              <button className="bg-white rounded-full p-1">
                <FaInstagram className="text-2xl text-red-500" />
              </button>
              <button className="bg-white rounded-full p-1">
                <FaYoutube className="text-2xl text-red-600" />
              </button>
              <button className="bg-white rounded-full p-1">
                <FaTwitter className="text-2xl text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;