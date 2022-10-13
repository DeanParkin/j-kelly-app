import Carousel from "../components/Carousel";
import ServicesComp from "../components/ServicesComp";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="Commercial and domestic gardening and landscaping services. Open
            from 08:00am"
      />
      {/* <Carousel /> */}
      <header className="text-dark text-center container pt-3">
        <h2 className="fs-5 baskerville-font">
          Welcome To <br />
          <span className="h2 text-primary">J Kelly Gardening</span>
        </h2>
        <div className="d-flex justify-content-center">
          <p className="h2 text-primary baskerville-font"></p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="my-2 text-container">
            Commercial and domestic gardening and landscaping services. Open
            from 08:00am
          </p>
        </div>
      </header>
      <main>
        <section>
          <ServicesComp />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
