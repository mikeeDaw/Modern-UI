import React from "react";
import { ScrollParallax } from "react-just-parallax";
import { check, service1, service2, service3 } from "../../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import Generating from "../Generating";
import HeadText from "../HeadText";
import Section from "../Section";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

const Services = () => {
  return (
    <Section id="service">
      <div className="container">
        <HeadText
          title={"Generative AI Made for creators"}
          text="Brainwave unlocks the potential of AI-powered applications."
        />

        {
          // The Bento box
          // We using flex here but I think its better to use grid layouting for bento boxes.
        }
        <div className="relative">
          {
            // First row of bento
          }
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {
              // Image 1 Container
            }
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right "
                width={800}
                height={730}
                src={service1}
                alt="service1"
              />
            </div>
            {
              // Text inside the box
            }
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={25} height={25} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {
              // The 'AI is generating' component
              // can use 'left-4 bottom-4' to adjust width instead of 'w-3/4'
              // NOTE: on md, it is still 'right-4' bc if we make it 'md:right-auto' it will
              //       get smaller, up until the end of the text.
            }
            <Generating classNames="absolute bottom-4 left-4 right-4 border border-n-1/10 md:left-1/2 md:-translate-x-1/2 md:bottom-8" />
          </div>
          {
            // Second Row of Bento
            // Now using grid layout
          }
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {
              // First Card in the row
            }
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              {
                // Robot background container & the img
              }
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot2"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                />
              </div>
              {
                // Card text and the Fading black gradient over the image.
              }
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&appos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              {
                // The chat bubble Element
              }
              <ScrollParallax
                isAbsolutelyPositioned
                shouldPause={true}
                strength={0.06}
              >
                <PhotoChatMessage />
              </ScrollParallax>
            </div>
            {
              // Second Card in the Row
            }
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The World&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {
                    // The clickable icons
                    brainwaveServicesIcons.map((item, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center justify-center rounded-2xl ${
                          idx === 2
                            ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                            : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                      >
                        <div
                          className={
                            idx === 2
                              ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                              : ""
                          }
                        >
                          <img src={item} alt="item" width={24} height={24} />
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {
                // The one with the robot image
              }
              <div className="relative rounded-2xl overflow-hidden h-[20rem] bg-n-8 md:h-[25rem]">
                <img
                  src={service3}
                  alt="robot3"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                />
                {
                  // UI designs misc...
                }
                <ScrollParallax
                  isAbsolutelyPositioned
                  shouldPause
                  strength={0.04}
                >
                  <VideoChatMessage />
                </ScrollParallax>
                <VideoBar />
              </div>
            </div>
          </div>
          {
            // <Gradient /> from `design/Services.jsx` is the shine on the robot on bento box #1
          }
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
