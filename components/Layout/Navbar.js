import { Fragment, useState } from "react";

import Link from "next/link";

import Logo from "../UI/Logo";
import Modal from "../UI/Modal";
import { BiSearch, BiChevronDown, BiX } from "react-icons/bi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownGaleri, setDropdownGaleri] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tentangList = [
    { text: "Sejarah", href: "/tentang/sejarah" },
    { text: "Visi dan Misi", href: "/tentang/visimisi" },
    { text: "Struktur Organisasi", href: "/tentang/struktur" },
    { text: "Staf Dikdasmen", href: "/tentang/staf" },
  ];

  const galeriList = [
    { text: "Foto", href: "/galeri/foto" },
    { text: "Video", href: "/galeri/video" },
  ];

  return (
    <Fragment>
      <div className="bg-green-500 w-full z-100 h-6"></div>

      <nav className="sticky top-0 bg-white z-100 shadow-lg">
        <div className="container    mx-auto">
          <div className="flex items-center ">
            <div className=" py-3">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="ml-auto">
              <ul className="flex space-x-10 items-center  ">
                <li
                  className="relative"
                  onClick={() => setDropdown(!dropdown)}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a className="hover:text-green-500 cursor-pointer py-6 flex items-center transition-colors duration-300 ease-in-out ">
                    Tentang <BiChevronDown />
                  </a>
                  {dropdown && (
                    <ul className="absolute w-max min-w-[200px]   ">
                      {tentangList.map(({ text, href }) => (
                        <li
                          key={text}
                          className="first:border-green-500 first:border-t-4"
                        >
                          <Link href={href}>
                            <a
                              className="flex py-3 px-6 bg-gray-50
                          hover:text-green-500 transition-colors duration-300 ease-in-out "
                            >
                              {text}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/pendidikan">
                    <a className="hover:text-green-500 py-6 transition-colors duration-300 ease-in-out">
                      Pendidikan
                    </a>
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => setDropdownGaleri(!dropdownGaleri)}
                  onMouseEnter={() => setDropdownGaleri(true)}
                  onMouseLeave={() => setDropdownGaleri(false)}
                >
                  <a className="hover:text-green-500 py-6 flex items-center cursor-pointer transition-colors duration-300 ease-in-out">
                    Galeri <BiChevronDown />
                  </a>
                  {dropdownGaleri && (
                    <ul className="absolute  w-max  min-w-[200px]  ">
                      {galeriList.map(({ text, href }) => (
                        <li
                          key={text}
                          className="first:border-green-500 first:border-t-4 "
                        >
                          <Link href={href}>
                            <a
                              className="flex py-3 px-6 bg-gray-50
                            hover:text-green-500 transition-colors duration-300 ease-in-out"
                            >
                              {text}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/kontak">
                    <a className="hover:text-green-500 py-6 transition-colors duration-300 ease-in-out">
                      Kontak
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ml-10 cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out">
              <a onClick={() => setShowModal(!showModal)}>
                <BiSearch className="text-xl" />
              </a>
              {showModal && (
                <Modal>
                  <div className="absolute top-[40%] w-screen text-center">
                    <form className="relative max-w-lg mx-auto ">
                      <input
                        type="text"
                        className="pr-40 pb-6 bg-transparent -ml-36 text-white text-5xl border-b-4 border-gray-500  placeholder-white outline-none"
                        placeholder="Search.."
                      />
                      <div className="absolute  flex items-center text-5xl mr-32 top-0 -right-1/2 text-white">
                        <BiSearch className="font-bold cursor-pointer" />
                        <BiX
                          onClick={() => setShowModal(!showModal)}
                          className="h-16 w-16 cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in-out "
                        />
                      </div>
                    </form>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
