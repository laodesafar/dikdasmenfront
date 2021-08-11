import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Marker(props) {
  return (
    <div>
      <div className="relative bottom-8">
        <FaMapMarkerAlt className="text-4xl text-red-500 " />
        <div className="absolute right-4 -bottom-20">
          <div className=" flex flex-col bg-green-500 py-4 px-4 space-y-2">
            <div className="flex  items-center ">
              <FaMapMarkerAlt className="text-4xl text-white mr-2" />
              <div className="p-2 text-white font-light text-sm">
                Jln. Raya Kaligawe KM.4
                <br /> Gedung M. Sulchan LT.2 <br />
                Semarang,50112
              </div>
            </div>
            <div className="flex  items-center ">
              <FaPhoneAlt className="text-3xl text-white mr-2" />
              <div className="p-2 text-white font-light text-sm">
                Telepon
                <br />
                0845 5344 54545
              </div>
            </div>
            <div className="flex  items-center ">
              <FaEnvelope className="text-3xl text-white mr-2" />
              <div className="p-2 text-white font-light text-sm">
                Email
                <br />
                ybwsadikdasmen@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
