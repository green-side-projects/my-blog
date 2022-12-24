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
      <h1 className="font-bold text-3xl py-12 text-center">
        Most Popular Posts
      </h1>
      {/*if it is below the medium devices only add 1 column else on md 2 cols else on lg 3*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
        <section className="py-20 border-2">
          <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl text-center">Trending</h1>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
      </div>
    </section>
  );
}

function Article() {
  return (
    <div className="item">
      <div className="images">
        <Link href="/">
          <Image
            src={"/images/featuredImage.jpg"}
            width={"500"}
            height={"300"}
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
              className="text-4xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
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
