import React from "react";

let Sidebar = () => {
  return (
    <>
      <div className="d-felx flex-column">
        <div> برنامه نویسی</div>
        <div> ای تی و نرم افزار</div>
        <div> زبان های خارجه</div>
        <div> برنامه نویسی</div>
        <div> ای تی و نرم افزار</div>
        <div> زبان های خارجه</div>
        <div> برنامه نویسی</div>
        <div> ای تی و نرم افزار</div>
        <div> زبان های خارجه</div>
      </div>
    </>
  );
};

let MegaMenu = () => {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      {/* <MainContent /> */}
    </div>
  );
};

export default MegaMenu;
