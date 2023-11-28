import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (index) => {
    if (index < 0) {
      return people.length - 1;
    } else if (index > people.length - 1) {
      return 0;
    }
    return index;
  };

  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="bg-zinc-50 flex flex-col justify-center items-center w-[95%] h-full sm:w-3/4 sm:h-4/5 lg:w-[40%] my-5 py-5 lg:my-10 lg:py-10 shadow-lg hover:shadow-xl rounded-md relative">
      <div>
        <img
          src={image}
          alt="img"
          className="w-44 h-44 object-cover rounded-[50%]"
        />
      </div>
      <h1 className="text-2xl text-slate-800 tracking-widest capitalize mt-5">
        {name}
      </h1>
      <p className="mt-1 tracking-wider text-lg uppercase">{job}</p>
      <p className="w-5/6 text-base text-gray-500 mt-3">{text}</p>
      <div className="w-full md:w-1/5 text-sm text-center flex justify-evenly items-center mt-5">
        <FaChevronLeft
          className="text-emerald-600 w-[20px] h-4 cursor-pointer"
          onClick={prevPerson}
        />
        <FaChevronRight
          className="text-emerald-600 w-[20px] h-4 cursor-pointer"
          onClick={nextPerson}
        />
      </div>
      <button
        className="mt-3 bg-indigo-500 text-sm text-slate-50 w-[100px] h-8 rounded-md pointer"
        onClick={randomPerson}
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Reviews;
