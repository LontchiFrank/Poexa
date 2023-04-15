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
    dispatch(
      createPoemAsync(info)
      // .then((res) => {
      //   console.log(res);
      //   myAlert(true, "success", "Created Successfully");
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
    );
  };

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
                  type="submit"
                  class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
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
