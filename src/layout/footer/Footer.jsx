import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const lang = useSelector((state) => state.lang.data);

  return (
    <>
      <footer className="main-footer py-5">
        <div className="container">
          <div className="row">
            {/* Start Col */}
            <div className="col-md-5 mb-md-0 mb-3">
              <div className="footer__info">
                <img
                  src="./assets/images/logo/logo-footer.png"
                  alt="logo"
                  className="footer__info-logo mb-3"
                />
                <p className="footer__info-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="payment-icons">
                  <Link to="#" className="payment-icon">
                    <i className="fa fa-cc-visa"></i>
                  </Link>
                  <Link to="#" className="payment-icon">
                    <i className="fa fa-cc-mastercard"></i>
                  </Link>
                  <Link to="#" className="payment-icon">
                    <i className="fa fa-cc-paypal"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Start Col */}
            <div className="col-md-4 mb-md-0 mb-3">
              <h4 className="footer-title mb-3">
                <span className="fw-normal">News</span> Letter
              </h4>
              <p>
                Subscribe to our <strong> Newsletter</strong> and get exclusive
                deals you wont find anywhere else straight to your inbox ! ..{" "}
              </p>
              <form action="" className="footer__form">
                <div className="d-flex align-items-center border">
                  <input
                    className="form-control border-0 rounded-0"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                  <button className="btn text-uppercase rounded-0">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
              <ul className="footer__sochail d-flex mt-3">
                <li>
                  <Link to="#">
                    <span className="footer__sochail-icon">
                      <i className=" me-2 fa fa-behance" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="footer__sochail-icon">
                      <i className=" me-2 fa fa-vimeo" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="footer__sochail-icon">
                      <i
                        className=" me-2 fa fa-facebook-f"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="footer__sochail-icon">
                      <i
                        className=" me-2 fa fa-youtube-play"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="footer__sochail-icon">
                      <i className=" me-2 fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Start Col */}
            <div className="col-md-3">
              <h4 className="footer-title mb-3">
                <span className="fw-normal">Main</span> Menu
              </h4>
              <ul>
                <li className="footer__link">
                  <i
                    className={`${
                      lang === "en"
                        ? "fa fa-angle-double-right me-2"
                        : "fa fa-angle-double-left ms-2"
                    } `}
                    aria-hidden="true"
                  ></i>
                  <Link to="/">Home</Link>
                </li>
                <li className="footer__link">
                  <i
                    className={`${
                      lang === "en"
                        ? "fa fa-angle-double-right me-2"
                        : "fa fa-angle-double-left ms-2"
                    } `}
                    aria-hidden="true"
                  ></i>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="footer__link">
                  <i
                    className={`${
                      lang === "en"
                        ? "fa fa-angle-double-right me-2"
                        : "fa fa-angle-double-left ms-2"
                    } `}
                    aria-hidden="true"
                  ></i>
                  <Link to="/services">Services</Link>
                </li>
                <li className="footer__link">
                  <i
                    className={`${
                      lang === "en"
                        ? "fa fa-angle-double-right me-2"
                        : "fa fa-angle-double-left ms-2"
                    } `}
                    aria-hidden="true"
                  ></i>
                  <Link to="#">Board of Directors</Link>
                </li>
                <li className="footer__link">
                  <i
                    className={`${
                      lang === "en"
                        ? "fa fa-angle-double-right me-2"
                        : "fa fa-angle-double-left ms-2"
                    } `}
                    aria-hidden="true"
                  ></i>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right border-top text-center pt-3 mt-lg-5 mt-3">
            <p>
              <span>Copyright 1998 - 2022 </span>
              <strong className="border-start border-end px-2">
                INGENIOUS
              </strong>
              <span> All Rights Reserved</span>
            </p>
            <p>Powered by IM Solutions</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
