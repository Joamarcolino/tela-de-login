import React from 'react';

export default function Home() {
  return (
    
    <div className="h-[100vh] flex justify-center items-center">
      <div className="p-[20px] w-auto flex flex-col items-center justify-center ">
        <div className="opacity-80 bg-white rounded-lg w-[260px] border-gray-500 outline outline-2 outline-gray-300">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full ml-5">
              <h1 className="text-[14px] font-mono">Email</h1>
              <input
                className=" ml-2 mt-2 p-1 border-2 border-gray-300 rounded-md bg-slate-200 font-sans text-[13px] outline-2 outline-cyan-700"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="w-full ml-5 align-center justify-center">
              <h1 className="text-[14px] font-mono">Password</h1>
              <input
                className=" ml-2 mt-2 p-1 border-2 border-gray-300 bg-slate-200 outline-2 outline-cyan-700 rounded-md font-sans text-[13px] text-red-500"
                type="password"
                placeholder="Enter your password."
              />
            </div>

            <div className="mt-2 w-full flex align-center justify-center">
              <button className="  text-white shadow-3xl m-3 bg-green-600 flex justify-center items-center border-2 rounded-lg p-1 w-full hover:bg-green-700 active:bg-green-500">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
