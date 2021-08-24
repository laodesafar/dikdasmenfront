import Link from "next/link";
import ButtonLengkap from "../UI/ButtonLengkap";

export default function InforPost({ tags, date, title, description, variant }) {
  return (
    <>
      <div
        className={`flex items-center text-gray-400 ${
          variant ? "text-xs" : "text-sm"
        }   space-x-2`}
      >
        <div className="capitalize">
          <Link href="#">
            <a className="hover:text-green-700 text-green-500 transition-colors duration-300 ease-in-out">
              {tags}
            </a>
          </Link>
        </div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h3
        className={`text-green-500 font-bold ${
          variant
            ? " lg:text-lg text-base mb-1 mt-1"
            : "lg:text-xl text-lg mb-1 md:mb-5  mt-3"
        }  max-h-20 md:max-h-14 overflow-hidden   `}
      >
        <Link href="">
          <a className="hover:text-green-700 transition-colors duration-300 ease-in-out">
            {title}
          </a>
        </Link>
      </h3>
      <p
        className={` ${
          variant
            ? "lg:text-sm text-xs md:mb-1"
            : "lg:text-base text-sm md:mb-4"
        }  tracking-wide hidden md:block font-normal  text-gray-500 mt-1`}
      >
        {description}
      </p>

      <div className={` ${variant ? "mt-1" : "mt-2"} md:block hidden`}>...</div>
      <ButtonLengkap
        variant="default"
        className={`mt-2 ${variant ? "hidden" : "md:block hidden"}`}
      >
        Selengkapnya
      </ButtonLengkap>
    </>
  );
}
