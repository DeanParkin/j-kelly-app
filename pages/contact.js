import React from "react";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Commercial and domestic gardening and landscaping services. Open
            from 08:00am"
      />
      <ContactForm />
    </>
  );
}
