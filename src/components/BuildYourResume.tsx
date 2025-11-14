import React from "react";
import groupImage1 from "../image/group-image-1.png";

const BuildYourResume = () => {
  return (
    <div className="flex flex-col items-center my-10 scroll-mt-12">
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-zap"
          aria-hidden="true"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
        <span>Simple Process</span>
      </div>
      <div className="text-center mt-6 text-slate-700">
        <h2 className="text-3xl sm:text-4xl font-medium">Build your resume</h2>
        <p className="max-sm max-w-2xl mt-4 text-slate-500">
          Our streamlined process helps you create a professional resume in
          minutes with intelligent AI-powered tools and features.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center xl:-mt-10">
        <img className="max-w-2xl w-full xl:-ml-32" src={groupImage1} alt="" />
        <div className="px-4 md:px-0">
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors border-violet-300 bg-violet-100">
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
                className="size-6 stroke-violet-600"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get instant insights into your finances with live dashboards.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
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
                className="size-6 stroke-green-600"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Bank-Grade Security
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  End-to-end encryption, 2FA, compliance with GDPR standards.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Customizable Reports
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Export professional, audit-ready financial reports for tax or
                  internal review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourResume;
