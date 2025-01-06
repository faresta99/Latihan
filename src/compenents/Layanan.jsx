import React from "react";
import webiste from "../assets/website.jpg";
import uiux from "../assets/uiux.jpg";
import app from "../assets/app.jpg";

const Layanan = () => {
  return (
    <div className="bg-[#2c7873] py-20 md:px-20 px-12">
      <div className="text-gray-200 text-center mb-16">
        <h1 className="md:text-5xl text-3xl md:font-semibold mb-2">Layanan</h1>
        <p className="md:text-2xl text-[18px] pt-3">
          Layanan yang Saya Tawarkan
        </p>
      </div>
      <div className="md:flex gap-8">
        <div class="card bg-[#07575b] card-image-cover mb-8">
          <img src={webiste} alt="" />
          <div class="card-body text-white">
            <h2 class="card-header">Pengembangan Website Kustom</h2>
            <p class="text-white mb-3">
              Saya membantu Anda membangun website yang tidak hanya menarik
              secara visual tetapi juga dirancang untuk mencapai tujuan bisnis
              Anda.
            </p>
            <div class="card-footer">
              <button class="btn bg-[#003b46] text-white">Learn More</button>
            </div>
          </div>
        </div>
        <div class="card bg-[#07575b] card-image-cover mb-8">
          <img src={uiux} alt="" />
          <div class="card-body text-white">
            <h2 class="card-header">Desain UI/UX</h2>
            <p class="text-white mb-9">
              Saya menciptakan desain antarmuka pengguna yang estetis dan
              intuitif untuk aplikasi atau website Anda.
            </p>
            <div class="card-footer">
              <button class="btn bg-[#003b46] text-white">Learn More</button>
            </div>
          </div>
        </div>
        <div class="card bg-[#07575b] card-image-cover mb-8">
          <img src={app} alt="" />
          <div class="card-body text-white">
            <h2 class="card-header">Pengembangan Aplikasi Mobile</h2>
            <p class="text-white mb-9">
              Saya menyediakan solusi aplikasi mobile untuk platform Android dan
              iOS yang stabil, cepat, dan mudah digunakan.
            </p>
            <div class="card-footer">
              <button class="btn bg-[#003b46] text-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
