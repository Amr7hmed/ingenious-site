import { useSelector } from "react-redux";
import Slider from "react-slick";

function OurTeam() {
  const lang = useSelector((state) => state.lang.data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    rtl: lang === "en" ? false : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="our-team py-5">
      <div className="container">
        <div className="row">
          {/* Start Our Section */}
          <div className="col-md-4">
            <div className="our-team-title">
              <h3 className="main-color text-uppercase">
                Our <span className="fw-bold">Team</span>
              </h3>
              <p className="fw-bold mb-1">
                Eum cu tantas legere complectitur, hinc utamur ea eam. Eum
                patrioque
              </p>
              <p>
                mnesarchum eu, diam erant convenire et vis. Et essent evertitur
                sea, vis cu ubique referrentur, sed eu dicant expetendis.
              </p>
              <button className="main-btn">View All</button>
            </div>
          </div>
          {/* Start Slider */}
          <div className="col-md-8">
            <Slider {...settings}>
              {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => {
                return (
                  <div className="our-team__item p-2" key={index}>
                    <img
                      src="./assets/images/team/team.png"
                      alt="our-team"
                      className="our-team__item-img w-100"
                    />
                    <div className="our-team__item-info">
                      <h6 className="our-team__item-title">
                        Eng. Mohamed Ahmed
                      </h6>
                      <span className="our-team__item-position">
                        System Developer
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-content-center our-team__item-sochail">
                      <span className="our-team__item-icon facebook">
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                      </span>
                      <span className="our-team__item-icon twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </span>
                      <span className="our-team__item-icon linkedin">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </span>
                      <span className="our-team__item-icon envelope">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
