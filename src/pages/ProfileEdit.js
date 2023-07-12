import React from "react";
import { Nav } from "../components/Header";
import { Footer } from "../components/import";

const Part1 = () => {
  return (
    <>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label> کشور</label>
        <select className="w-100">
          <option> ایران</option>
          <option> ترکیه</option>
          <option> آذزبایجان</option>
          <option> روسیه</option>
        </select>
      </div>
      <div>
        <label> جنسیت</label>
        <select className="w-100">
          <option> ----</option>
          <option> مرد</option>
          <option> زن</option>
          <option> موارد دیگر</option>
        </select>
      </div>
    </>
  );
};
const Part2 = () => {
  return (
    <>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label>نام</label>
        <input placeholder="نام" type="text" />
      </div>
      <div>
        <label> استان</label>
        <select className="w-100">
          <option>------- </option>
          <option> تهران</option>
          <option> فارس</option>
          <option> اصفهان</option>
          <option> خراسان</option>
        </select>
      </div>
    </>
  );
};

const Form = () => {
  return (
    <div className="form-wrapper">
      <div>
        <form className="row w-100">
          <div className="col-6">
            <Part1 />
          </div>
          <div className="col-6">
            <Part2 />
          </div>
          <div className="col-12"></div>
        </form>
      </div>
    </div>
  );
};

const ProfileEdit = () => {
  return (
    <>
      <Nav />
      <Form />
      <Footer />
    </>
  );
};

export default ProfileEdit;
