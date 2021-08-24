import Image from "next/image";

import InforPost from "@components/Layout/InforPost";

export default function CardBerita({
  description,
  width,
  height,
  src,
  ...infoPost
}) {
  return (
    <article className="bg-gray-100   shadow-lg mt-4">
      <div className="hidden md:block ">
        <Image src={src} alt={infoPost.title} width={width} height={height} />
      </div>
      <div className="py-4 px-6">
        <InforPost {...infoPost} />
      </div>
    </article>
  );
}
