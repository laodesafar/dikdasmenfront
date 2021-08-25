import { useState } from "react";
import Image from "next/image";
import { BiTime, BiMap } from "react-icons/bi";

import ButtonLengkap from "@components/UI/ButtonLengkap";
import InforPost from "@components/Layout/InforPost";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};
import Footer from "@components/Layout/Footer";
import Navbar from "@components/Layout/Navbar";

export default function Berita() {
  const [berita, setBerita] = useState([
    {
      id: 1,
      tags: "berita",
      date: "7 Agustus 2021",
      title: "Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir Demak",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 2,
      tags: "mlbs",
      date: "10 Agustus 2021",
      title:
        "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443H dengan sesuatu yang akan",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 3,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 4,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 5,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 6,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 7,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 8,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 9,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 10,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 md:px-0   py-6   ">
        <div className="grid grid-col-1 md:grid-cols-3  md:px-0 ">
          <div className="md:col-span-2 flex flex-col md:mr-4">
            <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Rilis Berita
            </h1>
            <div className="mt-2 pr-4">
              {berita.map((post) => (
                <article
                  className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b-[1px] border-gray-200 "
                  key={post.id}
                >
                  <div className="relative max-h-44">
                    <Image
                      className="absolute "
                      loader={imageLoader}
                      src="assets/images/contoh.jpg"
                      alt={post.title}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="col-span-2">
                    <InforPost
                      variant={true}
                      tags={post.tags}
                      date={post.date}
                      title={post.title}
                      description={post.description}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="px-2">
            <div>
              <h2 className=" capitalize text-2xl pt-4 font-semibold text-gray-600 mb-2">
                Pengumuman
              </h2>
              <div className="flex flex-col">
                <div className="border-b-[1px] border-gray-200 py-3">
                  <h3 className="font-normal text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                  <p className="text-gray-400 font-normal text-xs">
                    25 Agustus 2021
                  </p>
                </div>
                <div className="border-b-[1px] border-gray-200 py-3">
                  <h3 className="font-normal text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-300 ease-in-out">
                    Jadwal Kenaikan Pangkat di Undur Menjadi 25 September 2021
                    Bertempat di SMA 1 Sultan Agung
                  </h3>
                  <p className="text-gray-400 font-normal text-xs">
                    25 Agustus 2021
                  </p>
                </div>
                <div className="border-b-[1px] border-gray-200 py-3">
                  <h3 className="font-normal text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                  <p className="text-gray-400 font-normal text-xs">
                    25 Agustus 2021
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className=" capitalize text-2xl py-4 font-semibold text-gray-600 my-2">
                Agenda Mendatang
              </h2>
              <div className="flex flex-row shadow-md  mb-2">
                <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center ">
                  <span className="text-white font-semibold text-3xl ">18</span>
                  <p className="text-yellow-300 text-2xl capitalize">Feb</p>
                </div>
                <div className="p-4 flex-grow text-gray-600 font-light text-sm bg-gray-100">
                  <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                    Workshop Parenting
                  </h3>
                  <div>
                    <BiTime className="inline-block text-lg" /> 09.00 - 20.00
                    Wib
                  </div>
                  <div>
                    <BiMap className="inline-block text-lg" /> Aula SMA Islam
                    Sultan Agung 1
                  </div>
                </div>
              </div>
              <div className="flex flex-row  mb-2 shadow-md">
                <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center ">
                  <span className="text-white font-semibold text-3xl ">18</span>
                  <p className="text-yellow-300 text-2xl capitalize">Feb</p>
                </div>
                <div className="p-4   flex-grow text-gray-600 font-light text-sm bg-gray-100">
                  <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                    Workshop Parenting
                  </h3>
                  <div>
                    <BiTime className="inline-block text-lg" /> 09.00 - 20.00
                    Wib
                  </div>
                  <div>
                    <BiMap className="inline-block text-lg" /> Aula SMA Islam
                    Sultan Agung 1
                  </div>
                </div>
              </div>
              <div className="flex flex-row shadow-md ">
                <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center ">
                  <span className="text-white font-semibold text-3xl ">18</span>
                  <p className="text-yellow-300 text-2xl capitalize">Feb</p>
                </div>
                <div className="p-4  flex-grow text-gray-600 font-light text-sm bg-gray-100">
                  <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                    Workshop Parenting
                  </h3>
                  <div>
                    <BiTime className="inline-block text-lg" /> 09.00 - 20.00
                    Wib
                  </div>
                  <div>
                    <BiMap className="inline-block text-lg" /> Aula SMA Islam
                    Sultan Agung 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
