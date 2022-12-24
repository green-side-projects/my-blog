import React from "react";
import Image from "next/image";
import Author from "./_child/Author";
import Link from "next/link";

type Props = {};

export default function CategoriesPosts({}: Props) {
  return (
    <section className="border-2 container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-2xl ">Technology</h1>
          {/*Post*/}
          <div className="border-2 py-2 flex flex-col gap-6">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-2xl ">Nature</h1>
          {/*Post*/}
          <div className="border-2 py-2 flex flex-col gap-6">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </section>
  );
}

function Article() {
  return (
    <div className="flex gap-5">
      {/*Image*/}
      <div className="image flex flex-col justify-start">
        <Image
          src={"/images/featuredImage.jpg"}
          width={"400"}
          height={"400"}
          alt="FeaturedArticleImage"
          className="rounded"
        />
      </div>
      <div>
        {/*Posts*/}
        <div>
          <div className="cat">
            <Link
              href="/"
              className="text-[#b7c307] hover:text-orange-500 pr-3"
            >
              Technology, Nature
            </Link>
            <Link href="/" className="text-gray-500 hover:text-orange-500">
              December 23, 2022
            </Link>
            <div className="title">
              <Link
                href={"/"}
                className="text-2xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
              >
                Headless CMS: Provide data in your application
              </Link>
            </div>
          </div>
        </div>

        <Author />
      </div>
    </div>
  );
}
