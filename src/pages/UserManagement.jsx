import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserManagement({showSidebar}) {
  return (
    <div className="user w-full min-h-screen h-fit bg-gradient-to-t to-[#161520] from-[#06040c] text-[#00b38a]">
      <div className={`${showSidebar && 'md:ml-[300px]'} p-6 text-[#aaa] justify-center`}>
        <h1 className='text-[#aaa] mx-auto mt-8 text-3xl'>User Management</h1>
        <div className='w-[330px] sm:w-4/5 bg-[#1a1d25] z-20 mt-20 p-4 rounded-xl text-[#aaa] mx-auto p-8'>
          <h1 className='text-xl font-bold mb-4'>Form Submission</h1>
          <form>
            <div className="relative z-0 w-full mb-6 group">
              <input type="email" name="floating_email" id="floating_email" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label for="floating_email" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="password" name="floating_password" id="floating_password" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label for="floating_password" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="password" name="repeat_password" id="floating_repeat_password" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label for="floating_repeat_password" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_first_name" id="floating_first_name" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label for="floating_first_name" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_last_name" id="floating_last_name" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label for="floating_last_name" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label for="floating_phone" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_company" id="floating_company" className="block p-2.5 w-full text-sm bg-transparent border-0 border-b-[1px] rounded-l-xl border-l-[1px] border-[#04a294] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label for="floating_company" className="ml-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04a294] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
              </div>
            </div>
            <div className='flex'>
              <button type="submit" className="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              <button className="mx-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
