import React from "react";

const Carts = (props) => {
  return (
    <div className="relative m-4 h-145 w-100 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="h-50 w-full overflow-hidden">
        <img
          src={props.bgImage}
          alt="Background Image"
          className="w-full h-full object-cover object-center rounded-t-2xl"
        />
      </div>
      <div className="h-35 w-35 overflow-hidden bg-white rounded-full absolute top-[25%] left-[50%] -translate-x-1/2">
        <img
          src={props.profileImg}
          alt=""
          className="w-full h-full object-cover object-center rounded-full p-1"
        />
      </div>
      <div className="pt-20 flex flex-col gap-1 justify-between items-center">
        <h1 className="text-black text-[30px] font-semibold">
          {props.username}
        </h1>
        <h3 className="text-gray-500 text-[18px] font-semibold">
          {props.name}
        </h3>
        <p className="pt-4 w-[80%] text-[18px]">{props.about}</p>
      </div>
      <div className="pt-3 flex justify-evenly items-center">
        <div className="w-6 flex flex-col items-center">
          <h1 className="text-[30px] font-semibold">{props.posts}</h1>
          <p className="text-[18px] font-semibold">Posts</p>
        </div>
        <div className="w-6 flex flex-col items-center">
          <h1 className="text-[30px] font-semibold">{props.followers}</h1>
          <p className="text-[18px] font-semibold">Followers</p>
        </div>
        <div className="w-6 flex flex-col items-center">
          <h1 className="text-[30px] font-semibold">{props.following}</h1>
          <p className="text-[18px] font-semibold">Following</p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
