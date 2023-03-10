import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/Author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";
// import getPost from "../lib/helper";

type Props = {};

export default function LatestPost({}: Props) {
  // console.log(getPost);
  // getPost(2).then((res) => console.log(res));
  console.log(process.env.BASEURL);
  const { data, isLoading, isError } = Fetcher("api/posts");
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
    <section className="border-2 container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-3xl py-12 text-center">Latest Post</h1>
      {/*if it is below the medium devices only add 1 column else on md 2 cols else on lg 3*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* check if array existed before loading so it will not throw an error}*/}
        {data &&
          data.map((value: any, index: any) => (
            <Article data={value} key={index}></Article>
          ))}
        {/* <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article /> */}
      </div>
    </section>
  );
}

function Article({ data }: any) {
  const { id, title, category, img, published, subtitle, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`posts/${id}`}>
          <Image
            src={img || "/"}
            width={"500"}
            height={"300"}
            alt="FeaturedArticleImage"
          />
        </Link>

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
              className="text-4xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 py-3">{subtitle}</p>
      {author ? <Author /> : <></>}
    </div>
  );
}
