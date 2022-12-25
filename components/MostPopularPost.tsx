import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
type Props = {};

export default function MostPopularPost({}: Props) {
  return (
    <section className="border-2 container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-3xl py-12 text-center">Most Popular</h1>
      {/*Most Popular*/}

      {/*swiper*/}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Article />
        </SwiperSlide>
        <SwiperSlide>
          <Article />
        </SwiperSlide>
        <SwiperSlide>
          <Article />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
}

function Article() {
  return (
    <div className="grid">
      <div className="images">
        <Link href="/">
          <Image
            src={"/images/featuredImage.jpg"}
            width={"600"}
            height={"400"}
            alt="FeaturedArticleImage"
          />
        </Link>

        <div className="cat">
          <Link href="/" className="text-[#b7c307] hover:text-orange-500 pr-3">
            Technology, Nature
          </Link>
          <Link href="/" className="text-gray-500 hover:text-orange-500">
            December 23, 2022
          </Link>
          <div className="title">
            <Link
              href={"/"}
              className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
            >
              Headless CMS: Provide data in your application
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 py-3">
        Gives your developer a nice DevEx by easily creating mock data without
        fuss. Learn the industry standard tool for creating contents whether it
        be Strapi, Sanity or Directus. We will show you why it is that you need
        one now.
      </p>
      <Author />
    </div>
  );
}
