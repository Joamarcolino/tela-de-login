import { useState } from 'react'

export default function Home() {

  return (
    <div className='h-[100vh] flex  justify-center align-centers'>
      <div className='  p-[20px]  size-auto flex flex-col align-center justify-center '>
        <div className='opacity-80 bg-white rounded-3xl w-[400px]'>
          <h2 className='flex justify-center mb-9 text-[30px] font-bold font-mono cursor-not-allowed  '>
            Do your Login
          </h2>
          <div className=' flex flex-col items-center justify-center'>
            <h1 className='text-[14px] font-bold font-mono cursor-not-allowed'>Email </h1>
            <input className='border-gray-300 rounded-md bg-slate-400 font-sans text-[16px] outline-[40px] outline-cyan-500' type="text" placeholder='Enter your email' />
          </div>
          <div className='mt-4 flex  flex-col items-center justify-center'>
            <h1 className='text-[14px] font-bold font-mono cursor-not-allowed'>Password</h1>
            <input className='text-red-500 border-gray-300 bg-slate-400 outline-[40px] outline-cyan-500 border-2 rounded-md  font-sans align-text-center text-[16px]' type="text" placeholder='Enter your password.' />
            <div className='mt-5'>
              <button className=' flex justify-center align-center border-2 rounded-2xl p-2 mb-1'>Finish</button>
            </div>
          </div >
        </div>
      </div>
    </div>
  )

}