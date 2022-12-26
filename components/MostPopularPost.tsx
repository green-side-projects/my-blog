import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";
import Fetcher from "../lib/fetcher";
type Props = {};

export default function MostPopularPost({}: Props) {
  // {API Definition}
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
    <section className="border-2 container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-3xl py-12 text-center">Most Popular!</h1>
      {/*Most Popular*/}

      {/*swiper*/}
      <Swiper
        // autoplay={{
        //   delay: 5000,
        // }}
        // loop={true}
        breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 } }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <SwiperSlide>
          <Article />
        </SwiperSlide> */}
        {data.map((value: any, index: any) => (
          <SwiperSlide key={index}>
            <Article data={value}></Article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Article({ data }: any) {
  // Defining the state
  const { id, title, category, img, published, subtitle, author, description } =
    data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`posts/${id}`}>
          <Image
            src={img}
            width={"600"}
            height={"400"}
            alt="FeaturedArticleImage"
          />
        </Link>

        <div className="cat">
          <Link
            href={`posts/${id}`}
            className="text-[#b7c307] hover:text-orange-500 pr-3"
          >
            {category}
          </Link>
          <Link
            href={`posts/${id}`}
            className="text-gray-500 hover:text-orange-500"
          >
            {published}
          </Link>
          <div className="title">
            <Link
              href={`posts/${id}`}
              className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 py-3">{description}</p>
      {author ? <Author /> : <></>}
    </div>
  );
}
