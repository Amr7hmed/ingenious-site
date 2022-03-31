import MainTitleSection from "./MainTitleSection";

import Slider from "react-slick";
import { useSelector } from "react-redux";

function Customers() {
  const lang = useSelector((state) => state.lang.data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    rtl: lang === "en" ? false : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="customers py-5">
      <MainTitleSection
        title="OUR CUSTOMERS"
        para="Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun."
        titleColor="title-color"
      />
      <div className="container mt-5">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 1, 2].map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={`./assets/images/customers/${item}.png `}
                  alt="customers"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Customers;
