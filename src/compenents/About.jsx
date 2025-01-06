import React from "react";
import gambar1 from "../assets/aboutme.png";

const About = () => {
  return (
    <div
      className="bg-[#2c7873] h-screen md:px-12 md:flex md:gap-24 md:pt-8"
      id="about"
    >
      <div className="md:pt-20 md:w-1/2 pt-10">
        <img
          src={gambar1}
          alt="about"
          className="w-[300px] mx-auto md:w-[500px] bg-[#6fb98f] rounded-full pt-6"
        />
      </div>
      <div className="text-white md:pt-36 md:w-1/2 pt-5">
        <h1 className="text-3xl md:text-6xl md:pb-7 text-center md:text-left pb-3">
          About Me
        </h1>
        <p className="text-[18px] md:text-2xl mx-4 md:mx-0">
          I am faresta,i am junior developer.working in Pt.Wahyu Perdana
          BinaMulia as cleaning sevice.I study web programing
          autodidactically.Now i can make website portfolio using
          html,css,javascript,react and RippleUI.
        </p>
      </div>
    </div>
  );
};

export default About;
