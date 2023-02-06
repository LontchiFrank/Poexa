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
import Footer from "../../components/footer/Footer.component";
import Wrapper from "../../components/Wrapper/Wrapper.component";

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
          <div className="cates w-full flex justify-center mt-6 grid xl:grid-cols-6 lg:grid-cols-4 ">
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
              <div className={`${styles.poems} lg:grid grid-rows-4`}>
                {poems.map((item, key) => (
                  <PoemCard item={item} key={key} />
                ))}
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-5 text-center mr-2 mb-2"
                >
                  Browse latest poems
                </button>
              </div>
              <div className="py-48 flex md:flex-col sm:flex-col ">
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
