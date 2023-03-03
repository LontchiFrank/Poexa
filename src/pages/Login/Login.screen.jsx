import React, { useState, useEffect } from "react";
import Poexa from "../../assert/PoeXa.png";
import { signInUser } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alerts/Alert.component";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = useSelector((data) => data.user?.authenticate);
  localStorage.setItem("auth", auth);
  const getAuth = localStorage.getItem("auth");
  const [show, setShow] = useState(null);

  const [alert, setAlert] = useState(true);
  console.log(getAuth);
  const { email, password } = formData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signInUser(formData));

    setTimeout(() => {
      setAlert(false);
      setShow(true);
    }, 3000);
    // if (getAuth) {
    //   <Alert color="bg-success-100 " />;
    //   // navigate("/dashboard");
    // } else {
    //   // <Navigate replace to="/login" />;
    //   <Alert color="bg-danger-100 " />;
    //   // navigate("/login");
    // }
  };

  return (
    <div>
      {show ? (
        <Alert color="bg-success-100 " title="Login Success!" />
      ) : (
        <Alert color="bg-danger-100 " title="Login Failed!" />
      )}
      {auth ? (
        window.location.replace("/dashboard")
      ) : (
        <section class="bg-violet-50 dark:bg-gray-900">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                class="w-8 h-8 mr-2"
                src={Poexa}
                alt="logo"
                style={{ width: "100%" }}
              />
              {/* PoeXa */}
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to account
                </h1>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  class="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => handleChange(e)}
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => handleChange(e)}
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    class="w-full text-white bg-violet-800 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                  <div class="flex flex-col items-center justify-center ">
                    <p class="text-lg mb-0 mr-4 text-gray-700">Login with</p>
                    <div className="flex">
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        {/* <!-- Facebook --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="w-4 h-4"
                        >
                          {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                          <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        {/* <!-- Twitter --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="w-4 h-4"
                        >
                          {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        {/* <!-- Linkedin --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-4 h-4"
                        >
                          {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <a
                      href="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Login;
