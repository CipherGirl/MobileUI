import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  return (
    <div className="container bg-[#f8f8f8]">
      <div className="w-full h-24 bg-white pt-12 px-2 mb-6">
        {/* <div className="w-full h-12 bg-white px-2 mb-12 pt-14 "> */}
        <div
          onClick={() => navigate('/dashboard')}
          className="inline-block w-10 h-10 bg-slate-100 rounded-lg"
        >
          <i class="fa-solid fa-chevron-left pl-3 pt-3 text-[#949494]"></i>
        </div>
        <h2 className="inline-block ml-[25%] font-semibold">Jane D Modric</h2>
      </div>
      <div className="mx-4 bg-white m-auto rounded-lg p-4 px-6 overflow-scroll h-[600px] ">
        <h2 className="font-semibold">Jane D Modric</h2>
        <i class="fa-solid fa-location-dot text-sm" />
        <p className="inline m-2 text-sm">Arena Jeruscica</p>
        <form className="mt-4 flex flex-col gap-5 ">
          <div class="relative ">
            <input
              type="date"
              id="date"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="date"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Dates
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              id="surname"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <i className="fa-solid fa-circle-user absolute top-1/3 right-3"></i>

            <label
              for="surname"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Surname
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              id="contact"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <i className="fa-solid fa-phone absolute top-1/3 right-3"></i>

            <label
              for="contact"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Contact Number
            </label>
          </div>
          <div class="relative">
            <textarea
              type="text"
              id="address"
              class="block pr-10 px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <i className="fa-solid fa-home absolute top-1/3 right-3"></i>

            <label
              for="address"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Address
            </label>
          </div>
          <div class="relative">
            <input
              type="time"
              id="time"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />

            <label
              for="time"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Time
            </label>
          </div>
          <div class="relative">
            <select
              id="confirm"
              class="px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            >
              <option>Yes</option>
              <option>No</option>
            </select>
            <label
              for="confirm"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Entered into Contact
            </label>
          </div>
          <div class="relative">
            <select
              id="operator"
              class="px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            >
              <option>Yes</option>
              <option>No</option>
            </select>
            <label
              for="operator"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Operator
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              id="comment"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />

            <label
              for="comment"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Comment
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              id="neighbourhood"
              class="block px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />

            <label
              for="neighbourhood"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Neighbourhood
            </label>
          </div>
          <div class="relative">
            <select
              id="target"
              class="px-2 pb-1.5 pt-3 w-full border-2  text-gray-900 bg-transparent rounded-lg border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            >
              <option>Yes</option>
              <option>No</option>
            </select>
            <label
              for="target"
              class="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:left-3"
            >
              Target Daily
            </label>
          </div>
          <div className="flex justify-around mx-10 font-semibold mb-6">
            <button className="bg-slate-300 px-4 py-2 rounded-sm">
              Cancel
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-sm">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
