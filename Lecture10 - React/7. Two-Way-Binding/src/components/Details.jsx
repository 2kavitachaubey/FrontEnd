import React, { useState } from "react";

const Details = () => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");

  const [allUser, setAllUser] = useState([]);
  let submitForm = (e) => {
    e.preventDefault();
    // const newUser = [...allUser];
    // newUser.push({ user, phone });
    setAllUser([{ user, phone }, ...allUser]);
    console.log(allUser);

    setUser("");
    setPhone("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 pt-10">
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="flex flex-col gap-4 w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name:{" "}
          </label>
          <input
            id="name"
            className="px-3 py-2 border border-gray-400 rounded-md text-base box-border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            required
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone:{" "}
          </label>
          <input
            id="phone"
            className="px-3 py-2 border border-gray-400 rounded-md text-base box-border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="tel"
            pattern="[0-9]{10}"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-150"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col gap-3 w-full max-w-sm mt-6">
        {allUser.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-base font-semibold text-gray-800">
                {elem.user}
              </h3>
              <h5 className="text-sm text-gray-500">{elem.phone}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
