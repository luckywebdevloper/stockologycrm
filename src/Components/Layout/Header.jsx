import React from "react";
import { Link } from "react-router-dom";
import { links } from "./navdata";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="shadow-md">
        <div className=" container px-2 mx-auto justify-between  h-16 flex items-center">
          <Link to="/" className=" main_text logo">
            Stockology
          </Link>
          <div className=" flex gap-6 text-lg font-semibold  items-center justify-between">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <Link to={url} key={id} onClick={scrollToTop}>
                  {text}
                </Link>
              );
            })}
          </div>
          <div className=" flex items-center gap-4">
            <Link
              to="/register"
              className=" main_color text-white font-semibold px-4 rounded-full hover:text-blue-700  hover:bg-white border border-blue-700 transition-all ease-in-out duration-150 py-2"
            >
              Start For Free
            </Link>
            <Link to={"/login"} className="flex items-center text-lg gap-1">
              {" "}
              <AiOutlineLogin /> Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
