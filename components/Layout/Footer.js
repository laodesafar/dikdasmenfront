import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer" className="flex bg-gray-700 py-6">
      <div className="container mx-auto">
        <h4 className="text-white  text-center font-light py-6">
          Bidang Pendidikan Dasar dan Menengah Yayasan Badan Wakaf Sultan Agung
        </h4>
        <div className="flex justify-center space-x-5">
          <div>
            <a href="">
              <FaWhatsapp className="text-white h-7 w-7" />
            </a>
          </div>
          <div>
            <a href="" className="text-white">
              <FaFacebookSquare className="text-white h-7 w-7" />
            </a>
          </div>
          <div>
            <a href="" className="text-white">
              <FaInstagram className="text-white h-7 w-7" />
            </a>
          </div>
          <div>
            <a href="" className="text-white">
              <FaYoutube className="text-white h-7 w-7" />
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-10 text-white text-sm font-light">
          <div>© 2020–2021 Dikdasmen YBWSA Legal & PrivacySite Map</div>
          <div>Designed & Developed by La Ode Safar</div>
        </div>
      </div>
    </section>
  );
}
