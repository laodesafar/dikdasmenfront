import { BiChevronRight } from "react-icons/bi";
import ButtonLengkap from "../UI/ButtonLengkap";

export default function CardBerita() {
  return (
    <div className=" bg-gray-100 rounded-xl shadow-xl hover:shadow-md transition-shadow">
      <img
        className=" rounded-t-xl  w-full"
        src="http://unissula.ac.id/wp-content/uploads/2021/07/31-Prof-Topik-1024x577.jpeg"
      />
      <div className="p-4">
        <p className="text-green-700 font-semibold text-base mt-2">
          <a href="#" className="hover:text-green-500">
            Berita
          </a>
        </p>

        <h1 className="font-semibold text-gray-700 leading-none text-xl mt-1 mb-5 capitalize ">
          <a href="#">Enam Tantangan Global dan Sepuluh Solusinya</a>
        </h1>

        <div className="mb-5">
          <ButtonLengkap>
            Selengkapnya <BiChevronRight className="w-6 h-6" />
          </ButtonLengkap>
        </div>
      </div>
    </div>
  );
}
