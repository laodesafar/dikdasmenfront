import { useState } from "react";

import Logo from "../components/logo";
import { BiSearch, BiChevronDown } from "react-icons/bi";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownGaleri, setDropdownGaleri] = useState(false);
  const tentangList = [
    { text: "Sejarah", href: "#" },
    { text: "Visi dan Misi", href: "#" },
    { text: "Struktur Organisasi", href: "#" },
    { text: "Staf Dikdasmen", href: "#" },
  ];

  const galeriList = [
    { text: "Foto", href: "#" },
    { text: "Video", href: "#" },
  ];

  return (
    <div>
      <div className="bg-green-500 w-full h-6"></div>
      <nav>
        <div className="container mx-auto">
          <div className="flex items-center ">
            <div className=" py-3 ">
              <Logo />
            </div>
            <div className="ml-auto">
              <ul className="flex space-x-10 items-center  ">
                <li>
                  <a href="" className="text-green-500 py-6 ">
                    Beranda
                  </a>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a
                    href="#"
                    className="hover:text-green-500 pointer py-6 flex items-center "
                  >
                    Tentang <BiChevronDown />
                  </a>
                  {dropdown && (
                    <ul className="absolute pt-1 w-max   ">
                      {tentangList.map(({ text, href }, index) => (
                        <li key={text}>
                          <a
                            href={href}
                            className={`flex py-3 px-6 bg-gray-50 ${
                              index === 0 ? "border-green-500  border-t-2" : ""
                            }   hover:text-green-500 `}
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a href="" className="hover:text-green-500 py-6">
                    Pendidikan
                  </a>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => setDropdownGaleri(true)}
                  onMouseLeave={() => setDropdownGaleri(false)}
                >
                  <a
                    href=""
                    className="hover:text-green-500 py-6 flex items-center"
                  >
                    Galeri <BiChevronDown />
                  </a>
                  {dropdownGaleri && (
                    <ul className="absolute pt-1 w-max   ">
                      {galeriList.map(({ text, href }, index) => (
                        <li key={text}>
                          <a
                            href={href}
                            className={`flex py-3 px-6 bg-gray-50 ${
                              index === 0 ? "border-green-500  border-t-2" : ""
                            }   hover:text-green-500 `}
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a href="" className="hover:text-green-500 py-6">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-10">
              <a href="">
                <BiSearch className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="h-[80vh] relative max-h-[80vh] overflow-hidden  -z-10 ">
        <div className=" relative max-h-[80vh] h-[80vh] ">
          <img
            className="align-middle object-cover  max-w-full w-full h-full  block md:hidden "
            src="/assets/images/cover-video.jpg"
            alt=""
          />
          <video
            id="videoBG"
            className=" align-baseline -z-10 hidden md:block min-w-full w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            poster="/assets/images/cover-video.jpg"
          >
            <source src="/assets/videos/dikdasmen.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-1/2 w-screen text-center">
            <h1 className="text-white text-5xl font-semibold  uppercase">
              DIKDASMEN YBWSA
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
