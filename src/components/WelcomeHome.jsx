function WelcomeHome() {
  return (
    <section className="welcome-home py-5 main-bg">
      <div className="container">
        <div className="row">
          {/* Start Col */}
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="welcome-home__item">
              <div className="welcome-home__img">
                <img src="./assets/images/wel/1.png" alt="" />
              </div>
              <div className="welcome-home__info">
                <h5 className="text-uppercase welcome-home__title fw-bold">
                  achievement
                </h5>
                <p className="welcome-home__desc">
                  Fast completion of tasks in a timely manner
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="welcome-home__item">
              <div className="welcome-home__img">
                <img src="./assets/images/wel/2.png" alt="" />
              </div>
              <div className="welcome-home__info">
                <h5 className="text-uppercase welcome-home__title fw-bold">
                  safety
                </h5>
                <p className="welcome-home__desc">
                  Provides you with continuous support all the time{" "}
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="welcome-home__item">
              <div className="welcome-home__img">
                <img src="./assets/images/wel/3.png" alt="" />
              </div>
              <div className="welcome-home__info">
                <h5 className="text-uppercase welcome-home__title fw-bold">
                  support
                </h5>
                <p className="welcome-home__desc">
                  Provides you with continuous support all the time
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="welcome-home__item">
              <div className="welcome-home__img">
                <img src="./assets/images/wel/4.png" alt="" />
              </div>
              <div className="welcome-home__info">
                <h5 className="text-uppercase welcome-home__title fw-bold">
                  quality
                </h5>
                <p className="welcome-home__desc">
                  Get the job done with the highest quality
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </section>
  );
}

export default WelcomeHome;
