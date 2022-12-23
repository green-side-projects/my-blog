import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
type Props = {};

export default function Format({ children }: any) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Header />
      {/*Populate the children here*/}
      <main>{children}</main>
      <Footer />
    </>
  );
}
