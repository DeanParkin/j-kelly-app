import React from "react";
import AboutUsComp from "../components/AboutUsComp";
import SEO from "../components/SEO";

export default function about() {
  return (
    <>
      <SEO
        title="About"
        description="Commercial and domestic gardening and landscaping services. Open
            from 08:00am"
      />
      <section>
        <AboutUsComp />
      </section>
    </>
  );
}
