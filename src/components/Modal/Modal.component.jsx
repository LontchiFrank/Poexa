import React from "react";

function Modal({ show, handleClickClose, col }) {
  return (
    <div>
      {show ? (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-2 rounded w-1/2">
            <div
              id="large-modal"
              tabindex="-1"
              // class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
            >
              <div class="relative w-full h-full  md:h-auto ">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                  <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                      {col.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleClickClose(false)}
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="large-modal"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div class="">
                    <div class="md:flex">
                      <div class="md:shrink-0">
                        <img
                          class="h-48 w-full object-cover md:h-full md:w-48"
                          src={col.image}
                          alt="Modern building architecture"
                        />
                      </div>
                      <div class="px-8 pt-8 pb-2">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {col.category}
                        </div>
                        <p class="mt-2 text-slate-500 mb-8">{col.desc}</p>
                      </div>
                    </div>
                    {/* <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {col.category}
                    </div>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {col.desc}
                    </p> */}
                  </div>
                  <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="large-modal"
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    <button
                      data-modal-hide="large-modal"
                      type="button"
                      onClick={() => handleClickClose(false)}
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-white p-2 rounded w-72">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Welcome back
            </h1>
            <p className="text-center text-gray-700 mb-5">Sign in</p>

            <div className="flex flex-col">
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="email@example.com"
              />
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="********"
              />
            </div>
            <div className="text-center">
              <button className="px-5 py-2 bg-gray-700 text-white rounded">
                Sign in
              </button>
            </div>
          </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
