import { useEffect, useState } from "react";
import logo from "../image/logo.svg";
import { useNavigate } from "react-router";
import CreatedResume from "./CreatedResume";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";

interface ResumeType {
  _id: string;
  title: string;
  updatedAt: string;
}

interface NewResumeForm {
  title: string;
}

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const name = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const { data: resumes = [] } = useQuery({
    queryKey: ["resumes"],
    queryFn: async () => {
      const res = await axios.get("/api/users/resumes", {
        headers: { authorization: token },
      });

      return res.data.resumes;
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewResumeForm>({
    defaultValues: { title: "" },
  });

  const { mutate } = useMutation({
    mutationFn: async (newResume: NewResumeForm) => {
      const res = await axios.post(
        "/api/resumes/create",
        { title: newResume.title },
        { headers: { authorization: token } }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resumes] });
      setIsOpen(false);
      navigate("/ResumeInputeBuilder");
    },
  });

  const { mutate: deleteResume, isPending } = useMutation({
    mutationFn: async (id) => {
      const del = await axios.delete(`/api/resumes/delete/${id}`, {
        headers: { authorization: token },
      });
      return del.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([resumes]);
    },
    onSettled: () => {
      console.log("رزومه با موفقیت حذف شد");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="shadow bg-white">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-4 text-sm">
            <p className="max-sm:hidden">
              Hi,<span> {name}</span>
            </p>
            <button
              className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full cursor-pointer"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 hover:shadow-lg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus size-11 p-2.5 bg-indigo-500 text-white rounded-full"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <p className="text-sm">Create Resume</p>
          </button>

          {isOpen && (
            <form
              onSubmit={handleSubmit((values) => mutate(values))}
              className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-999"
            >
              <div className="relative bg-white border shadow-md rounded-lg w-full max-w-sm p-6">
                <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

                <input
                  placeholder="Enter resume title"
                  className="w-full px-4 py-2 mb-4 border rounded"
                  type="text"
                  {...register("title", { required: "Title is required" })}
                />

                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-green-600 text-white rounded cursor-pointer"
                >
                  Create Resume
                </button>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x absolute top-4 right-4 text-slate-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </div>
            </form>
          )}

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

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {resumes?.map((resume: ResumeType) => (
            <CreatedResume
              key={resume._id}
              filename={resume.title}
              updatedLabel="Last Updated"
              updatedDate={new Date(resume.updatedAt).toLocaleDateString()}
              onDelete={() => deleteResume(resume._id)}
              onEdit={() => console.log("سلام - ادیت شد: " + resume._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
