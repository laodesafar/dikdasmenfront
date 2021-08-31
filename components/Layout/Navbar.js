import { Fragment, useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";

import { BiSearch, BiChevronDown, BiX, BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const linkNavbar = [
    {
      text: "Tentang",
      href: "#",
      dropdown: [
        { text: "Sejarah", href: "/tentang/sejarah" },
        { text: "Visi dan Misi", href: "/tentang/visimisi" },
        { text: "Struktur Organisasi", href: "/tentang/struktur" },
        { text: "Staf Dikdasmen", href: "/tentang/staf" },
      ],
    },
    {
      text: "Pendidikan",
      href: "/pendidikan",
    },
    {
      text: "Galeri",
      href: "#",
      dropdown: [
        { text: "Foto", href: "/galeri/foto" },
        { text: "Video", href: "/galeri/video" },
      ],
    },
    {
      text: "Kontak",
      href: "/kontak",
    },
  ];

  return (
    <>
      <div className="bg-green-500 w-full z-20 py-1">
        <div className="container mx-auto">
          <ul className="flex items-center mx-3 sm-mx-0">
            <li className=" text-white mr-2">
              <p className=" capitalize font-light text-xs">
                <span className="text-xl font-bold">"</span> Bismillah membangun
                generasi khaira ummah
              </p>
            </li>
            <li className="ml-auto sm:block hidden">
              <Link href="/berita">
                <a className="text-white  text-sm  px-4 py-2 hover:bg-green-600 transition-colors">
                  Berita
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="sticky top-0 bg-white z-20 shadow-lg ">
        <div className="container    mx-auto">
          <div className="flex items-center mx-3 sm:mx-0">
            <div className="py-1">
              <Link href="/">
                <a className="flex items-center hover:text-green-500 transition-colors text-gray-600">
                  <Image
                    src="/assets/images/logo.svg"
                    height={63}
                    width={58}
                    alt="Logo Dikdasmen"
                  />
                  <div className="ml-2">
                    <div className="sm:flex flex-col -space-y-2 font-semibold hidden ">
                      <p className="uppercase">
                        Bidang Pendidikan Dasar dan Menengah
                      </p>
                      <p>Yayasan Badan Wakaf Sultan Agung</p>
                    </div>
                    <p className="block sm:hidden font-semibold uppercase">
                      Dikdasmen YBWSA
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div
              className={`ml-auto fixed inset-0 transition-all duration-100 ${
                showMenu ? "bg-black/50 visible" : "invisible lg:visible"
              }   lg:relative lg:block `}
            >
              <ul
                className={`w-72 lg:w-auto fixed lg:absolute bg-gray-100 lg:bg-transparent transition-all duration-300 ease-in-out ${
                  showMenu ? "right-0" : "-right-full"
                } top-0    bottom-0 lg:flex lg:space-x-10 lg:items-center pb-0 lg:px-0 px-10 pt-20 lg:mt-auto`}
              >
                <li onClick={() => setShowMenu(!showMenu)}>
                  <BiX className="h-10 w-10 absolute lg:hidden  right-5 top-5 z-100 cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in-out " />
                </li>
                {linkNavbar.map(({ text, href, dropdown }, i) => (
                  <Menu
                    key={i}
                    as="li"
                    className="relative pb-3 mb-3 border-b-2 border-green-500 lg:border-none lg:pb-0 lg:mb-0"
                  >
                    {!dropdown && (
                      <Link href={href}>
                        <a className="hover:text-green-500 py-6 transition-colors duration-300 ease-in-out">
                          {text}
                        </a>
                      </Link>
                    )}
                    {dropdown && (
                      <>
                        <Menu.Button className="hover:text-green-500 cursor-pointer lg:py-6 flex items-center transition-colors duration-300 ease-in-out outline-none">
                          {text} <BiChevronDown />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0  scale-95"
                          enterTo="transform opacity-100  scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="block lg:absolute mt-2 lg:mt-0 w-full lg:w-max min-w-[200px] outline-none border-green-500 border-t-2 lg:border-t-4 ">
                            {dropdown.map(({ text, href }, i) => (
                              <Menu.Item className="last:border-b-0" key={text}>
                                {({ active }) => (
                                  <Link href={href}>
                                    <a
                                      className={` ${
                                        active && "text-green-500"
                                      } flex py-3 px-6 bg-white lg:border-none
                                         border-b-[1px] border-green-500
                                     lg:bg-gray-50
                             hover:text-green-500 transition-colors duration-300 ease-in-out `}
                                    >
                                      {text}
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ))}
              </ul>
            </div>
            <div className="ml-auto lg:ml-10 cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out">
              <a onClick={() => setShowModal(!showModal)}>
                <BiSearch className="text-xl" />
              </a>
              <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" onClose={() => setShowModal(!showModal)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 z-25 w-full min-h-screen" />
                  </Transition.Child>
                  <div className="absolute top-[40%] w-screen text-center z-30">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
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
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
            <div className="ml-4 block lg:hidden cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out">
              <a onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? (
                  <BiX className="text-2xl transition-all" />
                ) : (
                  <BiMenu className="text-2xl" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
