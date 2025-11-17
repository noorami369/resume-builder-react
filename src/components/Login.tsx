import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUserStore } from "../store/useUserStore";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = useUserStore((state) => state.login);

  const handleLogin = () => {
    const isValid = login(email, pass);

    if (isValid) {
      console.log("Login successful!");

      navigate("/Dashboard"); // صفحه‌ای که بعدش می‌خوای بری
    } else {
      console.log("Email or password is incorrect!");
    }
  };

  return (
    <>
      <div className="w-full h-full bg-[#f1f0f0] flex justify-center items-center ">
        <div className="w-[350px] h-[402px] bg-white rounded-[18px] border border-gray-400 flex flex-col justify-center items-center ">
          <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
          <p className="text-gray-500  text-sm mt-2">
            Please login to continue
          </p>

          <form className="flex flex-col justify-center items-center gap-[18px]    mt-5 ">
            <div className="flex gap-2 justify-center items-center w-[284px] h-12   border border-gray-300/80 rounded-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <input
                type="text"
                className="border-none"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex gap-2 justify-center items-center w-[284px] h-12  border border-gray-300/80 rounded-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-lock"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="text"
                className="border-none"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
          </form>

          <div className="flex justify-start ml-20  w-full ">
            <p className="cursor-pointer text-[#19CE61] text-[14px] mt-5">
              Forget password?
            </p>
          </div>

          <div
            className="w-[284px] h-11 bg-[#19CE61] mt-2.5 rounded-[30px] flex justify-center items-center text-white cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </div>

          <p className="cursor-pointer text-gray-500 text-[14px] mt-2.5 mb-[30px]">
            Please login to continue?
            <span
              className="text-[#19CE61]"
              onClick={() => {
                setIsOpen(false);
                navigate("/GetStartLN");
              }}
            >
              click here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
