import React from "react";
import {
  ImFacebook2,
  ImYoutube,
  ImLinkedin,
  ImLinkedin2,
} from "react-icons/im";
import Link from "next/link";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto justify-center py-10">
        <div className="py-20">
          {/*Icons*/}
          <div className="flex gap-6 justify-center">
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
        <p className="text-center text-gray-400">
          {"© 2023 - Present Asher Manangan. All Rights Reserved. "}
        </p>
        <p className="text-center text-gray-400">{"Terms and Conditions"}</p>
      </div>
    </footer>
  );
}
