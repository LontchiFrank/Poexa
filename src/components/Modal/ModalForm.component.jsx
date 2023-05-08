import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { createPoemAsync } from "../../features/poemSlice";
import { useSelector, useDispatch } from "react-redux";
import { myAlert } from "../Alert/myAlert";

function ModalForm({ show, handleClickClose, infos }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
  });
  const dispatch = useDispatch();

  const load = useSelector((state) => state.poems?.loading);
  const [image, setImage] = useState({ file: null });
  const { title, desc, category } = formData;
  const Category = ["Romance", "Fantasy", "Comedy", "Story", "Horror"];

  // const listItems = category.map((item) => item);
  // console.log(listItems);

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  const { file } = image;

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = new FormData();
    info.append("title", title);
    info.append("category", category);
    info.append("desc", desc);
    info.append("image", image);
    console.log(image);
    console.log(info);
    dispatch(createPoemAsync(info));
  };

  return (
    <div>
      {show ? (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-2 rounded lg:w-1/2 sm:w-4/5">
            <div
              className="p-8"
              id="large-modal"
              tabindex="-1"
              // class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
            >
              <h1 className="text-xl font-bold pb-6">Create Poem</h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="mb-6">
                  <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div class="   mb-6">
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your Category
                  </label>
                  <select
                    id="countries"
                    name="category"
                    // onClick={(e) => console.log(e, "select")}
                    onChange={(e) => handleChange(e)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Choose Category</option>
                    {Category.map((item) => (
                      // console.log(first)
                      <option name={item} key={item} value={item}>
                        {item}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="image"
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Poem
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="desc"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                    value={desc}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <div class="flex items-start mb-6"></div>
                <button
                  disabled=""
                  type="submit"
                  class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {load ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ) : null}
                  Create
                </button>

                <button
                  data-modal-hide="defaultModal"
                  onClick={() => handleClickClose(false)}
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ModalForm;
