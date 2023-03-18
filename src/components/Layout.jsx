import { useNavigate, Outlet } from 'react-router-dom';
import React, { useState } from 'react'

function Layout({ setShowSidebar, showSidebar }) {
  const [menu, setMenu] = useState('dashboard')
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/**
       * Navbar Component
       */}

      <div className='bg-gradient-to-r to-[#01a84e] from-[#00d29f] w-full pb-1' >
        <div className='bg-[#1e2229] h-16 w-full py-4 px-4 sm:flex justify-between'>
          <div className='flex'>
            <div className='block'>
              <i className="fa fa-bars pt-2 w-5 h-5 cursor-pointer mr-2" aria-hidden="true" onClick={() => { setShowSidebar(!showSidebar) }}></i>
            </div>
            <img src='imgs/favicon.ico' className='w-8 rounded-full h-8' alt='' />

            <div className='text-[#ccc] hidden sm:block text-xl ml-2'>Dashboard Page</div>
            <div className='bg-gradient-to-r w-auto to-[#01a84e] from-[#00d29f] p-[1px] ml-10 rounded-lg h-9 '>
              <div className="relative w-full h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fa fa-search w-5 h-5" aria-hidden="true"></i>
                </div>
                <input type="text" id="simple-search" className="bg-[#1e2229] h-full text-[#aaa] text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 d
              focus:outline-0 ark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              </div>
            </div>
            <div className='bg-gradient-to-r w-24 h-9 to-[#01a84e] from-[#00d29f] rounded-full ml-1 p-[2px] sm:hidden block'>
              <div className='flex h-full w-full justify-between'>
                <img src='imgs/avatar.png' className='w-8 rounded-full h-8' alt='' />
                <i className="fa fa-sort-desc text-white pt-1 pl-3 cursor-pointer pr-1" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className='flex float-right hidden sm:flex'>
            <div className='items-center pt-1 mr-10 flex'>
              <i className="fa fa-bullhorn w-5 h-5 cursor-pointer mx-2" aria-hidden="true"></i>
              <i className="fa fa-comment-o w-5 h-5 cursor-pointer mx-2" aria-hidden="true"></i>
              <i className="fa fa-cog w-5 h-5 cursor-pointer mx-2" aria-hidden="true"></i>
            </div>
            <div className='bg-gradient-to-r w-auto relative h-9 to-[#01a84e] from-[#00d29f] rounded-2xl py-[2px] px-2 block cursor-pointer'>
              <div className='flex h-full w-full' onClick={() => { setShowDropdown(!showDropdown) }}>
                <img src='imgs/avatar.png' className='w-8 rounded-full h-8' alt='' />
                <p className='text-white text-sm pt-1 pl-2'>admin@example.com</p>
                <i className={`fa ${showDropdown ? 'fa-sort-asc pt-3' : 'fa-sort-desc'}  text-white pt-1 pl-3 cursor-pointer`} aria-hidden="true"></i>
              </div>
              {showDropdown &&
                <div className='bg-[#1e2229] rounded absolute w-40 top-14 shadow-lg shadow-black py-3 right-4'>
                  <div className='flex p-2 text-[#aaa] hover:text-[#00b371] hover:bg-[#2f3330]' onClick={() => { setShowDropdown(false) }}>
                    <i className="fa fa-user w-5 h-5 cursor-pointer mx-2 pt-1" aria-hidden="true"></i>
                    <p>Profile</p>
                  </div>
                  <div className='flex p-2 text-[#aaa] hover:text-[#00b371] hover:bg-[#2f3330]' onClick={() => { setShowDropdown(false) }}>
                    <i className="fa fa-address-book w-5 h-5 cursor-pointer mx-2 pt-1" aria-hidden="true"></i>
                    <p>Email</p>
                  </div>
                  <div className='flex p-2 text-[#aaa] hover:text-[#00b371] hover:bg-[#2f3330]' onClick={() => { setShowDropdown(false) }}>
                    <i className="fa fa-snapchat-ghost w-5 h-5 cursor-pointer mx-2 pt-1" aria-hidden="true"></i>
                    <p>Chat</p>
                  </div>
                  <div className='flex p-2 text-[#aaa] hover:text-[#00b371] hover:bg-[#2f3330]' onClick={() => { setShowDropdown(false) }}>
                    <i className="fa fa-list w-5 h-5 cursor-pointer mx-2 pt-1" aria-hidden="true"></i>
                    <p>Todo</p>
                  </div>
                  <div className='flex p-2 text-[#aaa] hover:text-[#00b371] hover:bg-[#2f3330]' onClick={() => { setShowDropdown(false) }}>
                    <i className="fa fa-cogs w-5 h-5 cursor-pointer mx-2 pt-1" aria-hidden="true"></i>
                    <p>Settings</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div >

      {/**
     * Sidebar Component
     */}

      < div className={`w-[300px] h-fit text-[#00ffee] left-0 top-18 p-6 z-[2] absolute md:bg-transparent bg-[#13121d] transition-all duration-300 shrink-0 ${showSidebar ? "block" : "hidden"}`
      }>
        <div className='rounded-lg bg-[#0f101a] px-3 py-4 my-2'>
          <p className='text-[#aaa] font-semibold my-2 pl-4'>Hi, Admin</p>
          <img src='imgs/avatar.png' className='rounded-full w-40 mx-auto' alt='' />
        </div>
        <div className='bg-[#0f101a] rounded-full text-[#00b38a] py-2 px-4 text-sm font-semibold'>Here is new Dashboard website!</div>
        <div>
          <p className='text-[#00ffee] mt-4 py-2 font-semibold'>Menu</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'dashboard' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`} onClick={() => { setMenu('dashboard'); navigate('/dashboard') }}>
          <i className='w-10 fa fa-home' style={{ fontSize: 24 }}></i>
          <p className=''>Dashboard</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'users' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`} onClick={() => { setMenu('users'); navigate('/user-manage') }}>
          <i className='w-10 fa fa-users' style={{ fontSize: 24 }}></i>
          <p className=''>User Management</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'database' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`} onClick={() => { setMenu('database'); navigate('/database') }}>
          <i className='w-10 fa fa-database' style={{ fontSize: 24 }}></i>
          <p className=''>Database</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'faq' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`}>
          <i className='w-10 fa fa-question-circle' style={{ fontSize: 24 }}></i>
          <p className=''>Faq</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'graphic' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`}>
          <i className='w-10 fa fa-bar-chart' style={{ fontSize: 24 }}></i>
          <p className=''>Graphic</p>
        </div>
        <div className={`my-2 p-4 flex ${menu === 'system' ? 'bg-[#1f202b] text-[#00ffee]' : 'bg-[#0f101a] text-[#aaa]'} rounded-l-lg rounded-r-full cursor-pointer hover:bg-[#1f202b] hover:text-[#00ffee]`}>
          <i className='w-10 fa fa-cogs' style={{ fontSize: 24 }}></i>
          <p className=''>System Settings</p>
        </div>
        <div className='text-[#00ffee] mt-10 flex my-2 p-4 cursor-pointer'>
          <i className='w-10 fa fa-sign-out' style={{ fontSize: 20 }}></i>
          <p className='pb-1'>Sign Out</p>
        </div>
      </div >
      <Outlet />
    </>
  )
}

export default Layout;
