import React from "react";
import gambar1 from "../assets/home.png";
import "animate.css";
import ScrollAnimation from "./ScrollAnimation";

const Home = () => {
  return (
    <div className="h-screenr md:flex md:justify-between md:pt-20 bg-[#004445] pb-10 md:pb-20 md:px-12">
      <div>
        <ScrollAnimation>
          <div className="md:text-6xl md:pt-28 font-semibold md:leading-snug text-3xl pt-20 text-white md:text-left text-center mb-9">
            <span className="text-2xl md:text-4xl">I am Faresta,</span>
            <br />
            Junior Web developer
          </div>
        </ScrollAnimation>
        <div className="flex justify-center md:block">
          <ScrollAnimation>
            <button className="btn btn-primary md:px-16 md:text-[20px] md:mt-8">
              Buat Website
            </button>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation>
        <div className="pl-11 md:pl-0 md:pr-12 mt-7 ">
          <img src={gambar1} alt="home" className="md:w-[550px] w-[400px]" />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Home;
