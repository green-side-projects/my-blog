import Image from "next/image";

import React from "react";

type Props = {};

export default function ErrorSpinner({}: Props) {
  return (
    <div className="text-center-py-10 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        Something went wrong
      </h1>
      <Image
        src={"/images/errorImage.png"}
        width={400}
        height={300}
        alt="errorImage"
        className="border-2 mb-10"
      ></Image>
    </div>
  );
}
