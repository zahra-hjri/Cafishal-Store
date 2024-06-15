// import React from 'react'

import { login, logout } from "../../Store";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ seerchTerm, setSeerchTerm }) => {
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
        onChange={(e) => {
          setSeerchTerm(e.target.value);
        }}
        className="w-80 rounded-sm h-[40px] mt-2 px-3"
        placeholder="username"
      />
      <p className="text-white pt-5">Searching: {seerchTerm}</p>
      <div className="flex gap-5 mt-3">
        <button
          onClick={() => dispatch(login({ username: seerchTerm }))}
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
