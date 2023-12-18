import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('https://img.freepik.com/free-photo/covid-19-healthcare-workers-pandemic-concept-lovely-caring-asian-doctor-female-nurse-scrubs-showing-heart-gesture-smiling-taking-care-patients-with-love-white-background_1258-84118.jpg?w=1380&t=st=1702667479~exp=1702668079~hmac=732892a70ef59811af451d0fd22e9309f3dc467b3e4cb18d2bafa63d60be7093')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight text-teal-900">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p className="text-teal-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        <Link to={"/service"}>
          <Button title="See Services" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
