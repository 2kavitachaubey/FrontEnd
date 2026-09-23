import React from "react";
import Carts from "./components/Carts";

const App = () => {
  const userDetails = [
    {
      backgroundImg: "/bgImg1.jpg",
      profileImg: "/p1.jpg",
      username: "kavita_chaubey",
      name: "Kavita Chaubey",
      about: "Frontend developer who loves building clean UIs.",
      posts: 120,
      followers: 3400,
      following: 180,
    },
    {
      backgroundImg: "/bgImg2.jpg",
      profileImg: "/p2.jpg",
      username: "bhavesh_dev",
      name: "Bhavesh Chaubey",
      about: "Learning React, one component at a time.",
      posts: 85,
      followers: 2100,
      following: 240,
    },
    {
      backgroundImg: "/bgImg3.jpg",
      profileImg: "/p3.jpg",
      username: "pawan_codes",
      name: "Pawan Kumar",
      about: "Backend guy exploring the frontend world.",
      posts: 56,
      followers: 980,
      following: 130,
    },
  ];

  return (
    <div className="bg-pink-100 min-h-screen w-full p-10 flex items-center justify-center gap-4">
      {userDetails.map((elem, idx) => {
        return (
          <Carts
            bgImage={elem.backgroundImg}
            profileImg={elem.profileImg}
            username={elem.username}
            name={elem.name}
            about={elem.about}
            posts={elem.posts}
            followers={elem.followers}
            following={elem.following}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default App;
