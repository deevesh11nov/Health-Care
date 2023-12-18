import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827760.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=sph",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1702668363~exp=1702668963~hmac=ba9823fad35de6eae1a50aa433e3539e3810c213b5e7dbb6d79fddb879413d1d",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88108.jpg?w=996&t=st=1702668387~exp=1702668987~hmac=4406eb34ba64944c8427fb2119d41831ff27ff64c3cfc0db95975f2e8d6953ff",
      name: "Dr. Camila",
      specialties: "Pediatrician",
    },
    {
      img: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1702668334~exp=1702668934~hmac=a444b93bfcd9030a0170b42ace20f3af0794d9f924e3e3a9406f05890f9b5cc3",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=sph",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "https://img.freepik.com/free-photo/woman-with-stethoscope-holding-clipboard_1098-2502.jpg?size=626&ext=jpg&ga=GA1.1.1910946752.1700297277&semt=sph",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0 ">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center ">
                <h1 className=" font-semibold text-xl pt-1">{e.name}</h1>
                <h3 className=" pt-0">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
