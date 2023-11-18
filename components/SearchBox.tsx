import React from "react";
import arrow from "@/public/icon-arrow.svg";
import Image from "next/image";

const SearchBox = ({ getInputValue, getUserIP }) => {

  function getUserInputQuery(e) {
    e.preventDefault();
    getUserIP();
    console.log("I am submitting");
  }

  return (
    <form onSubmit={getUserInputQuery} className=" mt-[30px] flex mb-5">
      <input
        onChange={(e) => getInputValue(e.target.value)}
        type="search"
        name="ip"
        className=" outline-none rounded-2xl rounded-r-none w-full py-4 px-2"
      />
      <button className="flex justify-center items-center bg-veryDarkGray px-6 rounded-r-2xl cursor-pointer hover:ease-out hover:duration-300 hover:bg-darkGray">
        <Image src={arrow} alt="arrow" />
      </button>
    </form>
  );
};

export default SearchBox;
