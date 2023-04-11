import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import star from "../../assets/star.svg";
import WhatMack from "./WhatMack";
import PrimiseEdition from "./PrimiseEdition";
import Header from "Components/Layout/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className=" container mx-auto">
        {/* Header */}
        <div className=" h-screen max-h-[700px]">
          <div className=" w-full flex flex-col gap-7 mt-20  items-center justify-around text-center">
            <h1 className="  text-7xl font-semibold">
              A platform built for a <br /> new way of working
            </h1>
            <p className=" font-medium text-lg">
              What would you like to manage with Stockology.com Work OS?
            </p>

            <div className=" flex justify-between flex-wrap my-5  w-[80%]">
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
              <div className=" border w-36 h-36  flex items-center justify-around flex-col border-gray-500 rounded-xl p-2">
                <img
                  src="https://via.placeholder.com/70x70?text=70+X+70"
                  alt="placholder"
                />
                <p> Creative & design</p>
              </div>
            </div>

            <Link
              to={"/register"}
              className=" main_color flex  items-center gap-3 text-white font-semibold px-6 py-2 rounded-full"
            >
              Get Started <HiOutlineArrowNarrowRight />
            </Link>
            <p className=" flex gap-2">
              No credit card needed <img src={star} alt=" star" />{" "}
            </p>
          </div>
        </div>
        <div>
          <WhatMack />
          <PrimiseEdition />
        </div>
      </div>
    </>
  );
};

export default Home;
