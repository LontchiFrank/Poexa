import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import LinesEllipsis from "react-lines-ellipsis";

function PoemCard({ item, on, handleClick }) {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState([
    "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
    "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    "bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
    "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
    "bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
  ]);
  const couleur = check[Math.floor(Math.random() * check.length)];

  return (
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${item.image})` }}
        title="Woman holding a mug"
      ></div>
      <div class="border-r border-b border-l border-none bg-slate-50 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            <span class={couleur}> {item.category}</span>
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
          <p class="text-gray-700 text-base">
            {" "}
            <LinesEllipsis
              text={item.desc}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            {/* {item.desc */}
          </p>
        </div>
        <div className="flex justify-between">
          {" "}
          <button
            type="button"
            onClick={() => handleClick(true, item)}
            class="inline-block rounded border-2 border-indigo-300 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            View
          </button>
          <FiHeart style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default PoemCard;
