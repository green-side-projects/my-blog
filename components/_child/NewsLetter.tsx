import React from "react";

type Props = {};

const bg = {
  background: "url('/images/banner.png') no-repeat",
  backgroundPosition: "right",
};

export default function NewsLetter({}: Props) {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe to latest posts!</h1>
        <div className="py-3 ">
          <input
            type="email"
            placeholder="Enter your Email"
            className="shadow border rounded w-9/12 py-3 px-3
             text-gray-700 focus:outline-none focus:border-sky-500"
          ></input>
        </div>
        <button className="mt-3 px-20 py-3 rounded-full bg-[#687802] text-gray-50">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
