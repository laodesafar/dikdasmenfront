import React from "react";
import Image from "next/image";

import { BiChevronRight } from "react-icons/bi";
import ButtonLengkap from "../UI/ButtonLengkap";
import CardBerita from "../UI/CardBerita";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function RilisBerita() {
  return (
    <div>
      <section className="flex bg-white py-6" id="rilis-berita">
        <div className="container mx-auto">
          <div className="flex flex-start mt-10 mb-5">
            <h3 className="text-2xl capitalize font-semibold text-green-500 ">
              Rilis Berita
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <div className="w-full flex rounded-xl shadow-xl hover:shadow-md transition-shadow duration-300 ">
                <div className="w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <Image
                    className=" rounded-l-xl  w-full"
                    loader={imageLoader}
                    src="assets/images/contoh.jpg"
                    alt="Picture of the author"
                    width={640}
                    height={361}
                  />
                </div>
                <div className=" bg-gray-100 rounded-r-xl  py-6 px-5 flex flex-col  leading-normal">
                  <div>
                    <p className="text-green-700 font-semibold text-base">
                      <a href="#" className="hover:text-green-500">
                        Berita
                      </a>
                    </p>

                    <h1 className="font-semibold text-green-500 leading-none text-xl mt-1 mb-5 capitalize ">
                      <a
                        href="#"
                        className="text-green-500 hover:text-teal-600"
                      >
                        Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir
                        Demak
                      </a>
                    </h1>

                    <div className="max-w-full">
                      <p className="text-base font-medium tracking-wide text-gray-500 mt-1 hidden lg:block">
                        Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo
                        Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam
                        banjir luapan Sungai Tuntang. (Kompas.com
                      </p>
                    </div>
                  </div>
                  <div className="h-full"></div>
                  <div className="mb-3">
                    <ButtonLengkap>
                      Selengkapnya
                      <BiChevronRight className="w-6 h-6" />
                    </ButtonLengkap>
                  </div>

                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />

                    <div className="text-sm">
                      <p className="text-gray-500 leading-none">
                        <a href="#" className="hover:text-green-500">
                          Admin Dikdasmen
                        </a>
                      </p>
                      <p className="text-gray-500">
                        <a href="#" className="hover:text-green-500">
                          13 Februari 2021
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <CardBerita title="Card Contoh 1" />
            </div>
          </div>
          <button className="text-base bg-teal-500 py-2 px-6 text-white rounded-sm shadow-lg block mx-auto mt-6 hover:shadow-sm transition-shadow hover:bg-teal-600">
            Berita Lainnya
          </button>
        </div>
      </section>
    </div>
  );
}
