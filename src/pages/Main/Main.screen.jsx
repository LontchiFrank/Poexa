import React from "react";
import styles from "./Main.module.css";
import logo from "../../assert/PoeXa.png";
import poet from "../../assert/2.png";
import pen from "../../assert/pen.png";
import horror from "../../assert/horror.png";
import comedy from "../../assert/comedy.png";
import sad from "../../assert/sad.png";
import quote from "../../assert/quote.png";
import dragon from "../../assert/dragon.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
  };

  return (
    <section className={`${styles.main_screen}`}>
      <div className="container px-28 mx-auto md:px-12 pt-8 max-[940px]:px-12">
        <nav className="md:flex md:justify-between md:items-center sm:items-center sm:w-auto sm:w-full ">
          <div className="flex justify-between items-center">
            <span className="text-2xl cursor-pointer ">
              <img src={logo} />
            </span>
            <span className="text-2xl cursor-pointer md:hidden black">
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
        <div className={`${styles.whole} w-full md:flex mt-28  `}>
          <div className={`${styles.hero} xl:w-2/5 md:w-full`}>
            <h1
              className=" xl:text-6xl  md:text-5xl sm:text-3xl max-[770px]:text-3xl"
              style={{ color: "rgba(22,13,61,0.902)" }}
            >
              Discover highly useful & amazing Poems Resources & Tools.
            </h1>
            <p
              className="text-2xl md:text-2xl sm:text-[16px] xl:text-3xl max-[840px]:text-xl font-normal mt-3"
              style={{
                color: "rgba(22,13,61,0.902)",
              }}
            >
              A growing archive of 1000+ poems resources, by great poets for the
              community.{" "}
            </p>
          </div>
          <div
            className={`flex justify-center items-center xl:w-3/5 md:w-full sm:w-full ${styles.whole_image}`}
          >
            <img src={poet} className="h-full " />
          </div>
        </div>
        <div className="cates w-full flex justify-between mt-6 flex-wrap justify-center items-center">
          <Slider {...sliderSettings}>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl mt-8 ">
              <div className="h-28 w-full flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={pen} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full ">
                Poems
              </div>
            </div>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl  mt-8">
              <div className="h-28 w-full pt-3 flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={horror} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full  ">
                Horror
              </div>
            </div>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl  mt-8">
              <div className="h-28 w-full flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={comedy} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full ">
                Comedy
              </div>
            </div>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl  mt-8">
              <div className="h-28 w-full flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={sad} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full ">
                Sad
              </div>
            </div>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl  mt-8 ">
              <div className="h-28 w-full flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={quote} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full ">
                Quote
              </div>
            </div>
            <div className="cat h-[160px] w-[185px] bg-slate-50 drop-shadow-xl rounded-xl  mt-8">
              <div className="h-28 w-full flex justify-center items-center ">
                <img className={`${styles.pen} h-full`} src={dragon} />
              </div>
              <div className="inspiration text-center text-xl text-blue-900 h-1/2 w-full  ">
                Fantasy
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Main;
