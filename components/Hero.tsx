import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Hero() {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
}

function Slide() {
  return (
    <>
      <div className="grid md:grid-cols-2 border-2 py-2">
        {/*Image*/}
        <div className="image py-1 px-20 md:ml-20">
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

        <div className="info pr-20  flex justify-center flex-col ">
          <div className="cat">
            <Link
              href="/"
              className="text-[#b7c307] hover:text-orange-500 px-2"
            >
              Technology, Nature
            </Link>
            <Link href="/" className="text-gray-500 hover:text-orange-500">
              December 23, 2022
            </Link>
            <div className="title">
              <Link
                href={"/"}
                className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
              >
                Headless CMS: Provide data in your application
              </Link>
            </div>
            <p className="text-gray-500 py-3">
              Gives your developer a nice DevEx by easily creating mock data
              without fuss. Learn the industry standard tool for creating
              contents whether it be Strapi, Sanity or Directus. We will show
              you why it is that you need one now.
            </p>
            <Author />
          </div>
        </div>
      </div>
    </>
  );
}
