import React from "react";
import styles from "./Userpoem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import LinesEllipsis from "react-lines-ellipsis";

function UserPoemCard({ item, on, handleClick, handleClick1 }) {
  return (
    <div class={`${styles.card} max-w-sm rounded overflow-hidden shadow-lg`}>
      <img class="w-full h-64" src={item.image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{item.title}</div>
        <p class="text-gray-700 text-base">
          <LinesEllipsis
            text={item.desc}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-between">
        <div className="">
          <span class="inline-block bg-violet-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {" "}
            {item.category}
          </span>
        </div>
        <div className="flex justify-end">
          <span
            class="inline-block bg-cyan-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer "
            onClick={() => handleClick(true, item)}
          >
            <BiPencil style={{ fontSize: "22px", color: "blue" }} />
          </span>
          <span
            onClick={() => handleClick1(true, item._id)}
            class="inline-block bg-red-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer "
          >
            <BiTrash style={{ fontSize: "22px", color: "red" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserPoemCard;
