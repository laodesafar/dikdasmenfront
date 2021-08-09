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
    <article className="bg-gray-100  shadow-md mt-4">
      <div className="hidden md:block">
        <Image
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
