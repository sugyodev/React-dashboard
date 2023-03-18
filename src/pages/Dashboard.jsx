import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [23, 33, 234, 43, 567, 89, 123],
      backgroundColor: '#0f37c5',
    },
    {
      label: 'Dataset 2',
      data: [123, 633, 34, 243, 57, 89, 823],
      backgroundColor: '#dc1366',
    },
  ],
};
function Dashboard({ showSidebar }) {

  const cardComWithBorder = (text) => {
    return (
      <div className='bg-[#04a294] rounded-full p-[1px] mt-4'>
        <div className='bg-[#0f1420] rounded-full py-2 px-4 w-full'>
          <p className='font-bold text-xs md:text-base text-white text-center border-l border-b rounded-lg p-2 border-[#04a294]'>
            {text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard w-full min-h-screen h-fit bg-gradient-to-t to-[#161520] from-[#06040c] text-[#00b38a]">

      {/** 
       * Content Page
      */}
      <div className={`${showSidebar && 'md:ml-[300px]'} p-6 text-[#aaa]`}>
        <div className='sm:flex'>
          {/* <div className='sm:w-1/2 mx-2 bg-[#0f101a] rounded-lg p-2 sm:p-8 my-2'>
            1111
          </div> */}
          <div className='md:w-1/2 mx-2 rounded-lg my-2'>
            <img className='w-full rounded-lg' src='imgs/dashboard.png' alt='' />
          </div>
          <div className='md:w-1/4 mx-2 bg-[#0f101a] rounded-lg p-2 sm:px-8 sm:py-4 my-2'>
            <h4 className='font-bold'>Card1</h4>
            <p className='text-sm'>Info text:
              The basic plan comes with 200 GPU-minutes/mo.
            </p>
            <div className='mx-auto w-fit mt-2'>
              <i className="fa fa-area-chart text-[#dc1366]" style={{ fontSize: 120 }} aria-hidden="true"></i>
            </div>
            <p className='text-xs'>
              Bar Chart
            </p>
          </div>
          <div className='md:w-1/4 mx-2 my-2'>
            <div className='bg-[#0f101a] rounded-t-lg p-2 sm:px-8 sm:py-4 '>
              <h4 className='font-bold'>Card2</h4>
              <div className='mx-auto w-fit mt-2'>
                <i className="fa fa-bar-chart text-[#dc1366]" style={{ fontSize: 120 }} aria-hidden="true"></i>
              </div>
            </div>
            <div className='mt-2 rounded-full bg-[#0f101a] p-2 sm:px-8 sm:py-4 w-full flex'>
              <div className='w-1/2 mx-1 bg-[#00ffe7] rounded-l-full'></div>
              <div className='w-1/2 text-sm mx-1'>Text content</div>
            </div>
          </div>
        </div>
        <div className='md:flex p-2'>
          <div className='md:w-1/2 md:pr-3 rounded-lg my-2 md:flex'>
            <div className='md:w-1/2 w-full mr-2 bg-[#0f101a] rounded-lg p-2 sm:p-8 my-2'>
              <div className='mx-auto w-fit mt-2'>
                {/* <i className="fa fa-bar-chart text-[#dc1366]" style={{ fontSize: 120 }} aria-hidden="true"></i> */}
                <Bar options={options} data={data} />
              </div>
            </div>
            <div className='md:w-1/2 w-full ml-2 bg-[#0f101a] rounded-lg p-2 sm:p-6 my-2'>
              <h4 className='font-bold'>Card</h4>
              <p className='text-sm'>
                <i className="fa fa-bullhorn w-5 h-5 cursor-pointer mr-2 my-2 text-blue-500" aria-hidden="true"></i>
                Info text content</p>
              {cardComWithBorder('Component 1')}
            </div>
          </div>
          <div className='md:w-1/2 rounded-lg my-2 flex'>
            <div className='md:w-1/2 w-full mr-2 bg-[#0f101a] rounded-lg p-2 sm:p-8 my-2'>
              <h4 className='font-bold'>Card</h4>
              <p className='text-sm'>
                <i className="fa fa-balance-scale w-5 h-5 cursor-pointer mr-2 my-2 text-blue-500" aria-hidden="true"></i>
                Info text content</p>
              {cardComWithBorder('Component 2')}
            </div>
            <div className='md:w-1/2 w-full ml-2 bg-[#0f101a] rounded-lg p-2 sm:p-8 my-2'>
              <h4 className='font-bold'>Card</h4>
              <p className='text-sm'>
                <i className="fa fa-copyright w-5 h-5 cursor-pointer mr-2 my-2 text-blue-500" aria-hidden="true"></i>
                Info text content</p>
              {cardComWithBorder('Component 3')}
            </div>
          </div>
        </div>
        <div className='w-full sm:flex justify-end pr-4'>
          <div className='flex mx-2 my-1'>
            <input type="text" id="simple-search" className="bg-[#0f101a] h-full text-[#aaa] text-sm rounded-l-full border-[#0f101a] border focus:border-[#dc1366] 
                focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 d
                focus:outline-0 ark:text-white dark:focus:ring-blue-500 dark" placeholder="type here..." required />
            <button className='bg-[#dc1366] py-1 px-3 text-xs text-white rounded-r font-bold w-24 text-center hover:bg-[#ed3477]'>Submit</button>
          </div>
          <div className='flex mx-2 my-1'>
            <input type="text" id="simple-search" className="bg-[#0f101a] h-full text-[#aaa] text-sm rounded-l-full border-[#0f101a] border focus:border-[#dc1366] 
                focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 d
                focus:outline-0 ark:text-white dark:focus:ring-blue-500 dark" placeholder="type here..." required />
            <button className='bg-[#dc1366] py-1 px-3 text-xs text-white rounded-r font-bold w-24 text-center hover:bg-[#ed3477]'>Button1</button>
          </div>
          <div className='flex mx-2 my-1'>
            <input type="text" id="simple-search" className="bg-[#0f101a] h-full text-[#aaa] text-sm rounded-l-full border-[#0f101a] border focus:border-[#dc1366] 
                focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 d
                focus:outline-0 ark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="type here..." required />
            <button className='bg-[#dc1366] py-1 px-3 text-xs text-white rounded-r font-bold w-24 text-center hover:bg-[#ed3477]'>Button2</button>
          </div>
        </div>
        <div className='sm:flex'>
          <div className='md:w-1/2 mx-2 bg-[#0f101a] rounded-t-xl p-2 sm:p-8 my-2'>
            <p className='text-[#aaa] p-2'>Dashboard Table</p>
            <div className='max-h-[600px] overflow-y-scroll dashboard-table'>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y mt-4 dashboard-table">
                <thead className="text-xs font-semibold text-[#dc1366] uppercase bg-transparent dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-transparent text-[#aaa]">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr className="bg-transparent text-[#aaa]">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr className="bg-transparent text-[#aaa]">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='md:w-1/4 mx-2 my-2'>
            <div className='bg-[#0f101a] rounded-xl p-4'>
              <p className='border-b-[14px] border-[#12141f] rounded-xl text-xs p-2'>
                <span className='mx-2'>Text1/Content</span>
                <span className='mx-2'>Text2/Content</span>
              </p>
            </div>
            <div className='mt-4 bg-[#0f101a] rounded-xl p-4 text-xs text-[#dc1366]'>
              <div className='flex justify-between border-t border-[#333]'>
                <div className='flex justify-between w-full p-2'>
                  <span>No</span>
                  <span>Data</span>
                </div>
                <button className='border-l border-[#333] p-2 min-w-[77px]'>Text Button</button>
              </div>
              <div className='flex justify-between border-t border-[#333]'>
                <div className='flex justify-between w-full p-2'>
                  <span>No</span>
                  <span>Data</span>
                </div>
                <button className='border-l border-[#333] p-2 min-w-[77px]'>Text Button</button>
              </div>
              <div className='flex justify-between border-t border-[#333]'>
                <div className='flex justify-between w-full p-2'>
                  <span>No</span>
                  <span>Data</span>
                </div>
                <button className='border-l border-[#333] p-2 min-w-[77px]'>Text Button</button>
              </div>
              <div className='flex justify-between border-t border-[#333] border-b'>
                <div className='flex justify-between w-full p-2'>
                  <span>No</span>
                  <span>Data</span>
                </div>
                <button className='border-l border-[#333] p-2 min-w-[77px]'>Text Button</button>
              </div>
            </div>
          </div>
          <div className='md:w-1/4 mx-2 my-2'>
            <div className='text-sm my-3'>
              <p>Learn more about each.</p>
              <p>@2023 example@example.com</p>
            </div>
            <div className='bg-[#0f101a] rounded-lg rounded-br-[30px] p-2 sm:p-4 flex my-2'>
              <p className='bg-[#dc1366] rounded-full p-1 px-[6px] w-[34px] h-[34px]'>
                <i className='fa fa-globe text-black' style={{ fontSize: 24 }}></i>
              </p>
              <p className='text-xs ml-2 my-auto'>The href attribute requires a valid value to be accessible</p>
            </div>
            <div className='p-2 sm:pl-4 flex my-2'>
              <p className='bg-[#dc1366] rounded-full p-1 px-[6px] w-[34px] h-[34px] bg-[#00ffed]'>
                <i className='fa fa-globe text-black' style={{ fontSize: 24 }}></i>
              </p>
              <p className='text-xs ml-2 bg-[#00ffed] text-black my-auto p-2 rounded'>The href attribute requires a valid value to be accessible</p>
            </div>
            <div className='bg-[#0f101a] rounded-lg rounded-br-[30px] p-2 sm:p-4 flex my-2'>
              <p className='bg-[#dc1366] rounded-full p-1 px-[6px] w-[34px] h-[34px]'>
                <i className='fa fa-globe text-black' style={{ fontSize: 24 }}></i>
              </p>
              <p className='text-xs ml-2 my-auto'>The href attribute requires a valid value to be accessible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
