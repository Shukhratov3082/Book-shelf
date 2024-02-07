import React from "react";
import Logo from "../assets/images/Logo.svg";
const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-2/5 flex items-center justify-center gap-4  flex-col">
        <img src={Logo} alt="logo" />
        <h3>Welcome Back !</h3>
        <p>Sign in to continue to yourDigital Library</p>
        <form>
          <label class="text-primary">Adress</label>
          <input
            type="text"
            class=" w-full py-2 pl-4 rounded-md ring-1  ring-gray-300"
            placeholder="username@collegename.ac.in"
          />
          <label class="text-primary">Password</label>
          <input
            type="password"
            class=" w-full rounded-md py-2 pl-4 text-gray-900 ring-1 ring-gray-300"
            placeholder="password"
          />
        </form>
        <button className="bg-mainColor w-full text-white py-2 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
