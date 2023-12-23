import React, { useState, useEffect } from "react";
import "./sign-style.css";
import { useAuth } from "../Context/AuthContext";
import dataUser from "../UsersData";
import { Link } from "react-router-dom";
// login Component
const LogIn = () => {
  const [data, setData] = useState({});

  //this state save inpute value after submit
  const { user, setUser, loggedIn, setLoggedIn } = useAuth();

  //this state save input value on state before submit
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  });

  //  func for save input values on state
  function handleChange(evt) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // is this useful or not????
    setData({
      passWord: formData.passWord,
      userName: formData.userName,
    });

    let p = "1111";
    let u = "mohammad@gmail.com";
    setUser(() => {
      let res = dataUser.find(
        (x) => x.passWord === data.passWord && x.email === data.userName
      );
      setLoggedIn(res ? true : false);
      return res;
    });
  };
  console.log(`data=` + data);
  console.log("form data" + formData);
  console.log(loggedIn);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center  min-vh-100 ">
        <div className="logo-header"></div>
        <section className="shadow rounded-3 bg-white text-center ">
          <div className="signin ">
            <a className="bg-transparent text-decoration-none" href="uu">
              <span className="me-2">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 4.61538C3.84615 7.16439 5.91253 9.23077 8.46154 9.23077C11.0105 9.23077 13.0769 7.16439 13.0769 4.61538C13.0769 2.06638 11.0105 0 8.46154 0C5.91253 0 3.84615 2.06638 3.84615 4.61538ZM5.38462 4.61538C5.38462 6.31472 6.7622 7.69231 8.46154 7.69231C10.1609 7.69231 11.5385 6.31472 11.5385 4.61538C11.5385 2.91605 10.1609 1.53846 8.46154 1.53846C6.7622 1.53846 5.38462 2.91605 5.38462 4.61538Z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 14.6154C0 17.7827 1.49346 18.4615 8.46154 18.4615C15.4296 18.4615 16.9231 17.7827 16.9231 14.6154C16.9231 11.4481 15.4296 10.7692 8.46154 10.7692C1.49346 10.7692 0 11.4481 0 14.6154ZM1.53846 14.6154C1.53846 15.3149 1.62639 15.6765 1.72434 15.8768C1.79381 16.0189 1.9072 16.1678 2.25436 16.3256C2.6518 16.5063 3.29776 16.6686 4.35439 16.7753C5.39628 16.8806 6.73474 16.9231 8.46154 16.9231C10.1883 16.9231 11.5268 16.8806 12.5687 16.7753C13.6253 16.6686 14.2713 16.5063 14.6687 16.3256C15.0159 16.1678 15.1293 16.0189 15.1987 15.8768C15.2967 15.6765 15.3846 15.3149 15.3846 14.6154C15.3846 13.9159 15.2967 13.5543 15.1987 13.354C15.1293 13.2119 15.0159 13.0629 14.6687 12.9051C14.2713 12.7245 13.6253 12.5622 12.5687 12.4555C11.5268 12.3502 10.1883 12.3077 8.46154 12.3077C6.73474 12.3077 5.39628 12.3502 4.35439 12.4555C3.29776 12.5622 2.6518 12.7245 2.25436 12.9051C1.9072 13.0629 1.79381 13.2119 1.72434 13.354C1.62639 13.5543 1.53846 13.9159 1.53846 14.6154Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M17.6919 5.38447C17.6919 4.95963 17.3475 4.61523 16.9226 4.61523C16.4978 4.61523 16.1534 4.95963 16.1534 5.38447V6.92293H14.6149C14.1901 6.92293 13.8457 7.26732 13.8457 7.69216C13.8457 8.11699 14.1901 8.46139 14.6149 8.46139H16.1534V9.99985C16.1534 10.4247 16.4978 10.7691 16.9226 10.7691C17.3475 10.7691 17.6919 10.4247 17.6919 9.99985V8.46139H19.2303C19.6552 8.46139 19.9995 8.11699 19.9995 7.69216C19.9995 7.26732 19.6552 6.92293 19.2303 6.92293H17.6919V5.38447Z"
                    fillOpacity="0.4"
                  ></path>
                </svg>
              </span>
              <span className="">ثبت نام</span>
            </a>
            <Link
              to={loggedIn ? "/dashboard" : "#"}
              className="text-decoration-none px-4 rounded-2 d-inline-flex align-items-center"
              href="aa"
            >
              <span className="me-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M6.66667 11.6667C5.74619 11.6667 5 10.9205 5 10C5 9.07952 5.74619 8.33333 6.66667 8.33333C7.58714 8.33333 8.33333 9.07952 8.33333 10C8.33333 10.9205 7.58714 11.6667 6.66667 11.6667Z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 10C0 18.235 1.765 20 10 20C18.235 20 20 18.235 20 10C20 1.765 18.235 0 10 0C1.765 0 0 1.765 0 10ZM6.66667 13.3333C4.82572 13.3333 3.33333 11.8409 3.33333 10C3.33333 8.15905 4.82572 6.66667 6.66667 6.66667C8.22215 6.66667 9.52879 7.73211 9.89661 9.17302C9.93049 9.16883 9.96499 9.16667 10 9.16667H15.8333C16.2936 9.16667 16.6667 9.53976 16.6667 10V12.5C16.6667 12.9602 16.2936 13.3333 15.8333 13.3333C15.3731 13.3333 15 12.9602 15 12.5V10.8333H13.3333V11.6667C13.3333 12.1269 12.9602 12.5 12.5 12.5C12.0398 12.5 11.6667 12.1269 11.6667 11.6667V10.8333H10C9.96499 10.8333 9.93049 10.8312 9.89661 10.827C9.52879 12.2679 8.22215 13.3333 6.66667 13.3333Z"
                  ></path>
                </svg>
              </span>
              <span className="">ورود</span>
            </Link>
          </div>
          <div className="boxes-4 mb-5 row ">
            <div className="col-5 me-4 shadow-sm me- d-flex align-items-center my-4 px-3 pe-4 rounded-2">
              <span className="me-2">
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.52391 18.8209H6.34174V9.54903L0.887695 5.4585V17.1847C0.887695 18.0901 1.62126 18.8209 2.52391 18.8209Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M19.4297 18.8209H23.2475C24.1529 18.8209 24.8837 18.0873 24.8837 17.1847V5.4585L19.4297 9.54903"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M19.4297 2.45921V9.54947L24.8837 5.45894V3.27732C24.8837 1.25387 22.5739 0.100341 20.9568 1.31386"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M6.34766 9.54924V2.45898L12.8925 7.36762L19.4374 2.45898V9.54924L12.8925 14.4579"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M0.886719 3.27732V5.45894L6.34076 9.54947V2.45921L4.81363 1.31386C3.19378 0.100341 0.886719 1.25387 0.886719 3.27732Z"
                    fill="#C5221F"
                  ></path>
                </svg>
              </span>
              ورود با گوگل
            </div>
            <div className="col-5  shadow-sm d-flex align-items-center my-4  pe-4 rounded-2 ">
              <span className="me-2">
                <svg
                  className="text-black dark:text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8986 0.219727C5.33541 0.219727 0.0195312 5.5356 0.0195312 12.0988C0.0195312 17.3553 3.41991 21.7951 8.14183 23.369C8.73579 23.473 8.95852 23.1166 8.95852 22.8048C8.95852 22.5226 8.94367 21.5872 8.94367 20.5923C5.95906 21.1417 5.18692 19.8647 4.94934 19.1965C4.8157 18.855 4.2366 17.8007 3.73174 17.5186C3.31597 17.2959 2.72202 16.7465 3.71689 16.7316C4.65236 16.7168 5.32056 17.5928 5.54329 17.9492C6.61241 19.7459 8.32002 19.2411 9.00307 18.9292C9.10701 18.1571 9.41883 17.6374 9.76035 17.3404C7.11727 17.0434 4.35539 16.0189 4.35539 11.4751C4.35539 10.1833 4.8157 9.11417 5.57299 8.28263C5.4542 7.98566 5.03843 6.76805 5.69178 5.13469C5.69178 5.13469 6.68665 4.82286 8.95852 6.35229C9.90884 6.08501 10.9186 5.95137 11.9283 5.95137C12.938 5.95137 13.9477 6.08501 14.898 6.35229C17.1699 4.80801 18.1648 5.13469 18.1648 5.13469C18.8181 6.76805 18.4024 7.98566 18.2836 8.28263C19.0409 9.11417 19.5012 10.1684 19.5012 11.4751C19.5012 16.0337 16.7244 17.0434 14.0814 17.3404C14.512 17.7116 14.8832 18.4244 14.8832 19.538C14.8832 21.1269 14.8683 22.4039 14.8683 22.8048C14.8683 23.1166 15.0911 23.4878 15.685 23.369C20.3773 21.7951 23.7776 17.3404 23.7776 12.0988C23.7776 5.5356 18.4618 0.219727 11.8986 0.219727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              ورود با گیت هاب
            </div>
            <div className="col-5 shadow-sm me-4 d-flex align-items-center my-4 px-3 pe-4 rounded-2 ">
              <span className="me-2">
                <svg
                  className="text-purple-700 dark:text-white"
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.885742 5.61426H5.41223L8.04795 12.3575L10.7179 5.61426H15.1252L8.48878 21.5777H4.05357L5.87017 17.3476L0.885742 5.61426Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16.6356 17.4943C18.15 17.4943 19.3776 16.2667 19.3776 14.7523C19.3776 13.2379 18.15 12.0103 16.6356 12.0103C15.1212 12.0103 13.8936 13.2379 13.8936 14.7523C13.8936 16.2667 15.1212 17.4943 16.6356 17.4943Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M20.2792 11.0028H15.3428L19.7239 0.478027H24.6418L20.2792 11.0028Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              ورود با یاهو
            </div>
            <div className="col-5 shadow-sm  d-flex align-items-center my-4 px-3 pe-4 rounded-2 ">
              <span className="me-2">
                <svg
                  className="text-blue-700"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4676 20.9728H16.9118V15.4042C16.9118 14.0762 16.888 12.3668 15.0624 12.3668C13.2103 12.3668 12.9269 13.8136 12.9269 15.3074V20.9724H9.37112V9.52098H12.7847V11.0859H12.8326C13.5276 9.89754 14.8247 9.18511 16.2006 9.23621C19.8046 9.23621 20.4692 11.6067 20.4692 14.6908L20.4676 20.9728ZM5.35891 7.95562C4.22689 7.95562 3.29495 7.02422 3.29495 5.8922C3.29495 4.76017 4.22646 3.82867 5.35848 3.82867C6.4904 3.82867 7.4218 4.75996 7.42201 5.89177C7.42201 7.02358 6.49072 7.95552 5.35891 7.95562ZM7.1368 20.9728H3.57725V9.52098H7.1368V20.9728ZM22.2403 0.526519H1.79034C0.83039 0.515678 0.0312315 1.29626 0.0195312 2.25622V22.7911C0.0308021 23.7516 0.829853 24.533 1.79034 24.5227H22.2403C23.2031 24.5348 24.005 23.7535 24.0179 22.7911V2.25482C24.005 1.29283 23.2021 0.513853 22.2403 0.526519Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              ورود با لینکدین
            </div>
          </div>
          <div className="login-type-2">
            <div className="mb-4 d-flex justify-content-center  position-relative ">
              <div className="bg-white ">یا ورود به حساب با</div>
              <span className="line position-absolute w-100 "></span>
            </div>

            {/* form have state and handlechange func. */}
            <form onSubmit={handleSubmit} className="text-start">
              <div className="d-flex justify-content-between mb-1">
                <label className="form-label fw-lighter " htmlFor="">
                  ایمیل
                </label>
                <a className="link-primary" href="a">
                  فراموش کرده اید؟
                </a>
              </div>
              <input
                onChange={handleChange}
                className="form-control w-100"
                name="userName"
                type="email"
                value={formData.username}
              />

              <label className="form-label fw-lighter mt-4 mb-1" htmlFor="">
                پسورد
              </label>
              <input
                onChange={handleChange}
                className="form-control w-100"
                name="passWord"
                type="passWord"
                value={formData.passWord}
              />

              <input
                className="w-100  btn  mt-5"
                placeholder=""
                value="ورود"
                type="submit"
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LogIn;
