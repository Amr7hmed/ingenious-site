import HeaderPage from "./../components/HeaderPage";
import { ScrollToTop } from "./../components/ScrollToTop";
import MainTitleSection from "./../components/MainTitleSection";
import PaginationPage from "../components/PaginationPage";
import ServiceItem from "../components/ServiceItem";
function Services() {
  ScrollToTop();

  return (
    <>
      <HeaderPage bgImg="./assets/images/bg/header-page.png" />
      <MainTitleSection
        title="Our consulting services"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud"
        titleColor="mt-5"
      />
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
            return (
              <div className="col-md-4 mb-4" key={i}>
                <ServiceItem />
              </div>
            );
          })}
        </div>
      </div>
      <PaginationPage />
    </>
  );
}

export default Services;
