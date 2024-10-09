import React from "react";
import ButtonSvg from "./../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Consuming the SVG Gradient Border
  // A height of 'h-11' == 2.75rem or 44px fits the container to the entire svg.
  // A width of 42px and more does not break the svg.

  const classes = `button relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"}`;

  const spanClass = `relative z-10 `;

  const renderBtn = () => (
    <button className={classes}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderBtn();
};

export default Button;
