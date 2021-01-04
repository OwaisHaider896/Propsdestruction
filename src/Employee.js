import React, { useState } from "react";

const Employee = ({ name, age, salary, image }) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div className="ml-4 mt-4">
      <div
        className={`${hover || active ? "bg-blue-400" : "bg-blue-200"} ${
          hover || active ? "text-white" : "text-black"
        } text-lg  text-justify shadow-lg   w-64 p-2 m-4  rounded-lg `}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => setActive((prevState) => !prevState)}
      >
        <div className="">
          <img
            className="w-16 h-16 rounded-full border border-white-200 "
            src={image}
            alt="img"
          />
        </div>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Salary: {salary}</li>
        </ul>
      </div>
    </div>
  );
};

export default Employee;
