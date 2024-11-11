"use client"

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(' ITS FOCKEN EMPTY M8');
      return;
    }
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setError('');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 flex flex-col items-center">
        <div className="bg-[rgb(21,27,35)] rounded-lg w-[260px] border-4 border-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start p-2">
              <label className="text-[14px] text-white font-sans">Email address</label>
              <input
                className="w-full mt-1 p-2 border-2 border-gray-800 rounded-md bg-[rgb(13,17,23)] text-[13px] text-white outline-none"
                type="email"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start p-2">
              <label className="text-[14px] text-white font-sans">Password</label>
              <input
                className="w-full mt-1 p-2 border-2 border-gray-800 rounded-md bg-[rgb(13,17,23)] text-[13px] text-white outline-blue-600"
                type="password"
                placeholder="Insert your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 text-[13px] p-2">{error}</div>}
            <div className="p-4">
              <button className="text-white w-full bg-green-600 rounded-lg p-2 text-[13px] hover:bg-green-700 active:bg-green-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}