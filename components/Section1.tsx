import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Section1() {
  return (
    <section className="py-20 border-2">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl text-center">Trending</h1>
      </div>
      <Slide />
    </section>
  );
}

function Slide() {
  return (
    <>
      <div className="grid md:grid-cols-2 border-2 py-2">
        {/*Image*/}
        <div className="image py-1 px-20">
          <Link href="/">
            <Image
              src={"/images/featuredImage.jpg"}
              width={"600"}
              height={"600"}
              alt="FeaturedArticleImage"
            />
          </Link>
        </div>
        {/*Blog Information*/}

        <div className="info">
          <div className="cat">
            <Link
              href="/"
              className="text-orange-300 hover:text-orange-500 px-2"
            >
              Technology, Nature
            </Link>
            <Link href="/" className="text-gray-500 hover:text-orange-500">
              December 23, 2022
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
