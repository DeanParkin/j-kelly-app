import React from "react";

export default function cleaningServices() {
  return (
    <>
      <div className="container pt-5">
        <div className="text-center">
          <h2 className="h1 text-primary baskerville-font">
            Grounds Maintenance
          </h2>
          <p>
            We offer grounds maintenance services for the commercial and private
            sector, that support the specific needs of our customers. Our
            services are available within the midlands for any sector, including
            local authority sectors and green spaces.
            <br />
            <br /> Central to our grounds maintenance is to bring together
            people and nature and provide an environment for customers to enjoy
            and nature to thrive. The environment is the heart of our business.{" "}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <ul>
            <li>Grass Cutting and Mowing</li>
            <li>Hedge Cutting and Maintenance</li>
            <li>Litter Picking</li>
            <li>Tree Works</li>
            <li>Weed Control</li>
          </ul>
        </div>
        <p className="text-center">
          We also offer a wide range of bespoke packages. Please enquire within.
        </p>
      </div>
    </>
  );
}
