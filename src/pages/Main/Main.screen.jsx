import React from "react";
import styles from "./Main.module.css";
import logo from "../../assert/PoeXa.png";

function Main() {
  return (
    <section className={`${styles.main_screen}`}>
      <div className=" md:container md:mx-auto px-28 pt-8 ">
        <nav className="flex justify-between">
          <div>
            <img src={logo} />
          </div>
          <div className="flex justify-between">
            <button className="rounded outline  outline-black-500 p-2">
              <p className="text-white"> Sign In</p>
            </button>
            <button className="rounded outline  outline-violet-500 p-2 ml-4">
              <p className="text-violet"> Sign Up</p>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Main;
