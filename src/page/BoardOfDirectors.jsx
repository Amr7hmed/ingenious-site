import MainTitleSection from "./../components/MainTitleSection";
import HeaderPage from "./../components/HeaderPage";

function BoardofDirectors() {
  return (
    <>
      <HeaderPage bgImg="./assets/images/bg/about-bg.png" />
      <MainTitleSection
        title="Our Team"
        para="mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis."
        titleColor="mt-5"
      />
      <section className="our-team py-5">
        <div className="container">
          <div className="row">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => {
              return (
                <div className="col-md-3 mb-3 col-6" key={index}>
                  <div className="our-team__item  shadow-sm">
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
                    <div className="d-flex justify-content-between align-content-center our-team__item-sochail px-2 pb-2">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default BoardofDirectors;
