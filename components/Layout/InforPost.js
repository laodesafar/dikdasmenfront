import ButtonLengkap from "../UI/ButtonLengkap";

export default function InforPost({ tags, date, title, description }) {
  return (
    <>
      <div className="flex items-center text-gray-400 text-sm space-x-2">
        <div className="capitalize">
          <a href="#" className="hover:text-green-500">
            {tags}
          </a>{" "}
        </div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h3 className="text-gray-700 font-bold lg:text-2xl text-lg max-h-20 md:max-h-16 overflow-hidden mt-3 mb-5">
        <a href="" className="hover:text-green-500">
          {title}
        </a>
      </h3>
      <p className="lg:text-base text-sm tracking-wide hidden md:block  md:mb-4 text-gray-500 mt-1">
        {description}
      </p>

      <div className="mt-2 md:block hidden">...</div>
      <ButtonLengkap className="mt-2 md:block hidden">
        Selengkapnya
      </ButtonLengkap>
    </>
  );
}
