import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
let menuHead = [
  { value: "برنامه نویسی", id: 1 },
  { value: " زبان خارجه", id: 2 },
  { value: " آی تی و نرم افزار", id: 3 },
  { value: " مدیریت کسب و کار", id: 4 },
  { value: " مالی و سرمایه گذاری", id: 5 },
  { value: " دانشگاهی مهندسی", id: 6 },
  { value: " مهارت زندگی", id: 7 },
  { value: " هنر", id: 8 },
  { value: " دانشگاهی انسانی", id: 9 },
];
let BlackPage = () => {
  return <div className="black-page"></div>;
};
let li = (
  <i>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4951 4.08008H4.50468C3.61428 4.08008 2.90148 4.66328 2.87988 5.41928V16.3969C2.87988 17.1481 3.59988 17.7601 4.50468 17.7601H11.5199V20.4001H7.31988C7.2244 20.4001 7.13284 20.438 7.06532 20.5055C6.99781 20.573 6.95988 20.6646 6.95988 20.7601C6.95988 20.8556 6.99781 20.9471 7.06532 21.0146C7.13284 21.0822 7.2244 21.1201 7.31988 21.1201H16.6799C16.7754 21.1201 16.8669 21.0822 16.9344 21.0146C17.002 20.9471 17.0399 20.8556 17.0399 20.7601C17.0399 20.6646 17.002 20.573 16.9344 20.5055C16.8669 20.438 16.7754 20.4001 16.6799 20.4001H12.2399V17.7601H19.4951C20.3999 17.7601 21.1199 17.1481 21.1199 16.3969V5.44328C21.1199 4.69208 20.3999 4.08008 19.4951 4.08008ZM20.3999 16.3969C20.3999 16.7449 19.9847 17.0401 19.4951 17.0401H11.9999H4.50468C4.02468 17.0401 3.59988 16.7449 3.59988 16.3969V5.42888C3.59988 5.08328 4.01508 4.80008 4.50468 4.80008H19.4951C19.9751 4.80008 20.3999 5.09528 20.3999 5.44328V16.3969Z"
        fill="#3D3D3D"
        stroke="#3D3D3D"
        strokeWidth="0.7"
      ></path>
      <path
        d="M13.2646 8.79174C13.1801 8.74961 13.0824 8.74236 12.9927 8.77153C12.9029 8.80071 12.8282 8.86399 12.7846 8.94774L10.8454 12.7205C10.8238 12.7626 10.8107 12.8085 10.8069 12.8557C10.803 12.9028 10.8085 12.9502 10.823 12.9952C10.8375 13.0403 10.8607 13.082 10.8913 13.118C10.9219 13.1541 10.9593 13.1837 11.0014 13.2053C11.0435 13.2269 11.0894 13.24 11.1365 13.2439C11.1836 13.2477 11.2311 13.2422 11.2761 13.2277C11.3211 13.2133 11.3628 13.19 11.3989 13.1594C11.4349 13.1288 11.4646 13.0914 11.4862 13.0493L13.4206 9.26934C13.462 9.1851 13.4688 9.08804 13.4397 8.99882C13.4105 8.90961 13.3477 8.8353 13.2646 8.79174Z"
        fill="#3D3D3D"
        stroke="#3D3D3D"
        strokeWidth="0.7"
      ></path>
      <path
        d="M15.5667 8.65912C15.4985 8.59553 15.4082 8.56091 15.315 8.56256C15.2217 8.5642 15.1327 8.60198 15.0668 8.66794C15.0008 8.7339 14.963 8.82288 14.9614 8.91615C14.9597 9.00941 14.9943 9.09968 15.0579 9.16792L16.8531 10.9607L15.0579 12.7535C15.0226 12.7865 14.9942 12.8262 14.9745 12.8704C14.9548 12.9145 14.9443 12.9622 14.9434 13.0105C14.9426 13.0589 14.9515 13.1069 14.9696 13.1517C14.9877 13.1966 15.0146 13.2373 15.0488 13.2715C15.083 13.3056 15.1237 13.3326 15.1685 13.3507C15.2134 13.3688 15.2614 13.3777 15.3097 13.3768C15.358 13.376 15.4057 13.3654 15.4499 13.3457C15.494 13.3261 15.5338 13.2977 15.5667 13.2623L17.6163 11.2151C17.6838 11.1476 17.7216 11.0561 17.7216 10.9607C17.7216 10.8653 17.6838 10.7738 17.6163 10.7063L15.5667 8.65912Z"
        fill="#3D3D3D"
        stroke="#3D3D3D"
        strokeWidth="0.7"
      ></path>
      <path
        d="M9.21642 8.65997C9.14892 8.59256 9.05742 8.55469 8.96202 8.55469C8.86662 8.55469 8.77512 8.59256 8.70762 8.65997L6.65802 10.7096C6.5906 10.7771 6.55273 10.8686 6.55273 10.964C6.55273 11.0594 6.5906 11.1509 6.65802 11.2184L8.70762 13.268C8.77586 13.3316 8.86612 13.3662 8.95939 13.3645C9.05265 13.3629 9.14164 13.3251 9.2076 13.2591C9.27355 13.1932 9.31134 13.1042 9.31298 13.0109C9.31463 12.9177 9.28001 12.8274 9.21642 12.7592L7.42122 10.9664L9.21642 9.16877C9.28383 9.10127 9.3217 9.00977 9.3217 8.91437C9.3217 8.81897 9.28383 8.72747 9.21642 8.65997Z"
        fill="#3D3D3D"
        stroke="#3D3D3D"
        strokeWidth="0.7"
      ></path>
    </svg>
  </i>
);
let MenuContent1 = (props) => {
  let mainStyle = {
    display: props.id === props.selectedDiv ? "flex" : "none",
  };
  return (
    <>
      <div style={mainStyle} className="menu--content ">
        <ul className=" d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className=" d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> زبان‌های برنامه‌نویسی </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
      </div>
    </>
  );
};
let MenuContent2 = (props) => {
  let mainStyle = {
    display: props.id === props.selectedDiv ? "flex" : "none",
  };
  return (
    <>
      <div style={mainStyle} className="menu--content ">
        <ul className=" d-flex flex-column">
          <li> زبان انگلیسی</li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className=" d-flex flex-column">
          <li> زبان ترکی</li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
          <li> پایتون </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان عربی</li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان انگلیسی</li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
          <li> پایتون </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان فرانسه</li>
          <li> پایتون </li>
          <li> جاوا </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان روسی</li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> </li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
          <li> پایتون </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان انگلیسی</li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> </li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> Kotlin </li>
          <li> پایتون </li>
          <li> php </li>
        </ul>
        <ul className="d-flex flex-column">
          <li> زبان انگلیسی</li>
          <li> پایتون </li>
          <li> جاوا </li>
          <li> تعیین سطح </li>
          <li> مکالمه </li>
          <li> گرامر</li>
          <li> دوره های سطح بندی شده </li>
          <li> لغات انگلیسی </li>
          <li> Kotlin </li>
          <li> پایتون </li>
        </ul>
      </div>
    </>
  );
};

let Menu = (props) => {
  let [selectedDiv, setDiv] = useState(1);
  const styles = {
    display: props.on ? "flex" : "none",
  };
  let handleClick = (id) => {
    setDiv((selectedDiv = id));
  };

  return (
    // style obj for show hide menu
    <div style={styles} className="mega-menu ">
      {/* ul is side part of menu */}
      <ul className="d-flex flex-column">
        {menuHead.map((x, index) => (
          <li onClick={() => handleClick(x.id)} key={x.id}>
            {x.value}
            {li}
          </li>
        ))}
      </ul>
      {/* these are main part of menu*/}
      <MenuContent1 id={1} selectedDiv={selectedDiv} />
      <MenuContent2 id={2} selectedDiv={selectedDiv} />
    </div>
  );
};

export default Menu;
