import { BiChevronRight } from "react-icons/bi";
import ButtonLengkap from "../UI/ButtonLengkap";
import Image from "next/image";

export default function CardBerita(props) {
  return (
    <div className=" bg-gray-100 rounded-xl shadow-xl hover:shadow-md transition-shadow">
      <Image
        className="w-10 h-10 rounded-full mr-4"
        loader={props.loader}
        src={props.src}
        alt={props.title}
        width={props.width}
        height={props.height}
      />
      <div className="p-4">
        <p className="text-green-700 font-semibold text-base mt-2">
          <a href="#" className="hover:text-green-500">
            {props.tags}
          </a>
        </p>

        <h1 className="font-semibold text-gray-700 leading-none text-xl mt-1 mb-5 capitalize ">
          <a href="#">{props.title}</a>
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
