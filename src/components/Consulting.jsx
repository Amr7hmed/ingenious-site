import Slider from "react-slick";
import MainTitleSection from "./MainTitleSection";
import { Link } from "react-router-dom";

function Consulting() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    arrows: false,
    centerPadding: "10",
    lazyLoad: true,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="consulting ">
      <MainTitleSection
        title="Our consulting services"
        para="Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
      dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun."
        titleColor=""
      />

      <div className="container">
        <Slider {...settings}>
          {[1, 2, 3, 4, 1].map((item, index) => {
            return (
              <div className="consulting__item text-center" key={index}>
                <span className="consulting__item-icon">
                  <i className="fa fa-500px" aria-hidden="true"></i>
                </span>
                <h5 className="consulting__item-title text-uppercase">
                  intellectual property
                </h5>
                <p className="consulting__item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/services" className="main-btn text-uppercase">
                  Service request
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Consulting;
