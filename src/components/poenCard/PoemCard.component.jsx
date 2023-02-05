import React from "react";
import styles from "./PoemCard.module.css";

function PoemCard({ item }) {
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
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {item.category}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {item.title}
          </a>
          <p class="mt-2 text-slate-500">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default PoemCard;
