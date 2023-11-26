import React from "react";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";

const NavStepper = (props) => {
  const { step } = props;

  return (
    <>
      <div className="hidden lg:flex rounded-t-2xl h-12 bg-[#dddfe3]">
        <div
          className={`w-1/3 text-center rounded-tl-2xl	 ${
            step >= 1
              ? step >= 2
                ? "bg-gradient-to-r from-[#acd1fd] to-[#8bbffc]"
                : "bg-gradient-to-r from-[#acd1fd] to-[#8bbffc] rounded-r-3xl"
              : "text-gray-500"
          }`}
        >
          <div>
            <p className="text-white flex justify-center items-center text-2xl mt-1">
              <PiNumberCircleOneFill className="mr-2 text-3xl" />
              Your Profile
            </p>
          </div>
        </div>
        <div
          className={`w-1/3 text-center ${
            step >= 2
              ? step >= 3
                ? "text-white bg-gradient-to-r from-[#8bbffc] to-[#6aacfb] "
                : "text-blue-500 bg-gradient-to-r from-[#8bbffc] to-[#6aacfb] rounded-r-3xl"
              : "text-gray-500"
          }`}
        >
          <p className="text-white flex justify-center items-center text-2xl mt-1">
            <PiNumberCircleTwoFill className="mr-2 text-3xl" />
            Bussiness Information
          </p>
        </div>
        <div
          className={`w-1/3 text-center ${
            step >= 3
              ? "text-blue-500 bg-gradient-to-r from-[#6aacfb] to-[#59a3fa] rounded-tr-xl"
              : "text-gray-500"
          }`}
        >
          <p className="text-white flex justify-center items-center text-2xl mt-1">
            <PiNumberCircleThreeFill className="mr-2 text-3xl" />
            Additional Users
          </p>
        </div>
      </div>
    </>
  );
};

export default NavStepper;
