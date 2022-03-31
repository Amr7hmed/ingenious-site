import { Link } from "react-router-dom";

function AboutHome() {
  return (
    <section className="about-home py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="about-home__img">
              <img src="./assets/images/about/about.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-home__info">
              <span className="text-uppercase  secnd-color h4">About </span>
              <h2 className="text-uppercase fw-bold main-color">Ingenious</h2>
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore quisquam est, qui
                dolorem ipsum magna aliqua. Ut enim ad minim veniam, quis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut quisquam est, qui dolorem
                ipsum fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <div className="d-flex justify-content-end">
                <Link to="/about" className="main-btn text-uppercase mt-3">
                  our company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
