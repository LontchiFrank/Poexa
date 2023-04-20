import React, { useEffect, useRef } from "react";
import styles from "./Main.module.css";
import poet from "../../assert/2.png";
import pen from "../../assert/pen.png";
import horror from "../../assert/horror.png";
import comedy from "../../assert/comedy.png";
import sad from "../../assert/sad.png";
import quote from "../../assert/quote.png";
import dragon from "../../assert/dragon.png";
import { useSelector, useDispatch } from "react-redux";
import { getPoemAsync } from "../../features/poemSlice";
import PoemCard from "../../components/poenCard/PoemCard.component";
import Wrapper from "../../components/Wrapper/Wrapper.component";
import loader from "../../assert/load1.svg";
import { FaArrowRight } from "react-icons/fa";

function Main() {
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getPoemAsync());
  }, []);
  const poems = useSelector((state) => state.poems.data);
  console.log(poems);
  const arr = [];

  return (
    <section className={`${styles.main_screen}`}>
      <Wrapper>
        <div className="md:container xl:px-8 px-28 mx-auto  pt-8 max-[940px]:px-12  ">
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
                A growing archive of 1000+ poems resources, by great poets for
                the community.{" "}
              </p>
            </div>
            <div
              className={`flex justify-center items-center xl:w-3/5 md:w-full sm:w-full ${styles.whole_image}`}
            >
              <img src={poet} className="h-full " />
            </div>
          </div>
          <div className="cates w-full flex justify-center items-center flex-wrap gap-3 xl:gap-8 mt-6 ">
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
          </div>
          <div>
            <div className="w-full py-20">
              <p
                className={`${styles.text} py-16 2xl:text-5xl xl:text-5xl md:text-3xl sm:text-2xl font-semibold `}
              >
                Latest Poems
              </p>
              {/* <div>
                {poems.length == 0 ? (
                  <div
                    className="grid grid-cols-1"
                    style={{
                      width: "100%",
                      // height: "100vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={loader} />
                  </div>
                ) : (
                  <div className={`${styles.poems} `}>
                    {poems.map((item, key) => (
                      <PoemCard item={item} key={key} />
                    ))}
                  </div>
                )}
              </div> */}

              <div className="flex">
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn5z3GQKbI5FnB8UVcD4jRbwI3pYxoFTRzw&usqp=CAU')",
                    }}
                    title="Woman holding a mug"
                  ></div>
                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <p class="text-sm text-gray-600 flex items-center">
                        <svg
                          class="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                      </p>
                      <div class="text-gray-900 font-bold text-xl mb-2">
                        Can coffee make you a better developer?
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src="/img/jonathan.jpg"
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-gray-900 leading-none">
                          Jonathan Reinink
                        </p>
                        <p class="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeRLpcFr7al_URljs2Wd_4x-z8mdH2XOWcw&usqp=CAU')",
                    }}
                    title="Woman holding a mug"
                  ></div>
                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <p class="text-sm text-gray-600 flex items-center">
                        <svg
                          class="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                      </p>
                      <div class="text-gray-900 font-bold text-xl mb-2">
                        Can coffee make you a better developer?
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src="/img/jonathan.jpg"
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-gray-900 leading-none">
                          Jonathan Reinink
                        </p>
                        <p class="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZHl8ZW58MHx8MHx8&w=1000&q=80')",
                    }}
                    title="Woman holding a mug"
                  ></div>
                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <p class="text-sm text-gray-600 flex items-center">
                        <svg
                          class="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                      </p>
                      <div class="text-gray-900 font-bold text-xl mb-2">
                        Can coffee make you a better developer?
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src="/img/jonathan.jpg"
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-gray-900 leading-none">
                          Jonathan Reinink
                        </p>
                        <p class="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center items-center pt-20">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-5 text-center mr-2 mb-2"
                >
                  <p> Browse latest poems </p>
                </button>
              </div>
              <div className="py-48 flex xl:flex-row md:flex-col sm:flex-col ">
                <div className="w-1/2 md:w-full sm:w-full">
                  <p
                    className={`${styles.text} xl:text-5xl md:text-3xl sm:text-2xl font-bold pb-8`}
                  >
                    Artificial Intelligence coming soon on Poexa!
                  </p>
                  <p
                    className={`${styles.text} xl:text-2xl md:text-xl sm:text-xl pb-12`}
                  >
                    This will help revolutionise the content of your app. Its
                    going to rate the content of your work and link you to great
                    poet and writers, which will aid alot of new poet or
                    talented writes to achieve more by having review from the
                    best.
                  </p>
                </div>
                <div className="w-1/2 md:w-full sm:w-full">
                  <div className={`${styles.vid}`}>
                    <iframe
                      src="https://share.synthesia.io/embeds/videos/c0f67401-59c9-4e7c-a7ed-23852e1191f0"
                      loading="lazy"
                      title="Synthesia video player - Your AI video"
                      allow="encrypted-media; fullscreen;"
                      className={`${styles.vidSection}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* <Footer /> */}
    </section>
  );
}

export default Main;
