import React from "react";
import HR_Automation from "../../assets/HRAndAutomation.svg";
import crm_icon from "../../assets/crm_icon_home.svg";
import sales from "../../assets/sales analytics.svg";
import stores from "../../assets/stores.svg";
import TaskProjects from "../../assets/TaskProjects.svg";
import chat from "../../assets/chaticon.svg";
import person from "../../assets/person.png";
import dotes from "../../assets/dotes.png";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const WhatMack = () => {
  return (
    <div className=" relative h-screen max-h-[700px] flex justify-between">
      <div className=" w-[60%]">
        <h1 className=" font-extrabold text-6xl">
          What makes Stockology <span className=" main_text">better</span>{" "}
          <span className=" main_text">than 99%</span>
        </h1>
        <p className=" my-4 flex  font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          Replaces all your current SaaS solutions
        </p>
        <p className=" my-4 flex  font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          Free forever for unlimited users
        </p>
        <p className=" flex my-4  font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          Easy to migrate your data from other systems
        </p>
        <p className=" flex  my-4 font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          Integrated with all your favorite services and apps
        </p>
        <p className=" flex my-4  font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          Used, loved, and trusted by 12,000,000+ users worldwide
        </p>
        <p className=" flex  font-medium text-lg items-center gap-2">
          <BsCheckCircleFill color="green" />
          <span className=" font-bold">100% flat fee:</span> predictable costs,
          no per-user pricing
        </p>
        <Link
          to="/register"
          className="main_color text-white font-semibold px-10 rounded-full inline-flex mt-10  hover:text-blue-700  hover:bg-white border border-blue-700 transition-all ease-in-out duration-150 py-2"
        >
          {" "}
          Start for free
        </Link>
      </div>
      <div className="  flex relative w-[40%]">
        <img
          src={person}
          className=" h-[700px] absolute right-56  z-20"
          alt=""
        />
        {/* <img src={dotes} className=" absolute  z-10" alt="" /> */}
        <div className="  w-[500px] absolute  h-[500px] rounded-full">
          <div className="">
            <div className=" element  flex flex-col items-center justify-center text-center">
              <img className="" src={HR_Automation} alt="" />
              <p>HR & Automation</p>
            </div>
            <div className=" element2   flex flex-col items-center justify-center text-center">
              <img className="" src={crm_icon} alt="" />
              <p>CRM</p>
            </div>
            <div className=" element3  flex flex-col items-center justify-center text-center">
              <img className="" src={sales} alt="" />
              <p>Sales analytics</p>
            </div>
            <div className=" element4  flex flex-col items-center justify-center text-center">
              <img className="" src={stores} alt="" />
              <p>Site & Stores</p>
            </div>{" "}
            <div className=" element5  flex flex-col items-center justify-center text-center">
              <img className="" src={TaskProjects} alt="" />

              <p>Tasks & projects</p>
            </div>
            <div className=" element6 flex  flex-col items-center justify-center text-center">
              <img className="" src={chat} alt="" />
              <p>
                Chats & online <br /> meetings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMack;
