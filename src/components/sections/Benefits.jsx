import React from "react";
import Section from "../Section";
import HeadText from "../HeadText";
import { benefits } from "../../constants";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {
          // Header Text
        }
        <HeadText
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item, idx) => (
            // The individual cards with the cool looking 'border'.
            // `bg-[length:100%_100%]` - background now take the size of the div.
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url('/src/${item.backgroundUrl}')` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {
                  // Card Contents
                }
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                {
                  // Icon and the 'Explore More'
                }
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt="iconner"
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>

              {
                // The shine on the right part and behind of the card. (only some cards have it)
                item.light && <GradientLight />
              }

              {
                // The image to fade in and out when hovered.
                // (The one with clipping since it has unique border shape.)
              }
              <div
                className="absolute inset-0.5 bg-n-8"
                // This element is now the receiver of the <clipPath id='benefits' />
                // (on <ClipPath /> component. See below)
                // and its content is now clipped based on the shape defined on the clipPath.
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              {
                // The clipPath element that its consumer will follow by invoking the
                // `clipPath: "url(#<id_of_clipPath>)"` style.
              }
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
