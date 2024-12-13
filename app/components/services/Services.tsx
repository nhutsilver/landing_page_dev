import React from "react";
import BigHeading from "../big_heading/BigHeading";
import Image from "next/image";
import Img1 from "../../../public/images/hero.png";

const Services = () => {
  return (
    <div id="nav-services" className="mt-56 flex flex-col items-center px-4">
      <BigHeading label="My services" />
      <div className="mt-5 max-w-2xl text-center">
        <p className="text-2xl">
          Wedev.vn provides information technology solutions and services. Meet
          the diverse needs of customers. Update new technologies every day.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center mt-32 gap-8">
        {/* Service Card 1 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] flex items-center justify-center flex-col shadow-xl rounded-lg p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image src={Img1} alt="software" className="object-cover" />
          <h5 className="text-zinc-900 text-center font-bold text-4xl mt-4 group-hover:text-blue-500">
            Web development
          </h5>
          <p className="mt-4 text-gray-600 group-hover:text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            dicta earum repudiandae ducimus saepe nostrum beatae voluptates,
            deleniti sit deserunt magnam praesentium similique eaque eos ad
            quibusdam, quos doloribus!
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] flex items-center justify-center flex-col shadow-xl rounded-lg p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image src={Img1} alt="software" className="object-cover" />
          <h5 className="text-zinc-900 text-center font-bold text-4xl mt-4 group-hover:text-blue-500">
            Maintainence Web
          </h5>
          <p className="mt-4 text-gray-600 group-hover:text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            dicta earum repudiandae ducimus saepe nostrum beatae voluptates,
            deleniti sit deserunt magnam praesentium similique eaque eos ad
            quibusdam, quos doloribus!
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] flex items-center justify-center flex-col shadow-xl rounded-lg p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image src={Img1} alt="software" className="object-cover" />
          <h5 className="text-zinc-900 text-center font-bold text-4xl mt-4 group-hover:text-blue-500">
          Consulting and implementation Website
          </h5>
          <p className="mt-4 text-gray-600 group-hover:text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            dicta earum repudiandae ducimus saepe nostrum beatae voluptates,
            deleniti sit deserunt magnam praesentium similique eaque eos ad
            quibusdam, quos doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
