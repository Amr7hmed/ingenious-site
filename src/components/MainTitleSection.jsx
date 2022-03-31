function MainTitleSection({ title, para, titleColor }) {
  return (
    <div className="container">
      <div className="section-title text-center">
        <h3 className={`text-uppercase fw-bold main-color ${titleColor}`}>
          {title}
        </h3>
        <p className="section-title__para">{para}</p>
      </div>
    </div>
  );
}

export default MainTitleSection;
