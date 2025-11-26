// import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../api/axios";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface NewUserType {
  email: string;
  password: string;
}

export const Login = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const { mutate, data, isSuccess } = useMutation({
    mutationFn: async (newUser: NewUserType) => {
      const { data } = await axios.post("/api/users/login", {
        email: newUser.email,
        password: newUser.password,
      });
      return data;
    },
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.token);
      navigate("/Dashboard");
    }
  }, [isSuccess]);

  return (
    <>
      <div className="w-full h-full bg-[#f1f0f0] flex justify-center items-center ">
        <div className="w-[350px] h-[402px] bg-white rounded-[18px] border-1 border-gray-400 flex flex-col justify-center items-center ">
          <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
          <p className="text-gray-500  text-sm mt-2">
            Please login to continue
          </p>

          <form
            className="flex flex-col justify-center items-center gap-[18px]    mt-[20px] "
            onSubmit={handleSubmit(({ email, password }) => {
              mutate({ email: email, password: password });
            })}
          >
            <div className="flex gap-[8px] justify-center items-center w-[284px] h-[48px]   border-1 border-gray-300/80 rounded-[30px]">
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
                {...register("email", { required: true })}
              />
            </div>

            <div className="flex gap-[8px] justify-center items-center w-[284px] h-[48px]  border-1 border-gray-300/80 rounded-[30px]">
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
                {...register("password", { required: true })}
              />
            </div>

            <div className="flex justify-start ml-[80px]  w-full ">
              <p className="cursor-pointer text-[#19CE61] text-[14px] mt-[20px]">
                Forget password?
              </p>
            </div>

            <button
              className="w-[284px] h-[44px] bg-[#19CE61] mt-[10px] rounded-[30px] flex justify-center items-center text-white cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="cursor-pointer text-gray-500 text-[14px] mt-[10px] mb-[30px]">
            Please login to continue?
            <span
              className="text-[#19CE61]"
              onClick={() => {
                // setIsOpen(false);
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
