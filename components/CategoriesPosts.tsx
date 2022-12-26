import React from "react";
import Image from "next/image";
import Author from "./_child/Author";
import Link from "next/link";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";
import Fetcher from "../lib/fetcher";
type Props = {};

export default function CategoriesPosts({}: Props) {
  // {API Definition}
  // let's use the popular
  const { data, isLoading, isError } = Fetcher("api/popular");
  // Check if it return an object array
  if (data) {
    console.log(data);
  }

  // if(true)
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  // if (true)
  if (isError)
    return (
      <div>
        <ErrorSpinner />
      </div>
    );

  return (
    <section className="border-2 container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-2xl ">Technology</h1>
          {/*Post*/}
          <div className="border-2 py-2 flex flex-col gap-6">
            {/* <Article /> */}
            {data[1] ? <Article data={data[1]}></Article> : <></>}
            {data[2] ? <Article data={data[2]}></Article> : <></>}
            {data[3] ? <Article data={data[3]}></Article> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-2xl ">Nature</h1>
          {/*Post*/}
          <div className="border-2 py-2 flex flex-col gap-6">
            {data[4] ? <Article data={data[4]}></Article> : <></>}
            {data[0] ? <Article data={data[0]}></Article> : <></>}
            {data[2] ? <Article data={data[2]}></Article> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Article({ data }: any) {
  // Defining the state
  const { id, title, category, img, published, subtitle, author, description } =
    data;

  return (
    <div className="flex gap-5">
      {/*Image*/}
      <div className="image flex flex-col justify-start">
        <Image
          src={img}
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
              href={`posts/${id}`}
              className="text-[#b7c307] hover:text-orange-500 pr-3"
            >
              {category || "Unknown"}
            </Link>
            <Link
              href={`posts/${id}`}
              className="text-gray-500 hover:text-orange-500"
            >
              {published || "Unknown"}
            </Link>
            <div className="title">
              <Link
                href={`posts/${id}`}
                className="text-2xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
              >
                {title || "Unknown"}
              </Link>
            </div>
          </div>
        </div>

        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}
