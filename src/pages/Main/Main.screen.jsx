import React, { useState, useEffect, useRef } from "react";
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
// import { FapoemsowRight } from "react-icons/fa";

function Main() {
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);
  const poems = useSelector((state) => state.poems.data);
  const [arr, setArr] = useState([poems]);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getPoemAsync());
  }, []);
  // console.log(typeof poems);
  const array = poems.slice(12);
  console.log(array);

  return (
    <section className={`${styles.main_screen}`}>
      <Wrapper>
        <div className="md:container xl:px-8 px-28 mx-auto  pt-8 max-[940px]:px-12  ">
          <div className={`${styles.whole} w-full md:flex mt-28  `}>
            <div className={`${styles.hero} xl:w-2/5 md:w-full`}>
              <h1
                className=" xl:text-[4.3em]  md:text-5xl sm:text-3xl max-[770px]:text-3xl pt-16 pb-6"
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
          <div className="cates pt-12 w-full flex justify-center items-center flex-wrap gap-3 xl:gap-8 mt-6 ">
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
              <div>
                {array.length == 0 ? (
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
                    {array.map((item, key) => (
                      <PoemCard item={item} key={key} />
                    ))}
                  </div>
                )}
              </div>

              <div className="pb-16 w-full flex justify-center items-center pt-20">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-5 text-center mr-2 mb-2"
                >
                  <p> Browse latest poems </p>
                </button>
              </div>
              <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                  alt=""
                  class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                  class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
                    }}
                  ></div>
                </div>
                <div
                  class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                  aria-hidden="true"
                >
                  <div
                    class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
                    }}
                  ></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                      Work with us
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                  </div>
                  <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                      <a href="#">
                        Open roles <span aria-hidden="true">&rarr;</span>
                      </a>
                      <a href="#">
                        Internship program{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                      <a href="#">
                        Our values <span aria-hidden="true">&rarr;</span>
                      </a>
                      <a href="#">
                        Meet our leadership{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                    <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                      <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">
                          Offices worldwide
                        </dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                          12
                        </dd>
                      </div>
                      <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">
                          Full-time colleagues
                        </dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                          300+
                        </dd>
                      </div>
                      <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">
                          Hours per week
                        </dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                          40
                        </dd>
                      </div>
                      <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">
                          Paid time off
                        </dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                          Unlimited
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
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

              <div class="relative isolate overflow-hidden bg-gray-900  py-24 sm:py-32 rounded-md ">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                  alt=""
                  class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base leading-7 text-white">
                        Transactions every 24 hours
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        44 million
                      </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base leading-7 text-white">
                        Assets under holding
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        $119 trillion
                      </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base leading-7 text-white">
                        New users annually
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        46,000
                      </dd>
                    </div>
                  </dl>
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
