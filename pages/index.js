//import Carousel from "../components/Carousel";
import ServicesComp from "../components/ServicesComp";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import AboutUsComp from "../components/AboutUsComp";
import headerImage from "../public/imgs/j_kelly_header.png";
import { useState } from "react";
import Image from "next/image";

const ImageCss = { maxWidth: "100%", height: "auto" };

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="Commercial and domestic gardening and landscaping services. Open
            from 08:00am"
      />
      {/* <Carousel /> */}
      <header className="text-dark text-center container pt-5">
        <h2 className="h-2 baskerville-font">
          Welcome To <br />
          <div className="header-image-wrapper">
            <Image src={headerImage} alt="..." style={ImageCss} />
          </div>
        </h2>
        <div className="d-flex justify-content-center">
          <p className="h2 text-primary baskerville-font"></p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="my-2 text-container">
            J Kelly works 7 days a week to bring you top quality Commercial and
            domestic, gardening and landscaping services. Our strong reputation
            is built on our dedication to customer satisfaction and our aim is
            to offer a reasonably priced services to suit the needs you have.
            <br /> We exclusively use eco-friendly methods and materials because
            we care as much about the environment. Open from 8:00am
          </p>
        </div>
      </header>
      <main>
        <section className="pt-3">
          <AboutUsComp />
        </section>
        <section className="pt-3">
          <ServicesComp />
        </section>
        <section className="pt-3">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
