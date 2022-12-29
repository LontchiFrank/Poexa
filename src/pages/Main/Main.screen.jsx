import React from "react";
import styles from "./Main.module.css";
import logo from "../../assert/PoeXa.png";

function Main() {
  return (
    <section className={`${styles.main_screen}`}>
      <div className=" md:container md:mx-auto px-28 pt-8 sm:px-12">
        <nav className="flex justify-between ">
          <div className="flex justify-between items-center">
            <span className="text-2xl cursor-pointer ">
              <img src={logo} />
            </span>
            <span className="text-3xl cursor-pointer md:hidden black">
              <ion-icon name="menu"></ion-icon>
            </span>
          </div>
          <div className="flex justify-between">
            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
              <li className="mx-3 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-cyan-500 duration-500  "
                  style={{ color: "rgba(22,13,61,0.6)", fontSize: "16px" }}
                >
                  Home
                </a>
              </li>
              <li className="mx-3 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-cyan-500 duration-500  "
                  style={{ color: "rgba(22,13,61,0.6)", fontSize: "16px" }}
                >
                  About
                </a>
              </li>
              <li className="mx-3 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-cyan-500 duration-500  "
                  style={{ color: "rgba(22,13,61,0.6)", fontSize: "16px" }}
                >
                  Contact
                </a>
              </li>
              <li className="mx-3 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-cyan-500 duration-500  "
                  style={{ color: "rgba(22,13,61,0.6)", fontSize: "16px" }}
                >
                  Service
                </a>
              </li>

              <button className="rounded outline  outline-black-500 p-2">
                <p className="text-white"> Sign In</p>
              </button>
              <button className="rounded outline  outline-violet-500 p-2 ml-4">
                <p className="text-violet"> Sign Up</p>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Main;
