import React, { useState } from "react";
import styles from "./Poem.module.css";
import { FiHeart } from "react-icons/fi";
import LinesEllipsis from "react-lines-ellipsis";

function PoemCard({ item, on, handleClick }) {
  const [show, setShow] = useState(false);
  // const handleClick = (nu) => {
  //   setShow(true);
  // };

  return (
    <div
      class={`${styles.card} max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
    >
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-full w-full object-cover md:h-full md:w-48"
            src={item.image}
            alt="Modern building architecture"
          />
        </div>
        <div class="px-8 pt-8 pb-2">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {item.category}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {item.title}
          </a>
          <p class="mt-2 text-slate-500 mb-8">
            <LinesEllipsis
              text={item.desc}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>

          <div className="flex justify-between">
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
    </div>
  );
}

export default PoemCard;
