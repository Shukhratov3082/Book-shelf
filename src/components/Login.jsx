import React from "react";
import Logo from "../assets/images/Logo.svg";
const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-hero-pattern bg-center">
      <div className="flex items-center justify-center gap-4 rounded flex-col pt-5 pb-16 px-14 bg-white shadow-2xl">
        <img className="w-24" src={Logo} alt="logo" />
        <h3 className="pt-3 pb-17">Welcome Back !</h3>
        <p className="text-gray text-sm">
          Sign in to continue to yourDigital Library
        </p>
        <form className="w-full">
          <div className="mb-6">
            <label class="text-primary font-semibold text-base">Email</label>
            <input
              type="text"
              class="w-full py-2 pl-4 rounded-sm ring-1  ring-gray-300 font-normal"
              placeholder="username@collegename.ac.in"
            />
          </div>
          <div className="mb-4">
            <label class="text-primary font-semibold text-base ">Password</label>
            <input
              type="password"
              class="w-full rounded-sm py-2 pl-4 text-gray-900 ring-1 ring-gray-300"
              placeholder="password"
            />
          </div>
        </form>
        <div className="w-full flex justify-between">
          <div>
            <input type="checkbox" />
            <label className="text-sm"> Remember me</label>
          </div>
          <a className="text-sm" href="#">
            Forgot password?
          </a>
        </div>
        <button className="bg-mainColor w-full text-white py-2 rounded-sm">
          Login
        </button>
        <div className="w-full flex justify-between mt-4 text-primary">
          <p className="text-sm">New User? Register Here</p>
          <p className="text-sm">Use as Guest </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
