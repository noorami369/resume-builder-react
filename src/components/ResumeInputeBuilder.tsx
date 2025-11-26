import { useNavigate } from "react-router";
import logo from "../image/logo.svg";
import { useForm } from "react-hook-form";

export const ResumeInputeBuilder = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem("username");

  interface InputData {
    email: string;
    fullName: string;
    linkedin: string;
    location: string;
    phone: string;
    profession: string;
    website: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputData>();

  const allValues = watch();

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="shadow bg-white">
          <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
            <img className="h-11 w-auto" src={logo} alt="" />
            <div className="flex items-center gap-4 text-sm">
              <p className="max-sm:hidden">
                <span>Hi, </span>
                <span>{name}</span>
              </p>
              <button className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all cursor-pointer">
                Logout
              </button>
            </div>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <button className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all cursor-pointer">
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
              className="lucide lucide-arrow-left size-4"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            <span
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              Back to Dashboard
            </span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
                <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <button className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-panels-top-left"
                            aria-hidden="true"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                            ></rect>
                            <path d="M3 9h18"></path>
                            <path d="M9 21V9"></path>
                          </svg>
                          <span className="max-sm:hidden">Template</span>
                        </button>
                      </div>

                      <div className="relative">
                        <button className="flex items-center gap-1 text-sm text-purple-600 bg-linear-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-palette"
                            aria-hidden="true"
                          >
                            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                            <circle
                              cx="13.5"
                              cy="6.5"
                              r=".5"
                              fill="currentColor"
                            ></circle>
                            <circle
                              cx="17.5"
                              cy="10.5"
                              r=".5"
                              fill="currentColor"
                            ></circle>
                            <circle
                              cx="6.5"
                              cy="12.5"
                              r=".5"
                              fill="currentColor"
                            ></circle>
                            <circle
                              cx="8.5"
                              cy="7.5"
                              r=".5"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          <span className="max-sm:hidden">Accent</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all cursor-pointer">
                        Next
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
                          className="lucide lucide-chevron-right size-4"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get Started with the personal information
                  </p>

                  {/* Upload Image */}
                  <label
                    htmlFor="avatar"
                    className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer"
                  >
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
                      className="lucide lucide-user size-10 p-2.5 border rounded-full"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    upload user image
                    <input
                      id="avatar"
                      type="file"
                      className="hidden"
                      {...register("avatar")}
                    />
                  </label>

                  {/* Full Name */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-user size-4"
                        aria-hidden="true"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-mail size-4"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-phone size-4"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phone", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-map-pin size-4"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Location
                    </label>
                    <input
                      type="text"
                      {...register("location", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your location"
                    />
                  </div>

                  {/* Profession */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-briefcase-business size-4"
                        aria-hidden="true"
                      >
                        <path d="M12 12h.01"></path>
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                        <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                      </svg>
                      Profession
                    </label>
                    <input
                      type="text"
                      {...register("profession", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your profession"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-linkedin size-4"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      {...register("linkedin", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your linkedin profile"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-globe size-4"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Personal Website
                    </label>
                    <input
                      type="url"
                      {...register("website", { required: true })}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your personal website"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm cursor-pointer"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-7 max-lg:mt-6">
              <div className="relative w-full">
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
                  <button className="flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors cursor-pointer">
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
                      className="lucide lucide-eye-off size-4"
                      aria-hidden="true"
                    >
                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                      <path d="m2 2 20 20"></path>
                    </svg>
                    Private
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors cursor-pointer">
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
                      className="lucide lucide-download size-4"
                      aria-hidden="true"
                    >
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-100">
                <div className="border border-gray-200 print:shadow-none print:border-none ">
                  <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
                    <div className="text-center mb-8 pb-6 border-b-2">
                      <h2 className="text-3xl font-bold mb-2">
                        <span>
                          {allValues.fullName || <span>Your Name</span>}
                        </span>
                      </h2>
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          {allValues.email && (
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
                              className="lucide lucide-mail size-4"
                              aria-hidden="true"
                            >
                              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                              <rect
                                x="2"
                                y="4"
                                width="20"
                                height="16"
                                rx="2"
                              ></rect>
                            </svg>
                          )}
                          <span>{allValues.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {allValues.phone && (
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
                              className="lucide lucide-phone size-4"
                              aria-hidden="true"
                            >
                              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                            </svg>
                          )}
                          <span>{allValues.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {allValues.location && (
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
                              className="lucide lucide-map-pin size-4"
                              aria-hidden="true"
                            >
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          )}
                          <span>{allValues.location}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          {allValues.profession && (
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
                              className="lucide lucide-briefcase-business size-4"
                              aria-hidden="true"
                            >
                              <path d="M12 12h.01"></path>
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                              <rect
                                width="20"
                                height="14"
                                x="2"
                                y="6"
                                rx="2"
                              ></rect>
                            </svg>
                          )}
                          <span>{allValues.profession}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          {allValues.linkedin && (
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
                              className="lucide lucide-linkedin size-4"
                              aria-hidden="true"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          )}
                          <span>{allValues.linkedin}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {allValues.website && (
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
                              className="lucide lucide-globe size-4"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                          )}
                          <span>{allValues.website}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
