import Head from "next/head";
import { useEffect } from "react";
import { Navbar, Footer } from "../index";

export const MainLayout = ({ children }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    document.documentElement.style.setProperty(
      "--client-width",
      `${body.offsetWidth}px`
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Tototire | page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
