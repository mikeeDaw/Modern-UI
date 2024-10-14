import SectionSvg from "../assets/svg/SectionSvg";

// This acts as a Reusable container of the content. Has an additional styling to add separation
// between different sections.

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPadding,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${customPadding || "py-10 lg:py-16 xl:py-20"} ${
        crosses ? "lg:py-32 xl:py-40" : ""
      } ${className || ""}`}
    >
      {children}

      {
        // The Vertical lines on the sides of the content
        // Only seen on medium screen sizes and above.
      }
      <div className="absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none hidden md:block lg:left-7.5 xl:left-10" />
      <div className="absolute top-0 w-0.25 h-full bg-stroke-1 pointer-events-none hidden md:block right-5 lg:right-7.5 xl:right-10" />

      {
        // Horizontal line at the TOP with crosses on the sides to divide sections
        crosses && (
          <>
            <div
              className={`hidden absolute top-0 inset-x-7.5 h-0.25 bg-stroke-1 ${
                crossesOffset ?? ""
              } pointer-events-auto lg:block xl:inset-x-10`}
            />
            {
              // The cross svg
            }
            <SectionSvg crossesOffset={crossesOffset} />
          </>
        )
      }
    </div>
  );
};

export default Section;
