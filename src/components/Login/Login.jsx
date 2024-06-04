// import React from 'react'

import { useState } from "react";
import { login, logout } from "../../Store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  return (
    <div className="w-1/2 mx-auto pt-10 ">
      <h3 className="text-green-500 font-bold">
        login
        <span className="text-pink-500 font-bold px-3">
          {selector.username}
        </span>
      </h3>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="w-80 rounded-sm h-[40px] mt-2 px-3"
        placeholder="username"
      />
      <div className="flex gap-5 mt-3">
        <button
          onClick={() => dispatch(login({ username: input }))}
          className="bg-green-600 text-white rounded-sm p-1"
        >
          login
        </button>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-600 text-white rounded-sm p-1"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Login;
