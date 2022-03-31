import AboutHome from "../components/AboutHome";
import Choose from "../components/Choose";
import Consulting from "../components/Consulting";
import Customers from "../components/Customers";
import OurTeam from "../components/OurTeam";
import SliderHeader from "../components/SliderHeader";
import WelcomeHome from "../components/WelcomeHome";
import { ScrollToTop } from "../components/ScrollToTop";
import { Helmet } from "react-helmet";
import useAxios from "../api/useAxios";

function Home() {
  ScrollToTop();
  // const { respons, error, loading } = useAxios({ url: "/products" });
  // if (loading) {
  //   <div className="d-flex  align-items-center justify-content-center loading-app">
  //     <h1>Loading.....</h1>
  //   </div>;
  // }
  // console.log(loading, "loading");
  // console.log(respons, "respons");
  // console.log(error, "error");

  return (
    <>
      {/* Title Page */}
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ingenious || Home </title>
        <meta name="description" content="Ingenious application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <SliderHeader />
      <WelcomeHome />
      <AboutHome />
      <Consulting />
      <Choose />
      <OurTeam />
      <Customers />
    </>
  );
}

export default Home;
