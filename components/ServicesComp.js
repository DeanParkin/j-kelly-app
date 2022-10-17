import React from "react";
import Image from "next/image";
import image1 from "../public/imgs/j_kelly_services_Gardening.jpg";
import image2 from "../public/imgs/j_kelly_services_Landscaping.jpg";
import image3 from "../public/imgs/j_kelly_services_Structural.jpg";

export default function ServicesComp() {
  const serviceList = [
    {
      name: "Gardening",
      description: [
        { item: "Grass Cutting", key: 1 },
        { item: "Hedge Trimming", key: 2 },
        { item: "Weeding", key: 3 },
      ],
      image: image1,
      key: 111,
    },
    {
      name: "Landscaping",
      description: [
        { item: "Turf Laying", key: 4 },

        { item: "Tree Removal", key: 5 },

        { item: "Fencing", key: 6 },
      ],
      image: image2,
      key: 112,
    },
    {
      name: "Structural",
      description: [
        { item: "Slabbing", key: 7 },

        { item: "Drive/Patio Cleaning", key: 8 },

        { item: "Sheds", key: 9 },
      ],
      image: image3,
      key: 113,
    },
  ];

  return (
    <>
      <div className="container text-dark pt-3 mb-2">
        <h2 className="h1 text-primary text-center baskerville-font">
          Services
        </h2>
        <div className="d-flex text-center justify-content-center">
          <p className="text-container">
            We offer commercial and domestic services, here are a few examples:
          </p>
        </div>
        <div className="row text-dark">
          {serviceList.map((service) => {
            return (
              <React.Fragment key={service.key}>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                  <div className="card border-primary">
                    <Image
                      src={service.image}
                      className="card-img-top"
                      alt="..."
                      width={500}
                      height={400}
                    />
                    <div className="card-body">
                      <p className="h4 card-title">{service.name}</p>
                      <ul className="card-text">
                        {service.description.map((item) => {
                          return <li key={item.key}>{item.item}</li>;
                        })}
                      </ul>
                      <a href="#contactForm" className="btn btn-primary">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
