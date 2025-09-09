
import HeroText from "../components/HeroText";
import Details from "../components/Details";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

const Home = () => {

  return (
    <div className=" pb-8 mt-8 sm:mt-16">
      
      {/* Chatbot toggle button */}

      <div className="flex flex-col gap-5">
        <Banner />
        <HeroText />
        <Details />
        <Faq />
        <Cta/>
      </div>
    </div>
  );
};

export default Home;
