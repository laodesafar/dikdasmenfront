import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Breadcumb() {
  return (
    <ul className="flex items-center my-4">
      <li className="flex items-center">
        <Link href="/">
          <a className="capitalize hover:text-green-500 text-gray-600">
            Beranda
          </a>
        </Link>
        <BiChevronRight className="text-2xl mx-1 text-yellow-500" />
      </li>
      <li className="flex items-center">
        <Link href="/pendidikan">
          <a className="capitalize hover:text-green-500 text-gray-600">
            Pendidikan
          </a>
        </Link>
        <BiChevronRight className="text-2xl mx-1 text-yellow-500" />
      </li>
      <li className="flex items-center">
        <Link href="/pendidikan">
          <a className="capitalize pointer-events-none  text-gray-400">
            SMA Islam Sultan Agung 1
          </a>
        </Link>
      </li>
    </ul>
  );
}
