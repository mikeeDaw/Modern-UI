import React from "react";
import Section from "../Section";
import { smallSphere, stars } from "../../assets";
import HeadText from "../HeadText";
import PricingList from "../PricingList";
import { LeftLine, RightLine } from "../design/Pricing";

const Pricing = () => {
  return (
    <Section crosses className="" id="pricing">
      <div className="container relative z-2">
        {
          // The Colorful Sphere UI element
        }
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          {
            // The stars behind the Shere
          }
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <HeadText
          tag={"Get Started with Brainwave"}
          title={"Pay once, use forever"}
        />

        {
          // The Pricing List
        }
        <div className="relative">
          <PricingList />
          {
            // The curved brackets lookin ass
          }
          <LeftLine />
          <RightLine />

          <div className="flex justify-center mt-10">
            <a
              href="/pricing"
              className="text-xs font-code font-bold tracking-wider uppercase border-b pb-1"
            >
              See the full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
