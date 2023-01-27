import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container  pt-16 flex flex-col items-center justify-between">
      <div class="max-w-max rounded-full ml-auto mr-4 bg-gray-200 p-1 flex  text-xs">
        <div>
          <input type="radio" name="language" id="cro" class="peer hidden" />
          <label
            for="cro"
            class="block cursor-pointer select-none rounded-full py-2 px-4 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
          >
            Cro
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="language"
            id="eng"
            class="peer hidden"
            checked
          />
          <label
            for="eng"
            class="block cursor-pointer select-none rounded-full py-2 px-4 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
          >
            Eng
          </label>
        </div>
      </div>
      <h1 className="text-3xl font-bold">
        IT <span className="text-primary">CReation</span>
      </h1>
      <h2 className="text-2xl font-bold">HELLO SIGN IN</h2>
      <div className="w-80">
        <p className="mb-2 text-sm">User ID</p>
        <div class="relative">
          <input
            type="text"
            id="empUID"
            class="block px-2 pb-1.5 pt-3 w-[20rem] border-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <i className="fa-solid fa-circle-user absolute top-1/3 right-3"></i>
          <label
            for="empUID"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
          >
            Emp. User Id
          </label>
        </div>
        <p className="mt-4 mb-2 text-sm">Password</p>
        <div class="relative">
          <input
            type="password"
            id="password"
            class="block px-2 pb-1.5 pt-3 w-[20rem] border-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <i className="fa-regular fa-eye absolute top-1/3 right-3"></i>
          <label
            for="password"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3 before:content-['**********'] peer-focus:before:content-['Password']"
          ></label>
        </div>
        <div className="flex a items-center justify-between mt-3 text-xs">
          <i class="fa-regular fa-square-check text-base mr-2"></i>
          <p>Remember Me</p>
          <p className="ml-auto text-primary">Forgot Password?</p>
        </div>
      </div>
      <button
        onClick={() => navigate('/dashboard')}
        className="w-[20rem] bg-primary rounded-md py-4 mb-10 font-semibold text-white"
      >
        SIGN IN
      </button>
      <p className="text-sm font-semibold mb-8">
        Don't have account? <span className="text-primary">Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
