import React from "react";
import ServicesComp from "../../components/ServicesComp";
import SEO from "../../components/SEO";

export default function services() {
  return (
    <>
      <SEO
        title="Services"
        description="Commercial and domestic gardening and landscaping services. Open
            from 08:00am"
      />
      <ServicesComp />
    </>
  );
}
