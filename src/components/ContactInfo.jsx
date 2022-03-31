function ContactInfo() {
  return (
    <div className="contact-info py-5">
      <div className="container">
        <h2 className="text-uppercase fw-bold contact-info__title">
          Contact Info
        </h2>
        <div className="row">
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <img src="./assets/images/contact/icon.png" alt="icon" />
              <p className="text-uppercase contact-info__box-sup">
                the address
              </p>
              <p>.XXX.XXXX.XXX.XXXX.XXX.XXXX XXX.XXXX.XXX.XXXX.</p>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <img src="./assets/images/contact/icon.png" alt="icon" />
              <p className="text-uppercase contact-info__box-sup">CALL FOR</p>
              <p>604.XXX.XXXX</p>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <img src="./assets/images/contact/icon.png" alt="icon" />
              <p className="text-uppercase contact-info__box-sup">
                EMAIL ADDRESS
              </p>
              <p>info@company.com</p>
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
