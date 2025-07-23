import React from "react";
import About from "../../../components/about/About";
import Service from "../../../components/service/Service";
import MoreService from "../../../components/service/MoreService";
import Reason from "../../../components/reason/Reason";
import Statistic from "../../../components/statistic/Statistic";
import MobileApp from "../../../components/mobileApp/MobileApp";
import New from "../../../components/news/New";
import Contact from "../../../components/contact/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-center">
        <img src="/slider_1.webp" alt="Wedding Studio Slider" />
      </div>
      <About />
      <Service />
      <MoreService></MoreService>
      <Reason></Reason>
      <Statistic></Statistic>
      <MobileApp></MobileApp>
      <New></New>
      <Contact></Contact>
    </div>
  );
};

export default Home;
