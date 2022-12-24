/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Author from "../../components/_child/Author";
import Format from "../../layout/format";
import Related from "../../components/Related";

type Props = {};

export default function post({}: Props) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10 text-center ">
          <h1 className="font-bold text-3xl">
            Headless CMS: Provide data in your application
          </h1>
          <p className="text-left py-2 text-gray-500 text-1.5xl">
            Gives your developer a nice DevEx by easily creating mock data
            without fuss. Learn the industry standard tool for creating contents
            whether it be Strapi, Sanity or Directus. We will show you why it is
            that you need one now.
          </p>
          <div className="py-10 flex justify-center">
            <Image
              src={"/images/featuredImage.jpg"}
              width={"800"}
              height={"800"}
              alt="FeaturedArticleImage"
              className="border-2"
            />
          </div>
          <p className="text-1xl text-gray-500 text-justify">
            {" "}
            A headless CMS, or content management system, is a backend system
            that allows users to create, edit, and manage content that can be
            accessed through an API (application programming interface). This
            type of CMS is called "headless" because it separates the frontend
            presentation of the content from the backend management of the
            content. One of the main benefits of using a headless CMS is that it
            provides a flexible and customizable way to manage content. Because
            the content is accessed through an API, it can be easily integrated
            into any type of application, whether it's a website, mobile app, or
            even a smart home device. This allows developers to create unique
            and engaging experiences for their users without being limited by
            the capabilities of a traditional CMS. In addition to providing
            flexibility and customization, a headless CMS also offers a number
            of other benefits. For example, because the content is managed
            separately from the presentation, it's easier to make updates and
            changes to the content without affecting the overall design of the
            application. This can save time and resources during the development
            process. Another benefit of using a headless CMS is that it can
            improve the performance of an application. Because the content is
            delivered through an API, it can be cached and served from a CDN
            (content delivery network), which can reduce the load on the
            application's servers and improve the speed at which the content is
            delivered to the user. Finally, a headless CMS can also make it
            easier to manage content for multiple channels or devices. For
            example, a company could use a headless CMS to manage content for
            its website, mobile app, and social media channels all in one place.
            This can save time and resources by allowing the company to manage
            all of its content in one central location.
          </p>
        </div>
        <Related />
      </section>
    </Format>
  );
}
