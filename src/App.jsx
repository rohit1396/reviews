import React from "react";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center text-xl text-emerald-700 bg-slate-50">
      <div className="my-5 w-[150px]">
        <h1 className="text-center text-4xl">Reviews</h1>
        <div className="w-3/5 mt-2 mx-auto border-b border-2 border-green-500"></div>
      </div>
      <Reviews />
    </div>
  );
};

export default App;
