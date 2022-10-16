import React from "react";
import NewsLetter from "./NewsLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook link",
      href: "#",
      faIcon: faFacebook,
    },
    {
      name: "instagram link",
      href: "#",
      faIcon: faInstagramSquare,
    },
    {
      name: "twitter link",
      href: "#",
      faIcon: faTwitter,
    },
  ];

  const router = useRouter();
  let url = `${router.asPath}`;

  const shareData = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `J Kelly Gardening`,
          text: `J Kelly Gardening`,
          url: `${url}`,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <footer className="mt-3">
        {/* <NewsLetter /> */}
        <div className="social-container border-top border-primary">
          <div className="container d-flex justify-content-around fs-3 align-items-center py-4">
            {socialIcons.map((icon) => {
              return (
                <>
                  <a
                    href={icon.href}
                    target="_blank"
                    className="social-link"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                  >
                    <FontAwesomeIcon
                      icon={icon.faIcon}
                      className="social-icon"
                      size="sm"
                    ></FontAwesomeIcon>
                  </a>
                </>
              );
            })}
            <div
              onClick={() => {
                shareData();
              }}
              className="social-link"
            >
              <FontAwesomeIcon
                icon={faShareNodes}
                className="social-icon"
                size="sm"
                aria-label="Page Share Link"
              />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="container">
            <div className="copyright-container justify-content-center text-center fs-6">
              <p className="copyright mb-1">
                <span className="text-dark">
                  &copy; {new Date().getFullYear()} J KELLY GARDENING. ALL
                  RIGHTS RESERVED.
                </span>
              </p>
              <a
                href="https://www.theanchordigbeth.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link px-3 mb-3"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.theanchordigbeth.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link mb-3"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-center text-dark pb-4">
                Website developed by <a href="#">Plan;D</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
