import React from "react";
import {
  ImFacebook2,
  ImYoutube,
  ImLinkedin,
  ImLinkedin2,
} from "react-icons/im";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col justify-items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex-justify-center py-4 sm:py-0">
          <input type="text" placeholder="Search" className="input-text " />
        </div>
        <div className="shrink w-80 sm:order-2 ">
          <Link href="/" className="font-bold uppercase text-3xl">
            asherl
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6 py-4">
            <Link href="/">
              <ImFacebook2 color="#888888" />
            </Link>
            <Link href="/">
              {" "}
              <ImYoutube color="#888888" />
            </Link>{" "}
            <Link href="/">
              {" "}
              <ImLinkedin2 color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
