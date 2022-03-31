function ContactForm() {
  return (
    <div className="contact-form ">
      <div className="container">
        <h2 className="text-uppercase fw-bold contact-form__title">
          Contact Form
        </h2>
        <form className="row">
          <div className="col-12">
            <input
              name="Name"
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <input
              name="Mobile1"
              type="text"
              className="form-control"
              placeholder="Mobile"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <input
              name="Mobile2"
              type="text"
              className="form-control"
              placeholder="Mobile"
            />
          </div>
          <div className="col-12 ">
            <input
              name="Title"
              type="text"
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="col-12 ">
            <textarea
              name="Message"
              className="form-control"
              placeholder="The Message"
            />
          </div>
          <div className="col">
            <button className="main-btn main-btn--bg border px-5">
              Supmit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
