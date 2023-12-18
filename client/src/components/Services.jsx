import React from "react";
import Button from "../layouts/Button";
import { IoIosChatboxes } from "react-icons/io";
import ServicesCard from "../layouts/ServicesCard";
import { FaVideo } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  const icon1 = <IoIosChatboxes size={35} className=" text-backgroundColor" />;
  const icon2 = <FaVideo size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14 items-center justify-center">
        <ServicesCard icon={icon1} title="Chat" />
      </div>
    </div>
  );
};

export default Services;
