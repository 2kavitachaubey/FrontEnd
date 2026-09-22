import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-[32px] px-[48px] py-[20px] bg-white text-[#4a4640] shadow-(0 1px 0 rgba(0,0,0,0.06))">
      <div className="text-[20px] font-bold tracking-[0.3px] whitespace-nowrap text-[#1a1a1a]">
        <h1>Horizon Courts</h1>
      </div>
      <div>
        <ul className="flex items-center gap-[28px] list-none text-[15px] text-[#5c5650]">
          <li className="cursor-pointer transition-colors duration-200 hover:text-[#2f2c28]">
            About us
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-[#2f2c28]">
            Services
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-[#2f2c28]">
            Coaches
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-[#2f2c28]">
            Events
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-[#2f2c28]">
            Contacts
          </li>
        </ul>
      </div>
      <div className="text-[15px] font-semibold text-[#fdf6f0] bg-[#2f2c28] border-none rounded-[90px] px-[22px] py-[10px] curser-pointer transition-[background,transform] duration-200 ease-in-out hover:-translate-y-px">
        <button>Book now →</button>
      </div>
    </div>
  );
};

export default Navbar;
