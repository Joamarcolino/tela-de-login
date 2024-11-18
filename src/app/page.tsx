"use client"

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



   //Serve para identificar e dar funcionalidades para os elementos email e password.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError('email or password not informed');
      return;
    }
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setError('');
  };


  //Serve para identificar quando alguém clicar no link para o video e manda um aviso caso sim.
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (window.confirm('Bro this is an experimental feature you sure you want to continue? Mb if you dont like it though.')) {
      window.location.href = e.currentTarget.href;
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 flex flex-col items-center">
        <div className="bg-[rgb(21,27,35)] rounded-lg w-[260px] border-4 border-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start p-2">
              <div >
                <label className="text-[14px] text-white font-sans">Email address</label>
              </div>
              <input
                className="w-full mt-1 p-2 border-2 border-gray-800 rounded-md bg-[rgb(13,17,23)] text-[13px] text-white outline-blue-600"
                type="email"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start p-2">
              <div className='flex space-x-12 '>
                <label className="text-[14px] text-white font-sans">Password</label>
                <a className=' text-blue-400 text-[11px] font-mono '
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  onClick={handleLinkClick} >Forgot password?</a>
              </div>
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