import ButtonLengkap from "../UI/ButtonLengkap";

export default function InforPost({ tags, date, title, description }) {
  return (
    <>
      <div className="flex items-center text-gray-400 text-sm space-x-2">
        <div className="capitalize">
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300 ease-in-out"
          >
            {tags}
          </a>
        </div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h3 className="text-gray-700 font-bold lg:text-xl text-lg max-h-20 md:max-h-14 overflow-hidden mb-1 mt-3 md:mb-5 ">
        <a
          href=""
          className="hover:text-green-500 transition-colors duration-300 ease-in-out"
        >
          {title}
        </a>
      </h3>
      <p className="lg:text-base text-sm tracking-wide hidden md:block font-normal md:mb-4 text-gray-500 mt-1">
        {description}
      </p>

      <div className="mt-2 md:block hidden">...</div>
      <ButtonLengkap variant="default" className="mt-2 md:block hidden">
        Selengkapnya
      </ButtonLengkap>
    </>
  );
}
