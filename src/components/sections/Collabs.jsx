import React from "react";
import Section from "../Section";
import { collabApps, collabContent, collabText } from "../../constants";
import { brainwaveSymbol, check } from "../../assets";
import Button from "../Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";

const Collabs = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        {
          // Left side of the Collabs page
        }
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          {
            // The bulleted features
          }
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4"> {item.text} </p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it Now!</Button>
        </div>

        {
          // Right side of the section
          // The Circular arrangement of the icons
        }

        <div className="lg:ml-auto xl:w-[38rem] mt-4 xl:mr-16">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          {
            // Wrapper for the circular icons
            // (a div with circular border and a 1:1 aspect ratio)
          }
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {
              // The inner circle
            }
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              {
                // Circle with a gradient background. Doing the Gradient border illusion again
              }
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                {
                  // The Brainwave symbol
                }
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="symbol"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            {
              // The icons around the circle.
              //
              // How to do it?
              //   • Set each <li> to absolute and position them at the top center.
              //   • Set their height to 50% so that the box is from the top to the middle
              //     of the circle.
              //   • Set the transform ORIGIN to its 'bottom'. So all their rotation axis
              //     is now at the center of the main circle. (cuz of the height 50%)
              //   • Give individual <li> a specific rotation value (they rotate from their origin)
              //   • Move the container of the <img/> upward. So the outer circle line will be
              //     at the center of the image.
              //   • Rotate the icon container. This time, its the opposite (negative) value of the
              //     rotation value used in the <li>.
            }
            <ul>
              {collabApps.map((icon, idx) => (
                <li
                  key={icon.id}
                  className={`absolute top-0 left-1/2 h-1/2 -translate-x-1/2 origin-bottom rotate-${
                    idx * 45
                  }`}
                >
                  {
                    // The icon container.
                  }
                  <div
                    className={`relative -translate-y-1/2 flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      idx * 45
                    }`}
                  >
                    <img
                      src={icon.icon}
                      alt={icon.title}
                      className="m-auto"
                      width={icon.width}
                      height={icon.height}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {
              // The line from the 'try now' button to the icons
              // In the orig, its does not line up so I modified the height of the <img>
            }
            <LeftCurve />
            {
              // Line from icons to the right
            }
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collabs;
