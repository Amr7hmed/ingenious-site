import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SliderHeader() {
  const lang = useSelector((state) => state.lang.data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    arrows: true,
    centerPadding: "0",
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
    // rtl: lang === "en" ? false : true,
  };
  return (
    <section className="header-home">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div className="header-home__item" key={index}>
              <div className="header-home__item-img">
                <img
                  className="w-100"
                  src="./assets/images/slider/item.png"
                  alt=""
                />
              </div>
              <div className="header-home__item-welcome">
                <h1 className="main-color">
                  Welcome to <strong>Ingenious</strong>
                </h1>
                <p className="main-color">
                  A human being is a part of a whole, called by us universe, a
                  part limited in time and space
                </p>
                <p className="d-none d-lg-block main-color">
                  . He experiences himself, his thoughts and feelings as
                  something separated from the rest... a kind of optical
                  delusion of his consciousness. This delusion is a kind of
                  prison for us.
                </p>
                <div className="d-flex my-3 justify-content-md-end ">
                  <Link to="/about" className="main-btn text-uppercase">
                    our company
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default SliderHeader;
