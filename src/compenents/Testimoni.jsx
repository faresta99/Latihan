import React from "react";
import gambar1 from "../assets/man.png";
import gambar2 from "../assets/woman.png";
import gambar3 from "../assets/man1.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Testimoni = () => {
  return (
    <div className="bg-[#07575b] py-20">
      <div className="text-gray-200 text-center mb-16">
        <h1 className="md:text-5xl text-3xl md:font-semibold mb-2">
          Testimoni
        </h1>
        <p className="text-[20px] mt-4">
          Ini adalah pendapat client tentang projek yang saya kerjakan
        </p>
      </div>
      <div className="bg-[#003b46] md:mx-12 md:px-11 px-4 py-10">
        <div className="flex gap-8">
          <div>
            <div className="avatar avatar-ring avatar-lg">
              <img src={gambar1} alt="" />
            </div>
          </div>
          <div>
            <i className="text-white text-[20px]">
              "Saya sangat terkesan dengan hasil website yang dibuat. Desainnya
              modern dan sangat responsif di semua perangkat. Tim juga sangat
              komunikatif dan memenuhi semua kebutuhan saya. Terima kasih atas
              kerja kerasnya!" — Andi, CEO StartupTech
            </i>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-8">
          <div>
            <div className="avatar avatar-ring avatar-lg">
              <img src={gambar2} alt="avatar" />
            </div>
          </div>
          <div>
            <i className="text-white text-[20px]">
              "Desain aplikasi kami kini jauh lebih user-friendly berkat bantuan
              Anda. Feedback dari pengguna juga sangat positif. Saya pasti akan
              merekomendasikan layanan Anda kepada rekan-rekan saya." — Sarah,
              Project Manager di ABC Solutions
            </i>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-8">
          <div>
            <div className="avatar avatar-ring avatar-lg">
              <img src={gambar3} alt="avatar" />
            </div>
          </div>
          <div>
            <i className="text-white text-[20px]">
              "Dalam waktu 3 bulan, trafik organik website kami meningkat hingga
              200%! Timnya sangat profesional dan detail. Saya sangat puas
              dengan hasilnya." — Rizky, Pemilik Bisnis Online
            </i>
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:gap-10 text-3xl md:text-5xl justify-center my-16">
        <FaWhatsappSquare className="text-green-500" />
        <FaFacebook className="text-blue-600" />
        <FaInstagram className="text-pink-500" />
        <FaGithub className="text-gray-400" />
        <FaYoutube className="text-red-600" />
      </div>
    </div>
  );
};

export default Testimoni;
