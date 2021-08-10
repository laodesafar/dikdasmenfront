import Image from "next/image";

import InforPost from "@components/Layout/InforPost";

export default function CardBerita({
  description,
  loader,
  width,
  height,
  src,
  ...infoPost
}) {
  return (
    <article className="bg-gray-100  rounded-md shadow-lg hover:shadow-xl mt-4">
      <div className="hidden md:block ">
        <Image
          className="rounded-t-lg"
          src={src}
          alt={infoPost.title}
          loader={loader}
          width={width}
          height={height}
        />
      </div>
      <div className="py-4 px-6">
        <InforPost {...infoPost} />
      </div>
    </article>
  );
}
