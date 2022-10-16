import React from "react";
import AboutUsComp from "../components/AboutUsComp";
import SEO from "../components/SEO";

const drinks = () => {
  return (
    <>
      <SEO
        title="Drinks"
        description="Real and craft ales, wines, spirits, and cocktails. Traditional Thinking…Modern Drinking…"
      />
      <AboutUsComp />
    </>
  );
};

export default drinks;
