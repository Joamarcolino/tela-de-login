import React from 'react';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 flex flex-col items-center">
        <div className="bg-[rgb(21,27,35)] rounded-lg w-[260px] border border-gray-800">
          <div className="flex flex-col items-start p-2">
            <label className="text-[14px] text-white font-sans">Email</label>
            <input
              className="w-full mt-2 p-2 border-2 border-gray-800 rounded-md bg-[rgb(13,17,23)] text-[13px] text-white outline-none"
              type="email"
              placeholder='Insert your gmail'
            />
          </div>
          <div className="flex flex-col items-start p-2">
            <label className="text-[14px] text-white font-sans">Password</label>
            <input
              className="w-full mt-2 p-2 border-2 border-gray-800 rounded-md bg-[rgb(13,17,23)] text-[13px] text-white outline-blue-600"
              type="password"
              placeholder="Insert your password"
            />
          </div>
          <div className="p-5">
            <button className=" text-white w-full bg-green-600 rounded-lg p-2 text-[13px] hover:bg-green-700 active:bg-green-500">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}