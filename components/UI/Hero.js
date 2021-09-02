import Image from "next/image";
const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Hero({ title, pengumuman, tanggal }) {
  return (
    <div
      className={` ${pengumuman ? "h-44" : "h-80 w-screen"} relative bg-black `}
    >
      <Image
        className="opacity-60"
        src="assets/images/contoh.jpg"
        loader={imageLoader}
        alt="Contoh Pengumuman"
        objectFit="cover"
        layout="fill"
      />
      <div
        className={`${
          pengumuman ? "relative left-6 top-1/2" : "container mx-auto my-auto"
        }`}
      >
        {pengumuman && (
          <div>
            <div className=" text-sm font-normal text-white">{tanggal}</div>
            <h3 className="">
              <a
                href=""
                className="text-white   font-semibold uppercase text-2xl hover:text-green-500"
              >
                {title}
              </a>
            </h3>
          </div>
        )}
        {!pengumuman && (
          <h3 className="text-white  font-semibold uppercase absolute text-5xl mt-36">
            {title}
          </h3>
        )}
      </div>
    </div>
  );
}
