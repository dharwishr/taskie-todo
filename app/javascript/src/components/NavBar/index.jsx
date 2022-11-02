import React from "react";

import { Link } from "react-router-dom";
import authApi from "apis/auth";
import { resetAuthTokens } from "src/apis/axios";
import { getFromLocalStorage, setToLocalStorage } from "utils/storage";

const NavBar = () => {
  const userName = getFromLocalStorage("authUserName");
  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        userName: null,
      });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <nav className="shadow bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <span>Dashboard</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-blue-600 inline-block text-2xl sm:text-3xl font-extrabold tracking-tight">Taskie</span>
          </div>
          <div className="flex items-center justify-end gap-x-4">
            <span
              className="font-regular transition focus:outline-none inline-flex items-center
              border-b-2 border-transparent px-2 pt-1
              text-sm leading-5 text-bb-gray-600 text-opacity-50
              duration-150 ease-in-out
              focus:text-bb-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              {userName}
            </span>
            <a
              className="transition focus:outline-none inline-flex cursor-pointer items-center
              border-b-2 border-transparent px-1 pt-1
              text-sm font-semibold leading-5 text-bb-gray-600
              text-opacity-50 duration-150 ease-in-out
              hover:text-bb-gray-600 focus:text-bb-gray-700"
              onClick={handleLogout}
            >
              LogOut
            </a>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;
