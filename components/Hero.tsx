import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";

type Props = {};

export default function Hero({}: Props) {
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  const { data, isLoading, isError } = Fetcher("api/trending");
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
    //style={bg}>
    <section className="py-20 border-2">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl text-center">Trending</h1>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((value: any, index: any) => (
          <SwiperSlide key={index}>
            <Slide data={value}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Slide({ data }: any) {
  const { id, title, category, img, published, subtitle, author, description } =
    data;
  return (
    <>
      <div className="grid md:grid-cols-2 border-2 py-2">
        {/*Image*/}
        <div className="image py-1 px-20 md:ml-20">
          <Link href="/">
            <Image
              src={img || "/"}
              width={"600"}
              height={"600"}
              alt="FeaturedArticleImage"
            />
          </Link>
        </div>
        {/*Blog Information*/}

        <div className="info pr-20  flex justify-center flex-col ">
          <div className="cat">
            <Link
              href="/"
              className="text-[#b7c307] hover:text-orange-500 px-2"
            >
              {category || "Unknown"}
            </Link>
            <Link href="/" className="text-gray-500 hover:text-orange-500">
              {published || "Unknown"}
            </Link>
            <div className="title">
              <Link
                href={"/"}
                className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
              >
                {title || "Unknown"}
              </Link>
            </div>
            <p className="text-gray-500 py-3">{description || "Unknown"}</p>
            {author ? <Author /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}
