import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Database({ showSidebar }) {
  return (
    <div className="user w-full min-h-screen h-fit bg-gradient-to-t to-[#161520] from-[#06040c] text-[#00b38a]">
      <div className={`${showSidebar && 'md:ml-[300px]'} p-6 text-[#aaa] justify-center`}>
        <h1 className='text-[#aaa] mx-auto mt-8 text-3xl'>Database</h1>
        <div className='w-[330px] sm:w-4/5 z-20 mt-20 p-4 rounded-lg text-[#aaa] mx-auto p-8 border-0 border-b-[1px] border-r-[1px] rounded-l-lg border-l-[1px] border-[#04a294]'>
          The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
        </div>
      </div>
    </div>
  );
}

export default Database;
