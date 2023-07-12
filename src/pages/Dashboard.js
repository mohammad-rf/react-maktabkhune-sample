import React, { useState } from "react";
import { Nav } from "../components/Header";
import profileLogo from "../image/avatar.webp";
import { Footer } from "../components/import";
import { Link } from "react-router-dom";

function MyCourse(props) {
  let style = { display: props.selectedDiv === 1 ? "block" : "none" };

  return (
    <div style={style}>
      <div className="my-courses">
        <div className="mb-2 ">دوره های مکتب پلاس من:</div>
        <div className="bg-white border border-1 d-flex justify-content-center flex-wrap px-2 pb-3 pt-2">
          <p className="align-self-start w-100">
            {" "}
            شما در هیچ دوره مکتب پلاس شرکت نکرده اید.{" "}
          </p>
          <button className="d-flex ">دیدن دوره های مکتب پلاس</button>
        </div>
      </div>
      <div className="my-courses">
        <div className="mb-2">دوره های رایگان من:</div>
        <div className="bg-white border border-1 d-flex justify-content-center flex-wrap px-2 pb-3 pt-2">
          <p className="align-self-start w-100">
            {" "}
            شما در هیچ دوره مکتب پلاس شرکت نکرده اید.{" "}
          </p>
          <button className="d-flex ">دیدن دوره های رایگان</button>
        </div>
      </div>
      <div className="my-courses">
        <div className="mb-2"> همایش ها و دوره های من: </div>
        <div className="bg-white border border-1 d-flex justify-content-center flex-wrap px-2 pb-3 pt-2">
          <p className="align-self-start w-100">
            {" "}
            شما هنوز همایش منتخبی ندارید.{" "}
          </p>
          <button className="d-flex "> دیدن همایش ها</button>
        </div>
      </div>
    </div>
  );
}

function Profile(props) {
  let style = { display: props.selectedDiv === 2 ? "block" : "none" };
  return (
    <div style={style} className="p-4 profile-wrapper">
      <div className="profile d-flex row rounded-1 border border-1">
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
        <div className="col-6 ">
          <div>نام:</div>
          <div></div>
        </div>
      </div>
      <button className="profile-edit rounded-pill">
        <Link to="/profile-edit"> ویرایش پروفایل </Link>
      </button>
    </div>
  );
}

function Content() {
  let [selectedDiv, setDiv] = useState(1);

  function handleClick(id) {
    setDiv((selectedDiv = id));
  }

  return (
    <>
      <div className="signin--const">
        <div className="text-center">
          <div className="profile-logo--wrapper">
            <img className="mt-3 mb-4" alt=" " src={profileLogo} />
          </div>
          <div>
            <button>ثبت ایمیل برای ورود به مکتب خونه</button>
            <div className="phone d-flex align-items-center justify-content-center">
              شماره موبایل:
              <span className="phone-number ms-1">09174830697</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="px-3 py-2 border border-dark me-2 rounded-pill">
              تغییر رمز
            </div>
            <div className="px-3 py-2 border border-1 border-dark rounded-pill">
              خروج
            </div>
          </div>
          <div className="dynamic-navbar d-flex row-cols-5 mt-4 ">
            <div
              onClick={() => handleClick(1)}
              className={selectedDiv === 1 ? "active" : ""}
              id={1}
            >
              دوره های من{" "}
            </div>
            <div
              onClick={() => handleClick(2)}
              className={selectedDiv === 2 ? "active" : ""}
              id={2}
            >
              {" "}
              پروفایل
            </div>
            <div
              onClick={() => handleClick(3)}
              className={selectedDiv === 3 ? "active" : ""}
              id={3}
            >
              دستاورد ها
            </div>
            <div
              onClick={() => handleClick(4)}
              className={selectedDiv === 4 ? "active" : ""}
              id={4}
            >
              سوابق تراکنش ها
            </div>
            <div
              onClick={() => handleClick(5)}
              className={selectedDiv === 5 ? "active" : ""}
              id={5}
            >
              پیام ها
            </div>
          </div>
          <div className="blue-robbon"></div>
        </div>
      </div>
      <MyCourse selectedDiv={selectedDiv} />
      <Profile selectedDiv={selectedDiv} />
    </>
  );
}

const Dashboard = () => {
  return (
    <>
      <Nav />
      <Content />
      <Footer />
    </>
  );
};

export default Dashboard;
