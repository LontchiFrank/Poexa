import React from "react";

function DelModal({ show, handleClickClose1 }) {
  return (
    <div>
      {show ? (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-2 rounded w-1/2">
            <div
              className="p-8"
              id="large-modal"
              tabindex="-1"
              // class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
            >
              <h1 className="text-xl font-bold pb-6">Create Poem</h1>
              <div> Are you sure you want to Delete ?</div>
              <button
                type="submit"
                class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>

              <button
                data-modal-hide="defaultModal"
                onClick={() => handleClickClose1(false)}
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DelModal;
