import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { exploreVideo, explore1Img, explore2Img } from "../utils";
import { gsap } from "gsap";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { opacity: 1, y: 0 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding bg-zinc relative h-full overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50hv] w-full items-center">
              <video
                playsInline
                id="exploreVideo"
                className="size-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iphone to feature an aerospace-grade titanium
                      design,{" "}
                    </span>
                    using the same alloy that spacecraft use for missions to
                    Mars
                  </p>
                </div>
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.{" "}
                    </span>
                    You&apos;ll notice the difference the moment you pick one
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
