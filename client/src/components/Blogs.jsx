import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 mb-20">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard
            img="https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?w=900&t=st=1702710242~exp=1702710842~hmac=b137bba79aaf9806fa28b4fb9e18ab65d60513a64a7f8c94c957f62a0acefa2a"
            headlines="Unraveling the Mysteries of Sleep"
          />
          <BlogCard
            img="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=ais"
            headlines="The Heart-Healthy Diet"
          />
          <BlogCard
            img="https://img.freepik.com/free-photo/senior-woman-talking-with-her-doctor_23-2148962385.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=ais"
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard
            img="https://img.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_23-2148973496.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=ais"
            headlines="Navigating Mental Health"
          />
          <BlogCard
            img="https://img.freepik.com/premium-photo/doctor-looking-patient-wheelchair_13339-214191.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=ais"
            headlines="The Importance of Regular Exercise"
          />
          <BlogCard
            img="https://img.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg?w=996&t=st=1702710359~exp=1702710959~hmac=1cc4bf078c525491c9f76859ce9d87fc76116e648ab174fb3c0b0f16d7cf9e13"
            headlines="Skin Health 101"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
