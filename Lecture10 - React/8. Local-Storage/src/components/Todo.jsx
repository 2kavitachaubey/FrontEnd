import React, { useState } from "react";
import Card from "./Card";

const Todo = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setAllUsers([...allUsers, { name, imageURL, role, description }]);

    setName("");
    setRole("");
    setImageURL("");
    setDescription("");
  };

  const deleteUser = (index) => {
    const copyUser = [...allUsers];
    copyUser.splice(index, 1);
    setAllUsers(copyUser);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto mb-12"
      >
        <input
          className="flex-1 min-w-[45%] border-2 border-gray-700 bg-gray-900 px-4 py-2 rounded-lg outline-none placeholder-gray-500 focus:border-emerald-500 transition-colors"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="flex-1 min-w-[45%] border-2 border-gray-700 bg-gray-900 px-4 py-2 rounded-lg outline-none placeholder-gray-500 focus:border-emerald-500 transition-colors"
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />
        <input
          className="flex-1 min-w-[45%] border-2 border-gray-700 bg-gray-900 px-4 py-2 rounded-lg outline-none placeholder-gray-500 focus:border-emerald-500 transition-colors"
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          className="flex-1 min-w-[45%] border-2 border-gray-700 bg-gray-900 px-4 py-2 rounded-lg outline-none placeholder-gray-500 focus:border-emerald-500 transition-colors"
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold tracking-wide transition-colors active:scale-95 cursor-pointer">
          Create User
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-6">
        {allUsers.map((elem, idx) => {
          return <Card elem={elem} deleteUser={deleteUser} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
