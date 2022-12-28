import React from "react";
import styles from "./Main.module.css";
import logo from "../../assert/PoeXa.png";

function Main() {
  return (
    <section className={`${styles.main_screen}`}>
      <div className=" md:container md:mx-auto px-28 pt-8 ">
        <nav>
          <div>
            <img src={logo} />
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Main;
