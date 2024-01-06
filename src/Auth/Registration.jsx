import React from "react";

function Registration() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">
                  Registration
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="name"
                      name="u_name"
                      type="text"
                      className="peer  pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="phone"
                      name="phone"
                      type="tel"
                      className="peer pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Phone"
                    />
                  </div>

                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Email"
                    />

                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer  h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative">
                      {/* <input
                        autocomplete="off"
                        id="image"
                        name="image"
                        type="image"
                        // className="peer placeholder-transparent pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                        placeholder="Image"
                      /> */}
                      {/* <label
                        for="image"
                        className="absolute left-0 top-0 text-gray-600 text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 pl-1 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Image
                      </label> */}
                    </div>




                  <div className="flex justify-center items-center">
                    <button className="bg-blue-500 text-black rounded-sm px-4 py-1 flex items-center hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
