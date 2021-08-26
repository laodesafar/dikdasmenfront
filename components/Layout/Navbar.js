import { Fragment, useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";

import Link from "next/link";

import Logo from "../UI/Logo";
import { BiSearch, BiChevronDown, BiX, BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      <div className="bg-green-500 w-full z-20 h-6"></div>
      <nav className="sticky top-0 bg-white z-20 shadow-lg">
        <div className="container    mx-auto">
          <div className="flex items-center ">
            <div className=" py-3">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div
              className={`ml-auto fixed inset-0 transition-all duration-100 ${
                showMenu ? "bg-black/50 visible" : "invisible lg:visible"
              }   lg:relative lg:block `}
            >
              <ul
                className={`w-1/3 lg:w-auto fixed lg:absolute bg-gray-100 lg:bg-transparent transition-all duration-300 ease-in-out ${
                  showMenu ? "right-0" : "-right-full"
                } top-0    bottom-0 lg:flex lg:space-x-10 lg:items-center pb-0 lg:px-0 px-10 pt-20 lg:mt-auto`}
              >
                <div onClick={() => setShowMenu(!showMenu)}>
                  <BiX className="h-10 w-10 absolute lg:hidden  right-5 top-5 z-100 cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in-out " />
                </div>
                <Menu
                  as="li"
                  className="relative pb-3 mb-3 border-b-2 border-green-500 lg:border-none lg:pb-0 lg:mb-0"
                >
                  <Menu.Button className="hover:text-green-500 cursor-pointer lg:py-6 flex items-center transition-colors duration-300 ease-in-out outline-none">
                    Tentang <BiChevronDown />
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
                      {tentangList.map(({ text, href }, i) => (
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
                </Menu>
                {/* </li> */}
                <li className="pb-3 mb-3 border-b-2 border-green-500 lg:border-none lg:pb-0 lg:mb-0">
                  <Link href="/pendidikan">
                    <a className="hover:text-green-500 py-6 transition-colors duration-300 ease-in-out">
                      Pendidikan
                    </a>
                  </Link>
                </li>

                <Menu
                  as="li"
                  className="relative pb-3 mb-3 border-b-2 border-green-500 lg:border-none lg:pb-0 lg:mb-0"
                >
                  <Menu.Button className="hover:text-green-500 cursor-pointer lg:py-6 flex items-center transition-colors duration-300 ease-in-out outline-none">
                    Galeri <BiChevronDown />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="block lg:absolute w-full mt-2 lg:mt-0 lg:w-max min-w-[200px] outline-none border-green-500 border-t-2 lg:border-t-4 ">
                      {galeriList.map(({ text, href }) => (
                        <Menu.Item key={text}>
                          {({ active }) => (
                            <Link href={href}>
                              <a
                                className={`  ${
                                  active && "text-green-500"
                                } flex py-3 px-6 bg-white lg:border-none
                                border-b-[1px] border-green-500
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
                </Menu>
                <li className="pb-3 mb-3 border-b-2 border-green-500 lg:border-none lg:pb-0 lg:mb-0">
                  <Link href="/kontak">
                    <a className="hover:text-green-500 py-6 transition-colors duration-300 ease-in-out">
                      Kontak
                    </a>
                  </Link>
                </li>
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
            <div className="mx-10 block lg:hidden cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out">
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
