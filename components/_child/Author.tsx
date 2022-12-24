import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Author({}: Props) {
  return (
    <div className="author flex py-5 border-2">
      <Image
        src={"/images/author/asher.jpg"}
        alt="authorImage"
        className="rounded-full"
        height={60}
        width={60}
      />{" "}
      <div className="text-gray-600 flex flex-col justify-center text-md font-bold hover:text-gray-400">
        <Link href="/">Asher Manangan</Link>
        <span className="text-sm text-gray-500">FullStack Developer</span>
      </div>
    </div>
  );
}
