import React, { useState } from "react";
import axios from "axios";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import Layout from "../Layout/Layout";
import { ToastContainer, toast } from "react-toastify";

function Registration() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
  });
  const [name, setame] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [avatar, setavatar] = useState("");
  // const fd = new FormData();
  // let fd = new
  // console.log(object);
  function submitdata(e) {
    let fd = new FormData();
    e.preventDefault();
    setdata({
      ...data,
      name: name,
      email: email,
      password: password,
      phone: phone,
      avatar: avatar?.name,
    });

    fd.append("name", name);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("phone", phone);
    fd.append("avatar", avatar);
    console.log("fd", fd.get("avatar"));
    SignUp(fd);
  }
  console.log(avatar);
  // toast("Wow")
  const SignUp = async (fd) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const user = await axios.post(`${url}/auth/register`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(user.data.message);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
    // axios.get(`${process.env.VITE-REACT-APP}/auth/signup`)
  };
  return (
    <Layout>
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
              <form
                onSubmit={(e) => {
                  submitdata(e);
                }}
                className="divide-y divide-gray-200"
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      type="text"
                      onChange={(e) => {
                        setame(e.target.value);
                      }}
                      className="peer  pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setphone(e.target.value);
                      }}
                      type="tel"
                      className="peer pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Phone"
                    />
                  </div>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      type="text"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      className="peer pl-4 h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      value={password}
                      type="password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      className="peer  h-10 w-full border-2 rounded-md border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="avatar">
                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setavatar(event.target.files[0]);
                        }}
                      />
                    </label>
                    {/* <input
                        
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
                    <button
                      onSubmit={(e) => {
                        submitdata(e);
                      }}
                      className="bg-blue-500 text-black rounded-sm px-4 py-1 flex items-center hover:shadow-xl"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
}

export default Registration;
