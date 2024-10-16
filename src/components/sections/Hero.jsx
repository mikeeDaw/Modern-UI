import React, { useRef } from "react";
import Section from "../Section";
import { curve, heroBackground, robot } from "../../assets";
import Button from "../Button";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { heroIcons } from "../../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../Generating";
import Notif from "../Notif";
import CompanyLogos from "../CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef();

  return (
    // Wrap each section with the <Section /> component
    <Section
      className={"pt-[12rem] -mt-[5.25rem]"}
      crosses
      crossesOffset={"lg:translate-y-[5.25rem]"}
      customPadding
      id={"hero"}
    >
      {
        // Bind the parallax ref here
      }
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          {
            // The subheading after the main text
          }
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave. Open the AI chat app now.
          </p>
          {
            // Call to action button
          }
          <Button href={"#pricing"} white>
            Get Started
          </Button>
        </div>

        {
          // Robot Image Container
        }
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
          {
            // conic-gradient is the gradient coming from one point. The one we did in LMS
            // This one gives an illusion that the direct child has a gradient border in
            //    combination with the 'p-0.5'.
          }
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" />
              {
                // Robot Img Container
                // The 'aspect ratio' can be applied anywhere. Not just images.
                //     - modifies the element's width and height based on screen size.
              }
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {
                  // The Robot image
                  // The width, height of <img /> and the width styling:
                  //    • width and height on the <img> tag define the intrinsic dimensions.
                  //      They act as the default dimensions before any CSS styling is applied.
                  //    • When styling (using width:100%), ur overriding the intrinsic dimensions.
                  //      if the container is smaller than the default, it will still scale down.
                }
                <img
                  src={robot}
                  alt="robot"
                  // Moves the image upward, and play with these values on screen sizes
                  className="w-full scale-1.7 -translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1440}
                  height={490}
                />

                {
                  // The 'AI is Generating' sample prompt on the bottom
                }
                <Generating classNames="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {
                  // Render the Parallax here
                  // `ScrollParallax` reacts to scrolling. See more on their docs.
                  //   - Moves child elements up/down (scroll) and up/down/left/right (mouse).
                }
                <ScrollParallax isAbsolutelyPositioned shouldPause>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {
                      // Left part nav lookin' icons.
                      heroIcons.map((item, idx) => (
                        <li className="p-5" key={idx}>
                          <img src={item} width={24} height={25} alt="icon" />
                        </li>
                      ))
                    }
                  </ul>
                </ScrollParallax>

                {
                  // Put a new Parallax item on its own Container. (my guess: it only takes one child)
                }
                <ScrollParallax isAbsolutelyPositioned shouldPause>
                  <Notif
                    className="hidden absolute -right-[5.5rem] bottom-[12rem] w-[18rem] xl:flex"
                    title="Code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          {
            // <Gradient /> on the `design/Hero` is the 2 rounded rectangles below the container.
          }
          <Gradient />

          {
            // The apparition looking ass background behind the robot img
          }
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="background"
              className="w-full "
              width={1440}
              height={1800}
            />
          </div>
          {
            // The White rings and the moving background balls via MouseParallax.
          }
          <BackgroundCircles />
        </div>

        {
          // The last part of the Hero Section
        }
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      {
        // The crosses with lines that positioned around 50% from the <Section />
      }
      <BottomLine />
    </Section>
  );
};

export default Hero;
