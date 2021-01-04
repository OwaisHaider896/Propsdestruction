import React from "react";
import "./styles.css";
import Employee from "./Employee";

const employeeList = [
  {
    name: "Owais",
    age: "21",
    salary: "40000",
    image:
      "https://lh3.googleusercontent.com/ogw/ADGmqu8ioXlESvm9_UjXgWDRUnha9RLTwpAp8Pxr5ZBW=s83-c-mo"
  },
  {
    name: "Amir",
    age: "20",
    salary: "80000",
    image:
      "https://avatars2.githubusercontent.com/u/43801058?s=400&u=dd43998f131ecef8098b0fd6584a53e50a2ada29&v=4"
  },
  {
    name: "Osama",
    age: "21",
    salary: "50000",
    image:
      "https://avatars0.githubusercontent.com/u/62401172?s=400&u=1ab8c8579626e9a599599116175d00951085db77&v=4"
  },
  {
    name: "Usman",
    age: "21",
    salary: "60000",
    image:
      "https://avatars0.githubusercontent.com/u/49396362?s=400&u=8876aa1210515ace059bba8d06086879f492e962&v=4"
  },
  {
    name: "Ali",
    age: "22",
    salary: "30000",
    image:
      "https://avatars0.githubusercontent.com/u/18057994?s=400&u=08073e19e05cc0e7a60a27c3738f90578bd80f88&v=4"
  },
  {
    name: "Humayun",
    age: "23",
    salary: "10000",
    image:
      "https://avatars2.githubusercontent.com/u/53262712?s=400&u=4ddcdf4e7bb7561ad87c2af790fffd7739bdbd6e&v=4"
  },
  {
    name: "Omaima",
    age: "21",
    salary: "30000",
    image:
      "https://avatars2.githubusercontent.com/u/37713288?s=400&u=1f9c55a08a77bb414b43a923e0d2be2d15b17549&v=4"
  }
];

export default function App() {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          className="w-64"
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>

      <h1 className="text-center font-bold text-2xl mb-2 ">React Developers</h1>
      <div className="flex flex-wrap">
        {employeeList.map((employee) => {
          const { name, age, salary, image } = employee;
          return (
            <Employee name={name} age={age} salary={salary} image={image} />
          );
        })}
      </div>
    </div>
  );
}
