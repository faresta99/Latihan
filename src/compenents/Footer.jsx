import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const Footer = () => {
  return (
    <div className="bg-[#003b46] flex md:gap-44 justify-between px-4 md:px-36 py-5">
      <ScrollAnimation>
        <div className="text-white">
          <h3 className="mb-1">Menu</h3>
          <p>
            <a href="#" className="text-[10px]">
              Home
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              About
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Project
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Layanan
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Textimonial
            </a>
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="text-white">
          <h3 className="mb-1">Media Sosial</h3>
          <p>
            <a href="#" className="text-[10px]">
              Whatsapp
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Instagram
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Youtube
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Facebook/
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Github
            </a>
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="text-white">
          <h3 className="mb-1">Skill</h3>
          <p>
            <a href="#" className="text-[10px]">
              Html
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              CSS
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Javascript
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              Tailwind
            </a>
          </p>
          <p>
            <a href="#" className="text-[10px]">
              RipleUI
            </a>
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="text-white">
          <h3 className="mb-1">Hak Cipta</h3>
          <p>
            <a href="#" className="text-[10px]">
              @Faresta 2025
            </a>
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Footer;
