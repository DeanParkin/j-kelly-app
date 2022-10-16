import React from "react";
import ServicesComp from "../components/ServicesComp.js";
import SEO from "../components/SEO";

export default function services() {
  return (
    <>
      <SEO
        title="Services"
        description="The Anchor, Digbeth is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer."
      />
      <ServicesComp />
    </>
  );
}
