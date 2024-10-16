import React from "react";
import Section from "../Section";
import HeadText from "../HeadText";
import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../assets";
import Tagline from "../Tagline";
import Button from "../Button";

const Roadmap = () => {
  return (
    <Section className={"overflow-hidden"} id="roadmap">
      <div className="container md:pb-10 ">
        <HeadText
          tag={"Ready to get started"}
          title={"what we're working on"}
        />

        {
          // Container of All 4 roadmap cards
        }
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";
            return (
              // Container of the card. Also does the gradient border illusion conditionally.
              // 'even:md:translate-y-[7rem]' - moves all right boxes (since on md its 2 cols)
              //                                downward.
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15">
                  {
                    // The background grid image
                  }
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>

                  {
                    // Card Content
                  }
                  <div className="relative z-1">
                    {
                      // Date and Status. The Top part content
                    }
                    <div className="flex items-center justify-between max-w-[27rem] mb-10 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      {
                        // Status
                      }
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt="Status"
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />

                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    {
                      // The main image of the card.
                    }
                    <div className="mb-10 -my-9 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt="mainImg"
                        className="w-full"
                        width={630}
                        height={420}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {
          // Roadmap button
        }
        <div className="flex justify-center mt-20">
          <Button>Our Roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
