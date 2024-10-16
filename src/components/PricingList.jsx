import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          // Tailwind Variant selector.
          // Wrapped in '[]', represents the selector.
          //   • '&' - represents the current element. Placeholder of element ur applying the styles.
          //   • '>h4' - says that the 'h4' element (not class) is a direct child of the current
          //             element (the div on '&').
          //   • ':first' - Selects the first 'div' that has a direct 'h4'.
          //              - since ':first' is outside the '[]', it will select the first occurence
          //                of the pattern in there and apply the style on '&>h4'.
          //   • :[&:nth-child(2)] - works the same with the ':first' but had to add '[&:]'
          //                         since it wont work with only ':nth-child(2)'.
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:[&:nth-child(2)]:text-color-1 [&>h4]:[&:nth-child(3)]:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <span className="h3">$</span>
                <span className="text-[5rem] leading-none font-bold">
                  {item.price}
                </span>
              </>
            )}
          </div>

          <Button
            className={"w-full mb-6"}
            href={item.price ? "/pricing" : "mailto:contact@mike@gmail.com"}
            // '!!' turns any non-'null' or non-'undefined' value to TRUE. otherwise, FALSE.
            // Basically, if the item has a price, return TRUE.
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          {
            // Bulleted Features
          }
          <ul className="">
            {item.features.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-start py-5 border-t border-n-6"
              >
                <img src={check} alt="check" width={24} height={24} />
                <p className="body-2 ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
