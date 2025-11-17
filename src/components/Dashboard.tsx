// import React from "react";

// export const Dashboard = () => {
//   return <div>Dashboard</div>;
// };

import React, { useState } from "react";
import logo from "../image/logo.svg";

import { useNavigate } from "react-router";
export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
      <div className="min-h-screen bg-gray-50">
        <div className="shadow bg-white">
          <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
            <img src={logo} alt="" />
            <div className="flex items-center gap-4 text-sm">
              <p className="max-sm:hidden">
                Hi,
                <span> username</span>
              </p>
              <button
                className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-4 ">
              <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
                  Create Resume
                </p>
              </button>
              <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cloud-upload size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full"
                  aria-hidden="true"
                >
                  <path d="M12 13v8"></path>
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="m8 17 4-4 4 4"></path>
                </svg>
                <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
                  Upload Existing
                </p>
              </button>
            </div>
            <hr className="border-slate-300 my-6 sm:w-[305px]" />
            <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
              <button className="added-resume relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border bg-[#9333ea40] border-[#9333ea40] group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-pen-line size-7 group-hover:scale-105 transition-all text-[#9333ea]"
                  aria-hidden="true"
                >
                  <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
                  <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                  <path d="M8 18h1"></path>
                </svg>
                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center text-[#9333ea]">
                  test.hh
                </p>
                <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center *:text-[#9333ea90]">
                  <span>test Updated on </span>
                  <span>test date 11/15/2025</span>
                </p>
                <div className="absolute top-1 right-1 group-hover:flex items-center hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-pencil size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
