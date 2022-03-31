import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Button, Space } from "antd";
import { DrawerProps } from "antd/es/drawer";
import { Link, NavLink } from "react-router-dom";
import { SetAr, SetEn } from "../../redux/Lang";
import { useState } from "react";

function MainNavbar() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.data);

  // Drawer
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="upper-navbar d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-3 mb-md-0 d-lg-flex align-items-center d-none ">
              <div className="upper__info d-flex align-items-center w-100">
                <div className="row g-0 w-100">
                  <div className="col-md-6 text-center text-md-start">
                    <div className="upper__info-icon ">
                      <i className="fa fa-phone mx-2" aria-hidden="true"></i>
                      <span>Call Us: +2 - 0114 - 32 777 - 15</span>
                    </div>
                  </div>
                  <div className="col-md-6 text-center text-md-start">
                    <div className="upper__info-icon border-info">
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                      <span>Mail: info@ingenious.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Shochal */}
            <div className="col-md-7  d-flex align-items-center justify-content-lg-end justify-content-between ">
              <div className="upper__sochial">
                <Link to="#">
                  <i className="fa mx-2 fa-facebook-f" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa mx-2 fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa mx-2 fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa mx-2 fa-google-plus" aria-hidden="true"></i>
                </Link>
              </div>
              {/* End Sochail */}
              <button
                className="d-block  btn text-white fw-bold "
                role="group"
                aria-label="Basic example"
                onClick={() =>
                  lang === "en" ? dispatch(SetAr()) : dispatch(SetEn())
                }
              >
                {lang === "en" ? (
                  <span className="text-uppercase">AR</span>
                ) : (
                  <span className="text-uppercase">EN</span>
                )}
              </button>
              <button className="upper-btn fw-bold d-lg-flex  align-items-center d-none">
                <i className="fa fa-shopping-cart me-3 " aria-hidden="true"></i>
                <span className="me-2">Shopping Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Upper Navbar */}

      <Navbar expand="lg" className="py-0 d-none d-lg-block">
        <Container>
          <Navbar.Brand href="/">
            <img src="./assets/images/logo/logo-header.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto align-items-center" as="ul">
              <Nav.Item className="mx-2" as="li">
                <NavLink className="text-uppercase navbar-link" to={"/"}>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-2" as="li">
                <NavLink className="text-uppercase navbar-link" to={"/about"}>
                  About Us{" "}
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-2" as="li">
                <NavLink
                  className="text-uppercase navbar-link"
                  to={"/services"}
                >
                  services
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-2" as="li">
                <NavLink
                  className="text-uppercase navbar-link"
                  to={"/boardOfDirectors"}
                >
                  Management Board
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-2" as="li">
                <NavLink className="text-uppercase navbar-link" to={"/contact"}>
                  Contact
                </NavLink>
              </Nav.Item>
            </Nav>
            <div className="login-links d-flex align-items-center">
              <i className="fa fa-users mx-3 " aria-hidden="true"></i>
              <div className="d-flex flex-column">
                <h6 className="text-uppercase mb-0">account</h6>
                <div className="">
                  <Link to={"#"} className="main-color">
                    Registration
                  </Link>
                  <span className="main-color"> / </span>
                  <Link to={"#"} className="main-color">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-block d-lg-none mobile-nav py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <img
              src="./assets/images/logo/mobile.png"
              alt="logo"
              className="mobile-logo"
            />
            <Space>
              <button className=" btn-cart ">
                <i
                  className="fa fa-shopping-cart rounded-circle icon-cart"
                  aria-hidden="true"
                ></i>
                <span className="count-cart">12</span>
              </button>
              <Button className="btn mobile-btn" onClick={showDefaultDrawer}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Button>
            </Space>
          </div>
        </div>
        <Drawer
          title={<img src="./assets/images/logo/mobile-nav.png" />}
          placement="right"
          width="90%"
          size={size}
          onClose={onClose}
          visible={visible}
        >
          <div className="d-flex flex-column justify-content-between">
            <ul className="mobile-list">
              <li>
                <NavLink className="text-capitalize mobile-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-capitalize mobile-link" to={"/about"}>
                  About Us{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-capitalize mobile-link"
                  to={"/services"}
                >
                  services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-capitalize mobile-link"
                  to={"/boardOfDirectors"}
                >
                  Management Board
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-capitalize mobile-link"
                  to={"/contact"}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-capitalize mobile-link" to={"/"}>
                  My Account
                </NavLink>
              </li>
            </ul>
            <div className="mobile-btns mt-5">
              <Link
                to={"#"}
                className="w-100 mb-1 text-center main-btn main-btn--bg-main"
              >
                Registration
              </Link>
              <Link
                to={"#"}
                className="w-100 text-center  main-btn main-btn--bg-main"
              >
                Login{" "}
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default MainNavbar;
