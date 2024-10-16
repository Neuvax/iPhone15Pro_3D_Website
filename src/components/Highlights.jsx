import React from "react";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "./../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });
    animateWithGsap(".link", { opacity: 1, y: 0 });
  }, []);

  return (
    <section
      id="highlights"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="common-padding bg-zinc h-full w-screen overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;