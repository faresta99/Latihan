import React from "react";
import gambar1 from "../assets/maxim.png";
import gambar2 from "../assets/grab.png";
import gambar3 from "../assets/gojek.png";
import gambar4 from "../assets/youtube.png";
import gambar5 from "../assets/facebook.png";
import gambar6 from "../assets/riple.png";

const Projects = () => {
  return (
    <div className="bg-[#004445] md:px-16 pt-20 pb-14 px-12">
      <div className="text-gray-200 text-center mb-16">
        <h1 className="md:text-5xl text-3xl md:font-semibold mb-2">
          My Project
        </h1>
        <p className="md:text-2xl text-[18px] pt-3">
          Ini adalah beberapa project yang sudah saya selesaikan
        </p>
      </div>
      <div className="md:flex md:gap-8 md:flex-wrap">
        <div className="group cursor-pointer mb-8 md:mb-0">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar1} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">Maxim</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mb-8 md:mb-0">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar2} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">Grab</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mb-8 md:mb-0">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar3} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">Gojek</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mb-8">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar4} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">Youtube</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mb-8">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar5} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">Facebook</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mb-8">
          <div className="card card-image-cover group-hover:opacity-90 bg-[#021c1e] text-white">
            <img src={gambar6} alt="" className="opacity-90" />
            <div className="card-body">
              <h1 className="text-center font-bold text-2xl mb-4">RipleUI</h1>
              <div className="card-footer">
                <button className="btn bg-[#07575b] btn-sm btn-block text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
