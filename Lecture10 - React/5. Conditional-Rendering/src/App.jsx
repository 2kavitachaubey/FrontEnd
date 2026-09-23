import React from "react";
import Navbar from "./components/Navbar";
import Male from "./components/Male";
import Female from "./components/Female";

const App = () => {
  const person = [
    {
      gender: "male",
      age: 18,
    },
    {
      gender: "male",
      age: 17,
    },
    {
      gender: "female",
      age: 18,
    },
  ];

  const btnContent = () => {
    console.log("It's clicked...");
  };

  return (
    <div>
      {/* <Navbar color="red" list={["Home", "About", "LogIn"]} />
      <Navbar
        color="blue"
        list={["Classroom", "Study", "Status", "Application"]}
      /> */}

      {/* Conditional-Rendering */}
      {person.map((elem, idx) =>
        elem.gender === "male" ? (
          elem.age >= 18 ? (
            <Male key={idx} />
          ) : (
            <Female key={idx} />
          )
        ) : (
          <Female key={idx} />
        ),
      )}

      <button
        onClick={function () {
          btnContent();
        }}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Click me
      </button>
    </div>
  );
};

export default App;
