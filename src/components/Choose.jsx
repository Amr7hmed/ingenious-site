import MainTitleSection from "./MainTitleSection";

function Choose() {
  return (
    <section className="choose-us ">
      <MainTitleSection
        title="why choose us"
        para="Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
      dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun."
        titleColor="title-color"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="choose-us__content">
              <span className="icon">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <div className="choose-us__content-txt">
                <h6 className="text-uppercase choose-us__content-title">
                  PROFESSIONAL EXPERIENCE
                </h6>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Mauris blandit aliquet elit, eget tincidunt ni
                  dictum porta.Cras ultricies ligula sed magna dictum est ontar
                  des lorem ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="choose-us__content">
              <span className="icon">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </span>
              <div className="choose-us__content-txt">
                <h6 className="text-uppercase choose-us__content-title">
                  COMMUNICATIVE TEAM
                </h6>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Mauris blandit aliquet elit, eget tincidunt ni
                  dictum porta.Cras ultricies ligula sed magna dictum est ontar
                  des lorem ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
