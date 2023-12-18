import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className=" bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
