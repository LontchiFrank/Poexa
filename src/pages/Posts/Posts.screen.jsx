import React, { useState, useEffect, useRef } from "react";
import styles from "./Posts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Poexa from "../../assert/PoeXa.png";
import PoemCard from "../../components/CardAuth/PoemCard.component";
import loader from "../../assert/no.png";
import ModalForm from "../../components/Modal/ModalForm.component";
import { getPrivatePoemAsync } from "../../features/poemSlice";
import UserPoemCard from "../../components/UserPoem/UserPoemCard.component";
import ModalUser from "../../components/ModalUser/ModalUser.component";
import DelModal from "../../components/DeleteModal/DelModal.component";
import Helmet from "react-helmet";

function Posts() {
  const [info, setInfo] = useState();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [col, setCol] = useState();
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(!open);
  };

  const [collect, setCollect] = useState();
  const poems = useSelector((state) => state.poems.data);
  const handleClick = () => {
    setShow(true);
  };

  const handleClick1 = (num, col) => {
    setShow1(num);
    setCol(col);
  };
  const handleClick2 = (num, col) => {
    setShow2(num);
    setCol(col);
  };

  const dataFetchedRef = useRef(false);
  const dispatch = useDispatch();
  const windowWidth = useRef(window.innerWidth);
  const handleClickClose = (num) => {
    setShow(num);
  };
  const handleClickClose1 = (num) => {
    setShow1(num);
  };
  const handleClickClose2 = (num) => {
    setShow2(num);
  };
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getPrivatePoemAsync());
    setInfo(poems);
  }, []);
  const handleClicks = (num, col) => {
    console.log(num);
    console.log(col);
    setShow(num);
    setCollect(col);
  };
  const signOut = () => {
    localStorage.clear("auth");
    localStorage.clear("token");
    localStorage.clear("user");
  };

  return (
    <section className={`${styles.main}`}>
      <ModalForm show={show} handleClickClose={handleClickClose} infos={info} />
      <ModalUser
        show={show1}
        handleClickClose={handleClickClose1}
        infos={info}
        col={col}
      />
      <DelModal show={show2} handleClickClose1={handleClickClose2} col={col} />
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={openDrawer}
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ml-2 md:mr-24">
                <img src={Poexa} class="h-8 mr-3" alt="FlowBite Logo" />
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {open ? (
        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">
                    <Link to="/dashboard">Dashboard</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    <Link to="/posts">Posts</Link>
                  </span>
                  <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap" onClick={signOut}>
                    Sign Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      ) : null}

      <div
        class={
          windowWidth.current < 500 && open
            ? "p-4 sm:ml-64"
            : windowWidth.current > 500 || open
            ? "p-4 lg:container mx-auto px-4 sm:max-w-sm mx-auto sm:mx-auto "
            : "p-4 lg:container mx-auto sm:max-w-sm  "
        }
      >
        <div class="mt-16 ">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => handleClick()}
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create Poem
            </button>
          </div>

          <div className="h-full flex justify-center items-center">
            <div>
              <div>
                <h1
                  className="text-4xl pb-8"
                  style={{ color: "rgba(22,13,61,0.902)" }}
                >
                  {" "}
                  Personal Poems
                </h1>
              </div>
              {poems.length === 0 ? (
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
                  <h1
                    className="text-4xl pb-8"
                    style={{ color: "rgba(22,13,61,0.902)" }}
                  >
                    {" "}
                    No Poems Created
                  </h1>
                </div>
              ) : (
                <div class="w-full flex flex-wrap">
                  <div className={`${styles.poems} `}>
                    {poems &&
                      poems.map((item, key) => (
                        <UserPoemCard
                          item={item}
                          key={key}
                          on={show1}
                          handleClick={handleClick1}
                          handleClick2={handleClick2}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
