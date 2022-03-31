function ServiceItem() {
  return (
    <div className="service-item text-center border py-4 px-4">
      <img
        className="border rounded-circle mb-3"
        src="./assets/images/contact/icon.png"
        alt="icon"
      />
      <h3 className="text-uppercase">Research</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <button className="main-btn">Service request</button>
    </div>
  );
}

export default ServiceItem;
