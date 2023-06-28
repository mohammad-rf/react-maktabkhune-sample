import logo from "../image/logo_small.png";
let Card = (props) => {
  return (
    <div className="course-card">
      <a className="course-card--img" href="w">
        <img className="w-100 object-fit-cover" alt=" " src={props.img} />
      </a>
      <div className="course-card--content">
        <a href="i">
          <div className="course-title"> آموزش برنامه‌نویسی مقدماتی Rust</div>
          <div className="course-producter">
            <div>
              <img alt="" src={logo} />
              مکتب خونه
            </div>
            <div className="course-producter--author">محدثه شهربندیان</div>
          </div>
          <div className="course-price">{props.price} تومان</div>
        </a>
        <div className="course-buy">
          <button className="btn-buy">خرید دوره</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
