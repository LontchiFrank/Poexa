import React, { useState } from "react";
import styles from "./Poem.module.css";
import { FiHeart } from "react-icons/fi";

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
            class="h-48 w-full object-cover md:h-full md:w-48"
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
          <p class="mt-2 text-slate-500 mb-8">{item.desc}</p>
          {/* <div>
            <p className="text-violet-800">View</p>
          </div> */}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => handleClick(true)}
              // className="rounded border-2 border-primary"
              class="inline-block rounded border-2 border-indigo-300 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              View
            </button>
            {/* <div> */}
            <FiHeart style={{ fontSize: "20px" }} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    // <div class="flex justify-center">
    //   <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    //     <a href="#!" data-te-ripple-init data-te-ripple-color="light">
    //       <img class="rounded-t-lg" src={item.image} alt="" />
    //     </a>
    //     <div class="p-6">
    //       <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    //         {item.title}
    //       </h5>
    //       <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    //         {item.desc}
    //       </p>
    //       <div className="mt-16 flex justify-between">
    //         <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    //           {" "}
    //           {item.category}{" "}
    //         </p>
    //         <button
    //           type="button"
    //           class="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    //           data-te-ripple-init
    //           data-te-ripple-color="light"
    //         >
    //           Button
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PoemCard;
