import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import readingBook2 from "../../../assets/readingBook2.lottie"

const Education = () => {
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">          
          <DotLottieReact src={readingBook2} loop autoplay />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Software Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2024-current</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Currently, I am working as a Software Developer at Dassault
              Systèmes for the past year, contributing to their product "ENOVIA"
              and gaining extensive knowledge from scratch.
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                React Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2022-24</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I worked as a React Developer at TCS, collaborating with GE, a
              USA-based client, for 2 years, delivering robust solutions.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Educational Qualification
              </h3>
              <p className="text-sm text-neutral font-semibold">2017-22</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I hold a BE degree with an 8 CGPA and an MBA in Business Analytics
              with an 8.5 CGPA, both from Pune University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
