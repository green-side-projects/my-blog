/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Author from "../../components/_child/Author";
import Format from "../../layout/format";
import Related from "../../components/Related";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/Spinner";
import ErrorSpinner from "../../components/_child/ErrorSpinner";
import { useRouter } from "next/router";
type Props = {};

export default function Page() {
  const router = useRouter();
  const { postId } = router.query;

  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;

  return <Article {...data} />;
}

function Article({ author, title, img, subtitle, description }: any) {
  //destructuring the values
  // {posts}:any
  // const { author, title, img, subtitle, description } = posts;

  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author></Author> : <></>}
        </div>
        <div className="post py-10 text-center ">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-left py-2 text-gray-500 text-1.5xl">{subtitle}</p>
          <div className="py-10 flex justify-center">
            <Image
              src={img}
              width={"800"}
              height={"800"}
              alt="FeaturedArticleImage"
              className="border-2"
            />
          </div>
          <p className="text-1xl text-gray-500 text-justify">{description}</p>
        </div>
        <Related />
      </section>
    </Format>
  );
}

//get the properties
export async function getStaticProps({ params }: any) {
  const posts = await getPost(params.postId);

  return {
    props: {
      posts,
    },
  };
}
//specify values to the dynamic routes
export async function getStaticPaths() {
  const posts = await getPost();

  const paths = posts.map((value: { id: { toString: () => any } }) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
