import React from "react";
import Image from "next/image";
import image1 from "../public/imgs/j_kelly_services_Gardening.jpg";
import image2 from "../public/imgs/j_kelly_services_Landscaping.jpg";
import image3 from "../public/imgs/j_kelly_services_Structural.jpg";
import Link from "next/link";

const ImageCss = { maxWidth: "100%", height: "auto" };

export default function ServicesComp() {
  const serviceList = [
    {
      name: "Grounds Maintenance",
      description: [
        "Grass Cutting and Mowing ",
        "Hedge Cutting and Maintenance",
        "Litter Picking",
        "Tree Works",
        "Weed Control",
      ],
      image: image1,
      link: "/grounds-maintenance",
    },
    {
      name: "Landscaping",
      description: [
        "Fencing / Sheds",
        "Turfing",
        "Surface Repairs",
        "Garden Walls",
        "Mulching",
        "Playground",
        "Green Roofs",
        "Planting",
      ],
      image: image2,
      link: "/landscaping",
    },
    {
      name: "Cleaning Services",
      description: [
        "Guttering",
        "Windowing Cleaning",
        "Pressure Washing Hard Surfaces",
        "Graffiti Removal",
      ],
      image: image3,

      link: "/cleaning-services",
    },
  ];

  return (
    <>
      <div className="container text-dark pt-5 mb-2">
        <h2 className="h1 text-primary text-center baskerville-font">
          Services
        </h2>
        <div className="d-flex text-center justify-content-center">
          <p className="text-container">
            We offer commercial and domestic services, here are a few examples:
          </p>
        </div>
        <div className="row text-dark justify-content-center">
          {serviceList.map((service, key) => {
            return (
              <React.Fragment key={key}>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                  <div className="card border-primary h-100">
                    <Image
                      src={service.image}
                      className="card-img-top"
                      alt="..."
                      style={ImageCss}
                    />
                    <div className="card-body">
                      <p className="h4 card-title">{service.name}</p>
                      <ul className="card-text">
                        {service.description.map((item, key) => {
                          return <li key={key}>{item}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="card-footer">
                      <Link
                        href={`/services${service.link}`}
                        className="btn btn-primary align-self-end"
                      >
                        Details
                      </Link>
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
