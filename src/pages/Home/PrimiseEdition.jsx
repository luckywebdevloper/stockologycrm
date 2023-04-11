import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import person2 from "../../assets/person-2.png";

const PrimiseEdition = () => {
  return (
    <>
      <div>
        <div className=" relative h-screen max-h-[700px] flex justify-between">
          <div className="  flex relative w-[50%]">
            <img src={person2} alt="" />
          </div>

          <div className=" w-[50%]  flex flex-col justify-center">
            <h1 className=" font-medium text-6xl">
              Stockology <span className="">On-Primise Edition </span>
            </h1>
            <p className=" my-4 flex  font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              Increased service performance and speed
            </p>
            <p className=" my-4 flex  font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              Hosted on your own server
            </p>
            <p className=" flex my-4  font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              Enhanced security settings
            </p>
            <p className=" flex  my-4 font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              Fully customizable: fonts, colors, menus, texts, source code, etc.
            </p>
            <p className=" flex my-4  font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              Easily scalable
            </p>
            <p className=" flex  font-medium text-lg items-center gap-2">
              <BsCheckCircleFill color="green" />
              100+ third-party integrations
            </p>
            <Link
              to="/register"
              className="main_color text-white font-semibold px-10 rounded-full flex w-52     mt-10  hover:text-blue-700  hover:bg-white border border-blue-700 transition-all ease-in-out duration-150 py-2"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimiseEdition;
