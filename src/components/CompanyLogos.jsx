import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className || ""}`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      <ul className="flex justify-evenly items-center">
        {companyLogos.map((logo, idx) => (
          <li className="h-[8.5rem] flex" key={idx}>
            <img src={logo} width={134} height={28} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
